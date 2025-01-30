"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../app/firebase/firestoreService";

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}

interface Category {
    id: string;
    title: string;
    products: Product[];
}

const PopularTrendingProducts = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchedCategories: any = await getData();
        const formattedCategories: Category[] = fetchedCategories.map(
            (category: any) => ({
                id: category.id,
                title: category.title,
                products: category.products.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    image: product.image || product.img,
                    price: Number(product.price),
                })),
            })
        );

        setCategories(formattedCategories);
    };

    return (
        <div className="pt-6 px-4 md:px-8">
            <section className="mb-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-sm mb-1 text-gray-800">Popular Products</h2>
                    <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
                </div>

                {categories.map((category) => (
                    <div key={category.id} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {category.products.map((product, index) => (
                                <div
                                    key={`${product.id}-${index}`}
                                    className={`p-4 flex flex-col ${index % 4 === 0 ? "pl-0" : ""} ${index % 4 === 3 ? "pr-0" : ""
                                        }`}
                                >
                                    <div className="w-full h-64 relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-700 mt-4">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        ₹ {product.price.toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default PopularTrendingProducts;
