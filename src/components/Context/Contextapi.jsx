import { createContext } from "react";
 import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
export const ProductContext = createContext();

export const ProviderContext = ({children}) => {


const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Dataları çəkərkən xəta baş verdi:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Yüklənir...</p>;


    return (
        <ProductContext.Provider value={{products}}>

            {children}

        </ProductContext.Provider>

    )

}