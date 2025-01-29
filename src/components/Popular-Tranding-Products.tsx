'use client'
import React, { useEffect, useState } from "react";
import { getData } from "../app/firebase/firestoreService";
const PopularTrendingProducts = () => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchedProducts: any = await getData();
        setProducts(fetchedProducts[0].products);
        console.log("Data", fetchedProducts);
    };

    return (
        <div className="pt-6">
            <section className="mb-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-sm mb-1 text-gray-800">Popular Products</h2>
                    <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
                    {products.map((product: any, index: any) => (
                        <div
                            key={`${product.id}-${index}`}
                            className={`p-4 flex flex-col ${index % 4 === 0 ? 'pl-0' : ''} ${index % 4 === 3 ? 'pr-0' : ''}`}
                        >
                            <div className="w-full h-64 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-700 mt-4">{product.name}</h3>
                            <p className="text-sm text-gray-500">₹&nbsp;{`${product.price}`}</p>
                        </div>
                    ))}

                </div>

            </section>
        </div>
    );

};

export default PopularTrendingProducts;
