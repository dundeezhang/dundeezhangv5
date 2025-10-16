"use client";

import Image from "next/image";
import photographyData from "@/data/photography.json";

export function PhotographyGallery() {
  return (
    <div className="space-y-8">
      {photographyData.map((photo, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded shadow-lg"
          style={{
            backgroundColor: "var(--glass-bg)",
            border: "1px solid var(--button-border)",
          }}
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.name}
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* photo overlay */}
            <div className="absolute inset-x-0 bottom-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <div
                className="px-4 py-3 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              >
                <h3 className="text-white font-semibold text-lg mb-1">
                  {photo.name}
                </h3>
                <p className="text-gray-200 text-sm">{photo.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
