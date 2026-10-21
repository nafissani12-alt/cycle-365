
"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";

const categories = [
  "All",
  "Road Bike",
  "Gravel Bike",
  "TT Bike",
  "MTB",
];

const phone = "8801757037911";

const whatsappMessage = encodeURIComponent(
  "Hello Cycle 365! I would like to know more about your bikes and products."
);

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const term = search.toLowerCase().trim();

      const matchesName =
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term);

      const matchesCategory =
        activeCategory === "All" ||
        product.type === activeCategory;

      return matchesName && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-white text-[#101827]">
      {/* Announcement bar */}
      <div className="bg-[#101827] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        PREMIUM BIKES · PRE-ORDER AVAILABLE · BANGLADESH
      </div>

      {/* Premium navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#home" className="flex shrink-0 items-center gap-3">
           <img
              src="/images/Cycle%20365%20Logo.png"
              alt="Cycle 365 logo"
              className="h-11 w-11 object-contain sm:h-14 sm:w-14"
            />
            <div>
              <span className="block text-lg font-black tracking-[0.12em] sm:text-xl">
                CYCLE 365
              </span>
              <span className="hidden text-[9px] font-semibold tracking-[0.15em] text-slate-500 sm:block">
                RIDE EVERYDAY. EXPLORE EVERY PATH.
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="text-sm font-semibold hover:text-blue-600">
              Home
            </a>
            <a href="#bikes" className="text-sm font-semibold hover:text-blue-600">
              Bikes
            </a>
            <a href="#about" className="text-sm font-semibold hover:text-blue-600">
              Our Story
            </a>
            <a href="#contact" className="text-sm font-semibold hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#2388FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 sm:inline-flex"
            >
              Enquire Now ↗
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl lg:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            {[
              ["Home", "#home"],
              ["Explore Bikes", "#bikes"],
              ["Our Story", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-slate-100 py-4 text-sm font-semibold last:border-0"
              >
                {label} <span className="float-right">↗</span>
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="overflow-hidden bg-[#101827] text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-2 md:px-10 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2388FF]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Find your next ride
              </p>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              Built for
              <span className="block text-[#5BA5FF]">the ride.</span>
              Ready for
              <span className="block">the journey.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              Discover road bikes, gravel bikes and premium cycling
              machines. Find your next ride with Cycle 365.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#bikes"
                className="rounded-full bg-[#2388FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Explore Bikes <span className="ml-2">↗</span>
              </a>

              <a
                href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#101827]"
              >
                Talk to Our Team
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-2 gap-5 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-black">15+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Models in our catalog
                </p>
              </div>
              <div>
                <p className="text-2xl font-black">15–25</p>
                <p className="mt-1 text-xs text-slate-400">
                  Estimated working days for pre-orders
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  The next adventure
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] text-slate-300">
                  C365
                </span>
              </div>

              <img
                src="/images/sabbir.shop.png"
                alt="Welcome to Cycle 365. Here you will get all the things needed for your first cycle ride. Contact us."
                className="relative mx-auto h-64 w-full object-contain sm:h-80"
              />

              <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs text-slate-400">Build Your Dream</p>
                  <h2 className="mt-1 text-xl font-bold">
                    Java TT Bike
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    TT Bike · 2026
                  </p>
                </div>
                <a
                  href="#bikes"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2388FF] text-xl transition hover:bg-blue-600"
                  aria-label="Explore bikes"
                >
                  ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px px-5 py-5 sm:grid-cols-4 sm:px-10">
          {[
            ["01", "Road Bikes"],
            ["02", "Gravel Bikes"],
            ["03", "Performance"],
            ["04", "Pre-order"],
          ].map(([number, label]) => (
            <a
              key={number}
              href="#bikes"
              className="flex items-center gap-3 px-3 py-3 transition hover:text-[#2388FF] sm:px-5"
            >
              <span className="text-xs font-bold text-[#2388FF]">{number}</span>
              <span className="text-sm font-bold">{label}</span>
              <span className="ml-auto text-slate-400">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Product catalog */}
      <section id="bikes" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-24">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2388FF]">
              The collection
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Find your ride.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              Explore our available catalog. Contact us to confirm the
              latest price, specifications and pre-order availability.
            </p>
          </div>

          <div className="w-full lg:max-w-sm">
            <label htmlFor="bike-search" className="sr-only">
              Search bikes
            </label>
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-[#F8FAFC] px-5 transition focus-within:border-[#2388FF]">
              <span className="text-lg text-slate-400">⌕</span>
              <input
                id="bike-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search bikes or brands..."
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${activeCategory === category
                ? "bg-[#101827] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-[#2388FF] hover:text-[#2388FF]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-b border-slate-200 pb-4">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-[#101827]">
              {filteredProducts.length}
            </span>{" "}
            bikes
          </p>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Pre-order collection
          </span>
        </div>

        <div className="mt-6 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group min-w-0">
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#F4F7FB] p-5 sm:h-72">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#101827] shadow-sm">
                  Pre-order
                </span>

                {"image" in product && product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-4xl font-black tracking-widest text-[#101827]">
                      C365
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                      Product image coming soon
                    </p>
                  </div>
                )}

                <span className="absolute bottom-4 right-4 text-xs font-bold text-slate-400">
                  {String(product.id).padStart(2, "0")}
                </span>
              </div>

              <div className="px-1 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2388FF]">
                    {product.brand}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {product.type}
                  </p>
                </div>

                <h3 className="mt-3 min-h-14 text-lg font-bold leading-7 tracking-tight transition group-hover:text-[#2388FF]">
                  {product.name}
                </h3>

                {product.modelYear && (
                  <p className="mt-1 text-sm text-slate-500">
                    Model year: {product.modelYear}
                  </p>
                )}

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-xs text-slate-500">
                    Estimated delivery
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {product.delivery}
                  </p>
                </div>

                <p className="mt-5 text-xl font-black tracking-tight">
                  {product.price
                    ? `৳${product.price.toLocaleString("en-BD")}`
                    : "Contact for Price"}
                </p>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Hello Cycle 365! I am interested in ${product.name}. Please confirm the latest price, specifications and availability.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#101827] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#2388FF]"
                >
                  Enquire About This Bike <span>↗</span>
                </a>

                {product.postUrl && (
                  <a
                    href={product.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-center text-xs font-semibold text-slate-500 transition hover:text-[120]"
                  >
                    View product post
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-10 rounded-3xl bg-[#F4F7FB] px-5 py-16 text-center">
            <h3 className="text-2xl font-black">No bikes found</h3>
            <p className="mt-3 text-sm text-slate-500">
              Try a different bike name or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-full bg-[#101827] px-6 py-3 text-sm font-bold text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Brand statement */}
      <section id="about" className="bg-[#F4F7FB]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-10 sm:py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2388FF]">
              The Cycle 365 experience
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Every ride has
              <span className="block text-[#2388FF]">a story.</span>
            </h2>
          </div>
          <div>
            <p className="leading-8 text-slate-600">
              Welcome to Cycle 365. Explore bicycles and cycling products
              for your next adventure. Our team can help you learn more
              about product details, prices and pre-order options.
            </p>
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 border-b-2 border-[#2388FF] pb-2 text-sm font-bold transition hover:text-[#2388FF]"
            >
              Connect with Cycle 365 <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-[#101827] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                Let’s get you riding
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Your next ride
                <span className="block text-[#5BA5FF]">starts here.</span>
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">
                Need the latest price or details about a bike? Contact
                our team to discuss your next ride.
              </p>
              <a
                href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#2388FF] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Chat on WhatsApp ↗
              </a>
            </div>

            <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Visit Cycle 365
              </p>
              <p className="mt-4 text-lg font-bold">20/A Mohammadi Rd</p>
              <p className="mt-1 text-sm text-slate-300">
                Dhaka 1207, Bangladesh
              </p>
              <p className="mt-5 text-sm text-slate-300">
                Phone: 01757-037911
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61566738209194"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-[#5BA5FF] hover:text-white"
              >
                Follow us on Facebook ↗
              </a>
              <br />
              <a
                href="https://www.instagram.com/Cycle365bd/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#5BA5FF] hover:text-white"
              >
                Follow us on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/Cycle%20365%20Logo.png"
              alt="Cycle 365 logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="text-sm font-black tracking-[0.12em]">
                CYCLE 365
              </p>
              <p className="mt-1 text-[10px] tracking-wide text-slate-500">
                RIDE EVERYDAY. EXPLORE EVERY PATH.
              </p>
            </div>
          </div>

          <p className="mt-4">
            © 2026 Cycle 365. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-sm font-bold transition hover:text-[#2388FF]"
          >
            Back to top ↑
          </a>
          
<p className="text-sm text-slate-500">
  Designed &amp; developed by{" "}
  <a
    href="https://my-portfolio-taupe-five-97.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="font-semibold text-[#2388FF] transition hover:text-blue-700"
  >
    Nafis Ahmed Sani ↗
  </a>
</p>

        </div>
      </footer>
    </main>
  );
}
