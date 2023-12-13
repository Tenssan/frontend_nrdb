'use client';
import Link from "next/link";
import { formatPrice } from "../../../../utils/formatPrice";
import { CartProductType } from "../product/ProductDetails";
import Image from "next/image";
import SetQuantity from "../product/SetQuantity";
import { useCart } from "../../../../hooks/useCart";
import { useRouter } from "next/navigation";

interface ItemContentProps {
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {
    const {handleRemoveProductFromCart} = useCart();
    const {handleCartQuantityIncrease} = useCart();
    const {handleCartQuantityDecrease} = useCart();
    const router = useRouter();

    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-400 py-4 items-center">
            <div className="col-span-2 justify-start flex gap-2 md:gap-4">
                <div className="cursor-pointer" onClick={() => router.push(`/pages/product/${item.id}?id=${item.id}`)}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={`http://localhost:8181/images/${item.selectedImg.image}`} alt={item.name} fill className="object-contain"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                <div className="cursor-pointer font-semibold" onClick={() => router.push(`/pages/product/${item.name}?id=${item.id}`)}>
                    <div>{item.name}</div>
                </div>
                <div>{item.selectedImg.color}</div>
                <div>{item.size}</div>
                <div className="w-[70px]">
                    <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item)}>Remove</button>
                </div>
                </div>
            </div>
            <div className="justify-self-center">{formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity cartCounter={true} cartProduct={item}
                handleQuantityDecrease={() => {handleCartQuantityDecrease(item)}} handleQuantityIncrease={() => {handleCartQuantityIncrease(item)}}/>
            </div>
            <div className="justify-self-end font-semibold">{formatPrice(item.price * item.quantity)}</div>
        </div>
    )
};

export default ItemContent;