import getProducts from "@/actions/getProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

interface Iproduct {
    id: number;
    imgSrc: string;
    fileKey: string;
    name: string;
    price: number;
    category: string;
}

export const TrendingProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res: any) => {
            setProducts(res);
        }).catch((error) => console.log(error))
    }, [])

    return <div className="container mt-32">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Trending Products</h2>
            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                <div className="text-black">New</div>
                <div>Featured</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {products?.map((item: Iproduct) => (
                <ProductCard
                key={item.id}
                id={item.id}
                img={item.imgSrc}
                category={item.category}
                title={item.name}
                price={item.price}
                />
            ))}
        </div>
    </div>
}