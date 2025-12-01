"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-red-800 via-red-700 to-yellow-500 text-white">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          Siap Menyediakan Cornet Sapi Premium Untuk Bisnis Anda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-yellow-100 mt-4 max-w-2xl mx-auto"
        >
          Dapatkan penawaran terbaik untuk pembelian grosir maupun eceran. Stok
          selalu tersedia dan pengiriman cepat!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex justify-center"
        >
          <Button className="bg-yellow-400 text-red-800 font-semibold rounded-xl px-8 py-4 shadow-xl hover:bg-yellow-300 text-lg">
            Hubungi Kami Sekarang
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
