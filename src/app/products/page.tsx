'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, productCategories } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Complete door opening system solutions — from fire doors to specialized industrial doors
          </p>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              All Products
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${product.images[0] || '/images/products/placeholder.jpg'}')`,
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 text-center bg-primary text-white py-2 rounded text-sm font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center border-2 border-primary text-primary py-2 rounded text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
