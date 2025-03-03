"use client";
import React from "react";
import Image from "next/image";
import { galleryImages } from "@/app/api/data";
import Masonry from 'react-masonry-css';
import Link from 'next/link';

const Gallery = () => {
    return (
        <section id="gallery-section">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
                <div className="text-center">
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Our Gallery</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Gallery of my app
                    </h2>
                </div>
                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {/* Map through images */}
                        {galleryImages.map((item, index) => (
                            <div key={index} className="gallery-item relative">
                                <Image
                                    src={item.src}
                                    alt={`Gallery Image ${index + 1}`} // Using a generic alt text with index
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
