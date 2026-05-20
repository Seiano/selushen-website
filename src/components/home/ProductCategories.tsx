import Link from 'next/link';
import { productCategories } from '@/data/products';

export default function ProductCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete door opening system solutions from fire doors to specialized industrial doors
          </p>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] flex items-end"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 w-full">
                <span className="text-4xl mb-3 block">{category.icon}</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Products
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
