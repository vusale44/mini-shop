import { createContext } from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
export const ProductContext = createContext();



export const ProviderContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    let len = cart.length


    const addToCart = (basket) => {
        // setCart([...cart, basket]);
        setCart(cart.find((x) => x.id === basket.id) ? cart : [...cart, { ...basket }]);
        
        
    }
    const removeItem = (basket) => {
        setCart(cart.filter((item) => item.id !== basket))
    }
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

    // const createProducts = async (item) => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/products', item);
    //         setProducts(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error("Dataları çəkərkən xəta baş verdi:", error);
    //         setLoading(false);
    //     }
    // }

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




    if (loading)
        return <div className="flex justify-center w-full h-[600px] ">
            <img className="flex justify-center w-[60%] "
                src="https://assets-v2.lottiefiles.com/a/fa3d583e-1171-11ee-894a-4f0a266bd6de/Tg7dsZ0upc.gif" alt="" />
        </div>



    return (
        <ProductContext.Provider value={{ products, cart, addToCart, len, removeItem }}>

            {children}

        </ProductContext.Provider>

    )

}