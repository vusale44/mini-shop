import { createContext } from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
export const ProductContext = createContext();

export const ProviderContext = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Dataları çəkərkən xəta baş verdi:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const createProducts = async (item) => {
        try {
            const response = await axios.post('http://localhost:8000/products', item);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Dataları çəkərkən xəta baş verdi:", error);
            setLoading(false);
        }
    }

    // useEffect(()=>{

    //     let pro =  {
    //         "title": "kiwi",
    //         "category": "Shorts",
    //         "color": "eladi",
    //         "price": 40,
    //         "discount": 10,
    //         "rating": 3.0,
    //         "image": "/images/Fr3.png",
    //         "sizes": ["XX-Small", "X-Small", "Small", "3X-Large", "4X-Large"]
    //     }


    //  createProducts(pro)
    // },[])

 


    if (loading) return <p>Yüklənir...</p>;




    return (
        <ProductContext.Provider value={{ products }}>

            {children}

        </ProductContext.Provider>

    )

}