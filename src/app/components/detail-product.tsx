"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function DetailProduct() {
  return (
    <section
      id="product"
      className="w-full py-24 bg-gradient-to-br from-red-900 via-red-800 to-yellow-600 text-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-xl mb-10 text-center"
        >
          Ajib Kornet Daging Sapi Original 340gr
        </motion.h2>

        {/* Card utama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border border-yellow-400 rounded-2xl shadow-2xl text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow">
                Detail Produk
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-10">
              {/* Deskripsi */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-lg leading-relaxed border-l-4 border-yellow-400 pl-4"
              >
                Kornet Ajib Sapi Original adalah pilihan sempurna untuk pencinta
                daging berkualitas. Terbuat dari daging pilihan, produk ini
                menawarkan rasa gurih khas Nusantara yang cocok untuk berbagai
                kreasi makanan.
              </motion.p>

              {/* Keunggulan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="p-5 rounded-xl bg-gradient-to-r from-yellow-600/40 to-red-700/40 border border-yellow-400"
              >
                <h3 className="text-2xl font-bold text-yellow-300 mb-3 drop-shadow">
                  Keunggulan :
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-yellow-100 text-lg">
                  <li>Dibuat dari daging pilihan berkualitas premium.</li>
                  <li>Rasa gurih khas Nusantara yang kaya rempah.</li>
                  <li>Cocok untuk sarapan, masakan rumahan, maupun snack.</li>
                </ul>
              </motion.div>

              {/* Detail */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="p-5 rounded-xl bg-gradient-to-r from-red-700/40 to-yellow-600/40 border border-yellow-400"
              >
                <h3 className="text-2xl font-bold text-yellow-300 mb-3 drop-shadow">
                  Detail :
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-yellow-100 text-lg">
                  <li>Kaya protein.</li>
                  <li>Siap makan, praktis dan higienis.</li>
                  <li>
                    Setelah dibuka, simpan dalam wadah kedap udara di lemari es.
                  </li>
                </ul>
              </motion.div>

              {/* Komposisi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
              >
                <h3 className="text-2xl font-bold text-yellow-300 mb-3 drop-shadow">
                  Komposisi :
                </h3>
                <p className="text-yellow-100 text-lg">
                  Air, Daging sapi (28,47%), Tepung Terigu, TVP (Kedelai),
                  Garam, Bawang Putih, Penguat Rasa Mononatrium L-glutamat, Gula
                  (Mengandung Pengawet Sulfit), Rempah, Pengawet Natrium Nitrit,
                  Pewarna Sintetik Eritrosin CI. No. 45430.
                </p>
              </motion.div>

              {/* Berat */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="text-xl font-bold text-yellow-300 drop-shadow"
              >
                Berat : 340gr
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
