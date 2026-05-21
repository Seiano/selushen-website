import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-primary">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-accent">{product.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {product.name}
          </h1>
          <span className="inline-block mt-3 bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-4 flex items-center justify-center">
              <img
                src={product.images[0] || '/images/products/placeholder.jpg'}
                alt={product.name}
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                {product.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.certifications.map((cert) => (
                  <span key={cert} className="bg-primary-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent text-primary-900 px-6 py-3 rounded font-heading font-semibold hover:bg-accent-400 transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-whatsapp text-white px-6 py-3 rounded font-heading font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Technical Specifications</h3>
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold">Parameter</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 text-sm text-gray-700 font-medium">{spec.label}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {product.applications.map((app) => (
                <div key={app} className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-600 font-medium">
                  {app}
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Related Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={rp.images[0] || '/images/products/placeholder.jpg'}
                        alt={rp.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-semibold text-primary">{rp.name}</h4>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{rp.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
