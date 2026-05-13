import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../../components/Context/Contextapi';
import con from '../../../assets/confetti.gif'

const Products = () => {

    const { products, deleteProduct, createProducts, updateProduct } = useContext(ProductContext);


    if (!products.length) {
        return <h1>Loading...</h1>;
    }


    

    const [showSuccess, setShowSuccess] = useState(false);

    const initialFormState = {
        id: null,
        title: "",
        price: "",
        discount: "",
        rating: 5,
        category: "",
        description: "",
        image: "",
        sizes: "",
        color: "",
    };

    const [form, setForm] = useState(initialFormState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEdit = (p) => {
        setForm({
            ...p,
            sizes: p.sizes ? p.sizes.join(", ") : "",
            color: p.color ? p.color.join(", ") : "",
        });
        setActiveTab("products"); // Edit edəndə məhsul tabına keçsin
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title: form.title,
            price: parseFloat(form.price),
            discount: parseInt(form.discount) || 0,
            rating: parseFloat(form.rating) || 5,
            category: form.category,
            image: form.image,
            description: form.description,
            sizes: form.sizes.split(",").map((s) => s.trim()),
            color: form.color.split(",").map((c) => c.trim()),
        };

        if (form.id) {
            await updateProduct(form.id, payload);
        } else {
            await createProducts(payload);
        }

        // --- TƏSDİQ MƏNTİQİ BURADA OLMALIDIR ---
        setShowSuccess(true);
        setForm(initialFormState);

        // 3 saniyə sonra modalı bağla
        setTimeout(() => {
            setShowSuccess(false); 
        }, 3000);

        console.log(showSuccess);
        
      
    }

      return (
            <main className="flex-1 p-8">

            {showSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    
    <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] text-center relative">
      
      {/* Close button */}
      <button
        onClick={() => setShowSuccess(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Content */}
      <img
        src={con}
        alt="success"
        className="w-20 mx-auto mb-4"
      />

      <h2 className="text-lg font-semibold text-green-600">
        Uğurla tamamlandı!
      </h2>

    </div>
  </div>
)}


                <>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-2xl shadow-sm border mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        <h2 className="col-span-full text-xl font-bold">
                            {form.id ? "Edit Product" : "Add Product"}
                        </h2>
                        <input name="title" value={form.title} placeholder="Title" className="border p-3 rounded-xl" onChange={handleChange} required />
                        <input name="price" type="number" step="0.01" value={form.price} placeholder="Price" className="border p-3 rounded-xl" onChange={handleChange} required />
                        <input name="discount" type="number" value={form.discount} placeholder="Discount" className="border p-3 rounded-xl" onChange={handleChange} />
                        <input name="category" value={form.category} placeholder="Category" className="border p-3 rounded-xl" onChange={handleChange} />
                        <input name="image" value={form.image} placeholder="Image URL" className="border p-3 rounded-xl" onChange={handleChange} />
                        <input name="sizes" value={form.sizes} placeholder="Sizes (S, M, L)" className="border p-3 rounded-xl" onChange={handleChange} />
                        <input name="color" value={form.color} placeholder="Colors (Red, Blue)" className="border p-3 rounded-xl" onChange={handleChange} />
                        <textarea name="description" value={form.description} placeholder="Description" className="border p-3 rounded-xl col-span-1 lg:col-span-2" onChange={handleChange} required />

                        <div className="col-span-full flex gap-3">
                            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
                                {form.id ? "Update" : "Create"}
                            </button>
                            {form.id && (
                                <button type="button" onClick={() => setForm(initialFormState)} className="bg-gray-500 text-white px-8 py-3 rounded-xl">
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {products.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <img src={p.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                                            <span className="font-medium">{p.title}</span>
                                        </td>
                                        <td className="px-6 py-4 text-green-600 font-bold">${p.price}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => handleEdit(p)} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md mr-2">Edit</button>
                                            <button onClick={() => window.confirm("Silinsin?") && deleteProduct(p.id)} className="bg-red-100 text-red-700 px-3 py-1 rounded-md">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>

            </main>
        );
}

export default Products