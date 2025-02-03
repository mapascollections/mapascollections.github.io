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
    subtitle?: string;
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
                subtitle: category.subtitle,
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
        <div className="pt-6">
            <section className="mb-8">
                {categories.map((category) => (
                    <div key={category.id} className="mb-8">
                        <div className="flex flex-col justify-center items-center text-center">
                            <h2 className="text-sm mb-1 text-gray-800">{category?.subtitle}</h2>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{category.title}</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                            {category.products.map((product, index) => (
                                <div
                                    key={`${product.id}-${index}`}
                                    className={`p-4 flex flex-col
                                    ${index % 2 === 0 ? 'pl-0' : ''} 
                                    ${index % 2 === 1 ? 'pr-0' : ''} 
                                    sm:${index % 3 === 0 ? 'pl-0' : ''} 
                                    sm:${index % 3 === 2 ? 'pr-0' : ''} 
                                    lg:${index % 4 === 0 ? 'pl-0' : ''} 
                                    lg:${index % 4 === 3 ? 'pr-0' : ''}`
                                    }>
                                    <div className="w-full h-56 sm:h-64 relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-700 mt-4">{product.name}</h3>
                                    <p className="text-sm text-gray-500">₹ {product.price.toLocaleString()}</p>
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
