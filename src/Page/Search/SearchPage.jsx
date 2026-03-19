import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [sortBy, setSortBy] = useState('popular');

    // Fetch products from db.json
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.log('Ürünler yüklenirken hata:', error);
                // Demo data
                setProducts([
                    {
                        id: 1,
                        title: "T-shirt with Tape Details",
                        category: "t-shirt",
                        price: 120,
                        oldPrice: null,
                        discount: null,
                        rating: 4.5,
                        image: "/images/tshirt1.png"
                    },
                    {
                        id: 2,
                        title: "Skinny Fit Jeans",
                        category: "pants",
                        price: 240,
                        oldPrice: 260,
                        discount: "-20%",
                        rating: 3.5,
                        image: "/images/3.png"
                    }
                ]);
            }
        };
        fetchProducts();
    }, []);

    // Apply all filters
    useEffect(() => {
        let filtered = products;

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Price filter
        filtered = filtered.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        // Rating filter
        if (selectedRating) {
            filtered = filtered.filter(product =>
                product.rating >= selectedRating
            );
        }

        // Sorting
        filtered = sortProducts(filtered, sortBy);

        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategories, priceRange, selectedRating, sortBy, products]);

    const sortProducts = (items, sortType) => {
        const sorted = [...items];
        switch (sortType) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return sorted.reverse();
            default:
                return sorted;
        }
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleSize = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setPriceRange([0, 1000]);
        setSelectedRating(null);
        setSelectedSizes([]);
        setSortBy('popular');
    };

    const categories = ['t-shirt', 'shirt', 'pants', 'shorts', 'hoodie', 'jacket'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const ratings = [5, 4, 3, 2, 1];

    const hasActiveFilters = searchTerm || selectedCategories.length > 0 ||
        selectedRating || selectedSizes.length > 0 ||
        priceRange[0] !== 0 || priceRange[1] !== 1000;

    return (
        <div className='min-h-screen bg-gray-50 py-8'>
            <div className='container mx-auto px-4'>
                {/* Header Section */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4'>Ürünleri Ara ve Filtrele</h1>

                    {/* Search Bar */}
                    <div className='relative'>
                        <div className='flex bg-white rounded-lg shadow-md overflow-hidden'>
                            <FontAwesomeIcon icon={faSearch} className='w-6 h-6 text-gray-400 m-4' />
                            <input
                                type='text'
                                placeholder='Ürün adı, kategori veya özellikleri ara...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='flex-1 px-4 py-3 outline-none text-gray-700'
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='mr-4 text-gray-400 hover:text-gray-600'
                                >
                                    <FontAwesomeIcon icon={faTimes} className='w-5 h-5' />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className='flex gap-6'>
                    {/* Sidebar Filters */}
                    <div className='w-80 shrink-0'>
                        <div className='bg-white rounded-lg shadow-md p-6 sticky top-4'>
                            {/* Filter Header */}
                            <div className='flex items-center justify-between mb-6 pb-4 border-b border-gray-200'>
                                <h2 className='text-lg font-bold text-gray-900'>Filtreler</h2>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className='text-sm text-red-500 hover:text-red-700 font-semibold'
                                    >
                                        Temizle
                                    </button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className='mb-6'>
                                <h3 className='font-semibold text-gray-900 mb-4 text-sm uppercase'>Kategori</h3>
                                <div className='space-y-3'>
                                    {categories.map(category => (
                                        <label key={category} className='flex items-center cursor-pointer'>
                                            <input
                                                type='checkbox'
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                                className='w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer'
                                            />
                                            <span className='ml-3 text-gray-700 text-sm capitalize'>
                                                {category.replace('-', ' ')}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className='my-6' />

                            {/* Price Filter */}
                            <div className='mb-6'>
                                <h3 className='font-semibold text-gray-900 mb-4 text-sm uppercase'>Fiyat Aralığı</h3>
                                <div className='space-y-4'>
                                    <div className='flex gap-2'>
                                        <input
                                            type='number'
                                            min='0'
                                            max='1000'
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                            className='w-full px-3 py-2 border border-gray-300 rounded text-sm'
                                            placeholder='Min'
                                        />
                                        <input
                                            type='number'
                                            min='0'
                                            max='1000'
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                            className='w-full px-3 py-2 border border-gray-300 rounded text-sm'
                                            placeholder='Max'
                                        />
                                    </div>
                                    <input
                                        type='range'
                                        min='0'
                                        max='1000'
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                                    />
                                    <p className='text-sm text-gray-600'>
                                        ${priceRange[0]} - ${priceRange[1]}
                                    </p>
                                </div>
                            </div>

                            <hr className='my-6' />

                            {/* Rating Filter */}
                            <div className='mb-6'>
                                <h3 className='font-semibold text-gray-900 mb-4 text-sm uppercase'>Değerlendirme</h3>
                                <div className='space-y-3'>
                                    {ratings.map(rating => (
                                        <label key={rating} className='flex items-center cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='rating'
                                                checked={selectedRating === rating}
                                                onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                            <div className='ml-3 flex items-center gap-1'>
                                                {[...Array(rating)].map((_, i) => (
                                                    <AiOutlineStar key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                                                ))}
                                                <span className='text-gray-700 text-sm ml-1'>Ve Üzeri</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className='my-6' />

                            {/* Size Filter */}
                            <div className='mb-6'>
                                <h3 className='font-semibold text-gray-900 mb-4 text-sm uppercase'>Beden</h3>
                                <div className='grid grid-cols-3 gap-2'>
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => toggleSize(size)}
                                            className={`py-2 px-3 rounded text-sm font-medium border transition-colors ${selectedSizes.includes(size)
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='flex-1'>
                        {/* Toolbar */}
                        <div className='flex items-center justify-between mb-6 bg-white rounded-lg shadow-md p-4'>
                            <div className='text-gray-700'>
                                <span className='font-semibold'>{filteredProducts.length}</span> sonuç gösteriliyor
                            </div>
                            <div className='flex items-center gap-3'>
                                <label className='text-sm font-medium text-gray-700'>Sırala:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className='px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none'
                                >
                                    <option value='popular'>Popüler</option>
                                    <option value='price-low'>Düşük Fiyat</option>
                                    <option value='price-high'>Yüksek Fiyat</option>
                                    <option value='rating'>En Yüksek Değerlendirme</option>
                                    <option value='newest'>En Yeni</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {filteredProducts.map(product => (
                                    <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                                        <div className='relative h-64 bg-gray-200 overflow-hidden'>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className='w-full h-full object-cover hover:scale-105 transition-transform'
                                            />
                                            {product.discount && (
                                                <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                                                    {product.discount}
                                                </div>
                                            )}
                                        </div>

                                        <div className='p-4'>
                                            <p className='text-xs text-gray-500 uppercase mb-2'>{product.category}</p>
                                            <h3 className='text-gray-900 font-semibold mb-2 line-clamp-2'>{product.title}</h3>

                                            <div className='flex items-center gap-2 mb-3'>
                                                <div className='flex text-yellow-400'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <AiOutlineStar
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : 'fill-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className='text-sm text-gray-600'>({product.rating})</span>
                                            </div>

                                            <div className='flex items-center gap-2 mb-4'>
                                                <span className='text-lg font-bold text-gray-900'>${product.price}</span>
                                                {product.oldPrice && (
                                                    <span className='text-sm text-gray-500 line-through'>${product.oldPrice}</span>
                                                )}
                                            </div>

                                            <button className='w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
                                                Sepete Ekle
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='bg-white rounded-lg shadow-md p-12 text-center'>
                                <p className='text-gray-500 text-lg mb-4'>Arama kriterlerinize uygun ürün bulunamadı.</p>
                                <button
                                    onClick={clearFilters}
                                    className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors'
                                >
                                    Filtreleri Temizle
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
