"use client"

import { Banner } from "@/components/front-end/Banner";
import { Cart } from "@/components/front-end/Cart";
import { Feature } from "@/components/front-end/Feature";
import { Footer } from "@/components/front-end/Footer";
import { Hero } from "@/components/front-end/Hero";
import { Navbar } from "@/components/front-end/Navbar";
import { TrendingProducts } from "@/components/front-end/TrendingProducts";
import { useState } from "react"

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <main>
      <Navbar setOpenCart={setOpenCart} />
      {openCart && <Cart setOpenCart={setOpenCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
      <Footer />
    </main>
  );
}
