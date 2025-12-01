"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Headers() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-red-800 via-red-700 to-yellow-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">
        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
          Menara<span className="text-yellow-300">Food</span>
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="#produk" className="hover:text-yellow-300 transition">
            Produk
          </Link>
          <Link href="#tentang" className="hover:text-yellow-300 transition">
            Tentang
          </Link>
          <Link href="#contact" className="hover:text-yellow-300 transition">
            Kontak
          </Link>
        </nav>

        {/* CTA + MENU BUTTON */}
        <div className="flex items-center gap-4">
          {/* CTA DESKTOP */}
          <Link
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20produk%20Ajib%20Kornet"
            target="_blank"
          >
            <Button className="hidden md:inline bg-yellow-400 text-red-800 font-semibold rounded-xl px-5 shadow hover:bg-yellow-300">
              Pesan
            </Button>
          </Link>

          {/* MENU BUTTON MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-red-900/40 hover:bg-red-900/60 transition"
          >
            {open ? (
              <X className="w-6 h-6 text-yellow-300" />
            ) : (
              <Menu className="w-6 h-6 text-yellow-300" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-red-800 to-yellow-600 text-white shadow-lg animate-slideDown">
          <nav className="flex flex-col items-start px-6 py-4 gap-4 text-lg font-medium">
            <Link
              href="#produk"
              className="hover:text-yellow-300 transition"
              onClick={() => setOpen(false)}
            >
              Produk
            </Link>

            <Link
              href="#tentang"
              className="hover:text-yellow-300 transition"
              onClick={() => setOpen(false)}
            >
              Tentang
            </Link>

            <Link
              href="#kontak"
              className="hover:text-yellow-300 transition"
              onClick={() => setOpen(false)}
            >
              Kontak
            </Link>

            {/* CTA MOBILE */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20produk%20Ajib%20Kornet"
              target="_blank"
              className="w-full"
            >
              <Button className="mt-3 w-full bg-yellow-400 text-red-800 font-semibold rounded-xl shadow hover:bg-yellow-300">
                Pesan Sekarang
              </Button>
            </a>
          </nav>
        </div>
      )}

      {/* Animation style */}
      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
