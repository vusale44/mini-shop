import React, { useEffect, useMemo, useState } from 'react';

const Filter = ({
    filters = {},
    onChange,
    onClear,
    categories = ['T-shirt', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'],
    sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL'],
    minPrice = 0,
    maxPrice = 1000,
}) => {
    const [searchTerm, setSearchTerm] = useState(filters.searchTerm || '');
    const [selectedCategories, setSelectedCategories] = useState(filters.categories || []);
    const [selectedSizes, setSelectedSizes] = useState(filters.sizes || []);
    const [selectedRating, setSelectedRating] = useState(filters.rating || null);
    const [priceRange, setPriceRange] = useState(filters.priceRange || [minPrice, maxPrice]);

    const filteredCategories = useMemo(() => {
        return categories.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [categories, searchTerm]);

    useEffect(() => {
        onChange?.({
            searchTerm,
            categories: selectedCategories,
            sizes: selectedSizes,
            rating: selectedRating,
            priceRange,
        });
    }, [searchTerm, selectedCategories, selectedSizes, selectedRating, priceRange, onChange]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const toggleSize = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    const clearAll = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setSelectedSizes([]);
        setSelectedRating(null);
        setPriceRange([minPrice, maxPrice]);
        onClear?.();
    };

    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className="flex">
            <div className="w-full max-w-[300px] shrink-0 shadow-md px-6 sm:px-8 min-h-screen py-6">
                <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
                    <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
                    <button
                        type="button"
                        onClick={clearAll}
                        className="text-sm text-red-500 font-semibold ml-auto cursor-pointer"
                    >
                        Clear all
                    </button>
                </div>

                <div>
                    <h6 className="text-slate-900 text-sm font-semibold">Brand</h6>
                    <div className="flex px-3 py-1.5 rounded-md border border-gray-300 bg-gray-100 overflow-hidden mt-2">
                        <input
                            type="text"
                            placeholder="Search brand"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent outline-none text-gray-900 text-sm"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192.904 192.904"
                            className="w-3 fill-gray-600"
                        >
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                        </svg>
                    </div>

                    <ul className="mt-6 space-y-4">
                        {filteredCategories.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <input
                                    id={item.toLowerCase()}
                                    type="checkbox"
                                    checked={selectedCategories.includes(item.toLowerCase())}
                                    onChange={() => toggleCategory(item.toLowerCase())}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                <label
                                    htmlFor={item.toLowerCase()}
                                    className="text-slate-600 font-medium text-sm cursor-pointer"
                                >
                                    {item}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                    <h6 className="text-slate-900 text-sm font-semibold">Size</h6>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => toggleSize(size)}
                                className={`cursor-pointer border rounded-md text-[13px] font-medium py-1 px-1 min-w-14 ${selectedSizes.includes(size)
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 text-slate-600 hover:border-blue-600'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                    <h6 className="text-slate-900 text-sm font-semibold">Price</h6>
                    <div className="relative mt-6">
                        <div className="h-1.5 bg-gray-300 relative">
                            <div
                                className="absolute h-1.5 bg-pink-500 rounded-full"
                                style={{
                                    left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                    right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                }}
                            />
                        </div>

                        <div className="flex gap-2 mt-4">
                            <input
                                type="number"
                                min={minPrice}
                                max={priceRange[1]}
                                value={priceRange[0]}
                                onChange={(e) =>
                                    setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                placeholder="Min"
                            />
                            <input
                                type="number"
                                min={priceRange[0]}
                                max={maxPrice}
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                placeholder="Max"
                            />
                        </div>

                        <div className="flex justify-between text-slate-600 font-medium text-sm mt-4">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                    <h6 className="text-slate-900 text-sm font-semibold">Rating</h6>
                    <div className="space-y-3 mt-4">
                        {ratings.map((rating) => (
                            <label key={rating} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={selectedRating === rating}
                                    onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                <span className="ml-3 text-gray-700 text-sm">
                                    {rating} yıldız ve üzeri
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
