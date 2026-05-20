import type { Metadata } from 'next';
import { company } from '@/data/company';
import FactoryVideoPlayer from '@/components/factory/VideoPlayer';

export const metadata: Metadata = {
  title: 'Factory',
  description: `Take a virtual tour of our 58,000 sqm world-class manufacturing facility. See our advanced production lines, quality control systems, and showroom.`,
};

const factoryPhotos = [
  { src: '/images/factory/factory-01.jpg', alt: 'Main Production Workshop', category: 'Workshop' },
  { src: '/images/factory/factory-02.jpg', alt: 'Sheet Metal Processing Line', category: 'Workshop' },
  { src: '/images/factory/factory-03.jpg', alt: 'CNC Processing Center', category: 'Workshop' },
  { src: '/images/factory/factory-04.jpg', alt: 'Welding Station', category: 'Workshop' },
  { src: '/images/factory/factory-05.jpg', alt: 'Surface Treatment Area', category: 'Workshop' },
  { src: '/images/factory/factory-06.jpg', alt: 'Assembly Line', category: 'Workshop' },
  { src: '/images/factory/factory-07.jpg', alt: 'Quality Inspection', category: 'Quality' },
  { src: '/images/factory/factory-08.jpg', alt: 'Product Testing Lab', category: 'Quality' },
  { src: '/images/factory/factory-09.jpg', alt: 'Finished Product Warehouse', category: 'Warehouse' },
  { src: '/images/factory/factory-10.jpg', alt: 'Raw Material Storage', category: 'Warehouse' },
  { src: '/images/factory/factory-11.jpg', alt: 'Loading Dock', category: 'Warehouse' },
  { src: '/images/factory/factory-12.jpg', alt: 'Exterior View', category: 'Overview' },
  { src: '/images/factory/factory-13.jpg', alt: 'Aerial View', category: 'Overview' },
  { src: '/images/factory/factory-14.jpg', alt: 'Office Building', category: 'Overview' },
];

const showroomPhotos = [
  { src: '/images/showroom/showroom-01.jpg', alt: 'Main Showroom' },
  { src: '/images/showroom/showroom-02.jpg', alt: 'Fire Door Display' },
  { src: '/images/showroom/showroom-03.jpg', alt: 'Specialized Door Display' },
  { src: '/images/showroom/showroom-04.jpg', alt: 'Hardware Display' },
  { src: '/images/showroom/showroom-05.jpg', alt: 'Sample Display' },
];

export default function FactoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            World-Class Manufacturing Facility
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            58,000 sqm of advanced production capability — see how we manufacture world-class fire doors
          </p>
        </div>
      </section>

      {/* Factory Video */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Factory Tour Video
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our 4-minute factory tour to see our complete manufacturing process — from raw material to finished product
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
          </div>

          {/* Video Player */}
          <div className="max-w-5xl mx-auto">
            <FactoryVideoPlayer />
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '58,000', unit: 'sqm', label: 'Total Area' },
              { value: '50M', unit: 'RMB', label: 'Investment' },
              { value: '8', unit: '+', label: 'Production Lines' },
              { value: '24/7', unit: '', label: 'Production Capability' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                  <span className="text-accent text-2xl ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Production Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our facility is equipped with international advanced processing equipment and comprehensive quality control systems
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.productionCapabilities.map((cap, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Photos */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Factory Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our production workshops, quality control areas, and warehousing facilities
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {factoryPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="text-accent text-xs font-medium">{photo.category}</span>
                  <p className="text-white text-sm">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Showroom & Samples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our showroom to see our complete range of fire doors, specialized doors, and hardware solutions
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {showroomPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-xs">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
