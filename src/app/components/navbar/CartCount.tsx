'use client';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../../hooks/useCart';
import { IoCartOutline } from 'react-icons/io5';

const CartCount = () => {
    const {cartTotalQuantity} = useCart();
    const router = useRouter();
    return (
        <div onClick={() => router.push('/pages/cart')} className="relative cursor-pointer transition hover:scale-105">
            <div className='text-3xl outline-slate-200'><IoCartOutline/></div>
            <span className='absolute top-[-12px] right-[-12px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm'>{cartTotalQuantity}</span>
        </div>
    )
}

export default CartCount;