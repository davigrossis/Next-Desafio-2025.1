"use client"

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CardNews from "./cardNews";
import Botao from "../botao";
import { Product } from "../../../types/data";

type CardNewsProps = {
    products: Product[];
};

export default function News({ products }: CardNewsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 mx-auto py-12">
                <div className="flex items-center justify-between">

                    <button onClick={prevProduct}>
                        <ChevronLeft className="w-16 h-16" />
                    </button>


                    <div className="w-full flex justify-center">
                        <CardNews product={products[currentIndex]} />
                    </div>

                    <button onClick={nextProduct}>
                        <ChevronRight className="w-16 h-16" />
                    </button>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl py-10 text-black font-extrabold">
                        Alguns dos nossos últimos lançamentos
                    </h1>
                    <Botao color="bgcard" text="Veja Mais" link="/produtos" />
                </div>
            </div>
        </div>
    );
}
