"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from '@/app/api/data';
import { Icon } from "@iconify/react";

const Features = () => {
    return (
        <section className="flex justify-center items-center py-16">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex flex-col items-center' id="about-section">
                <div className='text-center mb-14 w-full max-w-3xl' >
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Features</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white mx-auto'>ฟีเจอร์ที่น่าสนใจมากมาย</h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-8 mt-32 justify-items-center'>
                    {FeaturesData.map((items, i) => (
                        <div className='p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black w-full max-w-xs mx-auto flex flex-col items-center' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center items-center absolute -top-24 left-1/2 transform -translate-x-1/2'>
                                <Image 
                                    src={items.imgSrc} 
                                    alt={items.heading} 
                                    width={110} 
                                    height={110}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center w-full mt-16">
                                <h3 className='text-2xl text-black dark:text-white font-semibold text-center'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-4'>{items.subheading}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
