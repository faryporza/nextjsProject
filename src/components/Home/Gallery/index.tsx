"use client"
import Image from 'next/image';
import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';

const Gallery = () => {
    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
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
                            <div key={index} className="overflow-hidden rounded-3xl mb-6 relative group">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
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
