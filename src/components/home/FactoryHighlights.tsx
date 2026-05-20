'use client';

import ImageModal, { useImageModal } from '@/components/ui/ImageModal';

const factoryImages = [
  { src: '/images/factory/factory-01.jpg', alt: 'Production Workshop' },
  { src: '/images/factory/factory-02.jpg', alt: 'Sheet Metal Processing Line' },
  { src: '/images/factory/factory-03.jpg', alt: 'Assembly Line' },
  { src: '/images/factory/factory-04.jpg', alt: 'Quality Inspection' },
  { src: '/images/factory/factory-05.jpg', alt: 'Raw Material Storage' },
  { src: '/images/factory/factory-06.jpg', alt: 'Finished Product Warehouse' },
];

export default function FactoryHighlights() {
  const { isOpen, imageSrc, imageAlt, open, close } = useImageModal();

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Factory Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our 58,000 sqm world-class manufacturing facility
          </p>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {factoryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => open(image.src, image.alt)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/factory"
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
          >
            Explore Our Factory
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <ImageModal src={imageSrc} alt={imageAlt} isOpen={isOpen} onClose={close} />
    </section>
  );
}
