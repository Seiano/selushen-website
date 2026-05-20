'use client';

import { useRef, useState } from 'react';

interface FactoryVideoPlayerProps {
  poster?: string;
}

export default function FactoryVideoPlayer({ poster = '/images/hero/factory-hero.jpg' }: FactoryVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video bg-primary-900 rounded-2xl overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        controls={isPlaying}
        preload="metadata"
        poster={poster}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src="/videos/factory-tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div
          className="absolute inset-0 cursor-pointer group z-10"
          onClick={handlePlay}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${poster}')` }}
          />
          <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
            4:00
          </div>
        </div>
      )}
    </div>
  );
}
