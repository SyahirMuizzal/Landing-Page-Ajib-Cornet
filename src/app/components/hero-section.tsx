"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-yellow-500 flex items-center py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Cornet Sapi Original{" "}
            <span className="text-yellow-300">Premium</span>
          </h1>

          <p className="text-lg md:text-xl max-w-lg font-light text-yellow-100">
            Nikmati cita rasa daging sapi asli dalam kemasan kaleng yang
            praktis, higienis, dan siap saji. Cocok untuk usaha kuliner, rumah
            tangga, maupun stok darurat.
          </p>

          <div className="flex gap-4">
            <Button className="bg-yellow-400 text-red-800 font-semibold rounded-xl px-6 py-3 shadow-xl hover:bg-yellow-300">
              <Link
                href="https://wa.me/62813489290114?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Ajib%20Kornet%20Sapi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-200 transition"
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Pesan Sekarang
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-700 rounded-xl px-6 py-3"
            >
              <Link href="#product">Lihat Produk</Link>
            </Button>
          </div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 md:w-96 aspect-square">
            <Image
              src="/ajib-kornet.png"
              alt="Cornet Sapi Kaleng"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
