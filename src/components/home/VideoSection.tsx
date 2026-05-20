'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            See Our Factory in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a 4-minute tour of our 58,000 sqm manufacturing facility and see how we produce world-class fire doors
          </p>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-accent" />
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-primary-900 rounded-2xl overflow-hidden shadow-2xl">
            {isPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
                title="STS-SOLUTION Factory Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/hero/factory-hero.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/30 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  4:00
                </div>
              </div>
            )}
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our state-of-the-art facility features international advanced sheet metal flexible processing production lines,
              specialized precision-cast metal components manufacturing, and comprehensive quality control systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
