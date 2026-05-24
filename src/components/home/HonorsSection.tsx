'use client';

import { useState } from 'react';

const honors = [
  {
    image: '/images/honors/honors-1.jpg',
    title: 'AAA Credit & Harmony Enterprise',
    description: 'Awarded AAA Credit Enterprise, Harmonious Enterprise and CMCA Certificate — recognising our financial integrity and commitment to employee welfare.',
  },
  {
    image: '/images/honors/honors-2.jpg',
    title: 'Industry Certifications & Partnerships',
    description: 'Certified and partnered with leading global standards bodies and industry associations, including Forster and Sommer — a testament to our international quality benchmark.',
  },
];

const exhibitionImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/exhibition/dubai-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Dubai Exhibition Photo ${i + 1}`,
}));

export default function HonorsSection() {
  const [activeExhibit, setActiveExhibit] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Awards & Global Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by clients across 30+ countries, recognised by leading industry bodies, and showcased on the world stage.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
        </div>

        {/* Honors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {honors.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50"
            >
              <div className="overflow-hidden bg-white flex items-center justify-center p-4 h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exhibition section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              Dubai Exhibition 2025
            </h3>
            <p className="text-gray-500">
              STS-SOLUTION at the Middle East&apos;s premier building industry exhibition — connecting with global partners and showcasing our latest innovations.
            </p>
          </div>

          {/* Main display */}
          <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg mb-4 flex items-center justify-center"
               style={{ height: '420px' }}>
            <img
              src={exhibitionImages[activeExhibit].src}
              alt={exhibitionImages[activeExhibit].alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {exhibitionImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveExhibit(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  idx === activeExhibit
                    ? 'border-accent scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
