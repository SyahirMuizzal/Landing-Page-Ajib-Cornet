"use client";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-red-900 via-red-800 to-yellow-600 text-white py-12 mt-0">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold drop-shadow-lg">
            Menara<span className="text-yellow-300">Food</span>
          </h2>
          <p className="text-yellow-100 mt-3 max-w-sm">
            Cornet sapi premium dengan rasa original berkualitas tinggi.
            Praktis, lezat, dan cocok untuk segala kebutuhan kuliner.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300">Navigasi</h3>
          <ul className="mt-3 space-y-2 text-yellow-100">
            <li>
              <Link href="#produk" className="hover:text-white transition">
                Produk
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="hover:text-white transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#kontak" className="hover:text-white transition">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h3 className="text-xl font-bold text-yellow-300">Hubungi Kami</h3>

          <div className="mt-3 space-y-3 text-yellow-100">
            <Link
              href="https://wa.me/62813489290114?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Ajib%20Kornet%20Sapi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-200 transition"
            >
              <Phone className="w-5 h-5" /> 0813-8929-0114
            </Link>

            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> info@cornetsapi.com
            </p>

            {/* Shopee Link */}
            <Link
              href="https://shopee.co.id/product/123456789/987654321/"
              target="_blank"
              className="flex items-center gap-2 text-yellow-300 font-semibold hover:text-yellow-200 transition mt-3"
            >
              🛒 Beli di Shopee
            </Link>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 bg-red-900/40 rounded-lg hover:bg-red-900/60 transition"
              >
                <Facebook className="w-5 h-5 text-yellow-300" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 bg-red-900/40 rounded-lg hover:bg-red-900/60 transition"
              >
                <Instagram className="w-5 h-5 text-yellow-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-yellow-200 text-sm">
        © {new Date().getFullYear()} CornetSapi. All rights reserved.
      </div>
    </footer>
  );
}
