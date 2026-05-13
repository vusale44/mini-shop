import { createContext, useEffect, useState, useMemo } from "react";
import axios from 'axios';

export const ProductContext = createContext();

const API_URL = 'https://localhost:7265/api/Card';

export const ProviderContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    // memo
    const totalItems = useMemo(() => {
        return cart.reduce((total, item) => total + (item.quantity || 0), 0);
    }, [cart]);

    const getProducts = async () => {
    
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Məlumat yüklənərkən xəta:", error);
            
        }
        setLoading(false); 
    };
    

    const createProducts = async (item) => {
        try {
            await axios.post(API_URL, item);
            getProducts(); 
        } catch (error) {
            console.error("Yaradılarkən xəta:", error);
        }
       
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            getProducts();
        } catch (error) {
            console.error("Silinərkən xəta:", error);
        }
    };

    const updateProduct = async (id, updatedItem) => {
        try {
            await axios.put(`${API_URL}/${id}`, updatedItem);
            getProducts();
        } catch (error) {
            console.error("Yenilənərkən xəta:", error);
        }
    };

    //basket
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isItemInCart = prevCart.find((item) => item.id === product.id);
            if (isItemInCart) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const decreaseAmount = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    useEffect(() => {
        getProducts();
       
    }, []);

  //gif
   if (loading)
        return <div className="flex justify-center w-full h-[600px] ">
            <img className="flex justify-center w-[60%] "
                src="https://assets-v2.lottiefiles.com/a/fa3d583e-1171-11ee-894a-4f0a266bd6de/Tg7dsZ0upc.gif" alt="" />
        </div>


    return (
        <ProductContext.Provider value={{ products, cart, loading, totalItems, addToCart, decreaseAmount,removeItem, deleteProduct, createProducts, getProducts, updateProduct
    }}>
           
            {children}
        </ProductContext.Provider>
    );
};