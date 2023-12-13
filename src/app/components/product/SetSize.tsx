'use client';
import { CartProductType } from "./ProductDetails";

interface SetSizeProps {
    cartProduct: CartProductType;
    sizes: [string];
    handleSizeSelect: (value: string) => void;
}

const SetSize: React.FC<SetSizeProps> = ({cartProduct, sizes, handleSizeSelect}) => {
    const fixedSizes = ['S', 'M', 'L', 'XL', 'XXL']
    console.log("sizes", sizes);
    return (
        <div>
            <div>
            <div className="flex gap-4 items-center">
                <span className="font-bold">SIZES: </span>
            </div>
            <div className="flex gap-1">{
            sizes.map((sizes) => {
            return ( 
                <div onClick={() => handleSizeSelect(sizes)}
                className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
                ${cartProduct.size === sizes ? "border-[1.5px]" : "border-none"}`}>
                    <div style={{background: sizes}} className="items-center cursor-pointer">{sizes}</div>
                </div>
            )})}
            </div>
        </div>
        </div>
    )
}

export default SetSize;