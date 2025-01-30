import React from "react";
import "./ProductDetails.css";
import Image from "next/image";

interface Product {
    name: string;
    price: string;
    description: string;
    image: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="product-details-container">
            <div className="product-image">
                <Image src={product.image} alt={product.name} width={100} height={50} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <div className="actions">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
