import { CartProductType } from "@/app/components/product/ProductDetails";
import { get } from "http";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQuantity: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQuantityIncrease: (product: CartProductType) => void;
    handleCartQuantityDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface  Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        const cartItems: any = localStorage.getItem("MonoStoreItems");
        const productsInCart: CartProductType[] | null = JSON.parse(cartItems);

        setCartProducts(productsInCart);
    }, []);

    console.log('quantity', cartTotalQuantity);
    console.log('amount', cartTotalAmount);

    useEffect(() => {
        const getPurchaseTotal = () => {
            if(cartProducts){
                const {total, quantity} = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity;
                    acc.total += itemTotal;
                    acc.quantity += item.quantity;
    
                    return acc;
                }, {
                    total: 0,
                    quantity: 0,
                });
                setCartTotalQuantity(quantity);
                setCartTotalAmount(total);
            }
        }
        getPurchaseTotal();
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }

            toast.success('Product added to cart')
            localStorage.setItem("MonoStoreItems", JSON.stringify(updatedCart));

            return updatedCart;
        })
    }, []); 

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => {return `${item.id}${item.selectedImg.color}${item.size}` !== `${product.id}${product.selectedImg.color}${product.size}`})
            console.log('filteredProducts', filteredProducts)
            setCartProducts(filteredProducts);

            toast.success('Product removed')
            localStorage.setItem("MonoStoreItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleCartQuantityIncrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if(product.quantity === 99) return toast.error('Maximun quantity reached 😭');

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => `${item.id}${item.selectedImg.color}${item.size}` == `${product.id}${product.selectedImg.color}${product.size}`);
            console.log('existingIndex', existingIndex)
            if(existingIndex > -1) updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;

            setCartProducts(updatedCart);
            localStorage.setItem("MonoStoreItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const handleCartQuantityDecrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if(product.quantity === 1) return toast.error('Minimum quantity reached 😭');

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => `${item.id}${item.selectedImg.color}${item.size}` == `${product.id}${product.selectedImg.color}${product.size}`);

            if(existingIndex > -1) updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;

            setCartProducts(updatedCart);
            localStorage.setItem("MonoStoreItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQuantity(0);
        localStorage.setItem("MonoStoreItems", JSON.stringify(null));
    }, []);

    const value = {
        cartTotalQuantity,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQuantityIncrease,
        handleCartQuantityDecrease,
        handleClearCart,
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}