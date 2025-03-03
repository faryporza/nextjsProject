"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Cleaning and Service Technician Application
                        </h1>
                        <p className="text-lg lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 lg:mb-12 lg:text-start text-left">
                        ในปัจจุบันผู้ใช้บริการที่ต้องการหาช่างหรือแม่บ้านมาทำงานในบ้านมักมองหาความสะดวกสบาย จากผู้ให้บริการที่น่าเชื่อถือ และการเข้าถึงบริการที่ง่ายและรวดเร็ว โดยเฉพาะในยุคปัจจุบันที่ผู้คน ให้ความสำคัญกับการใช้ชีวิตที่สะดวกและประหยัดเวลา</p>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <Image src="/images/hero/banner-image.png" alt="nothing" width={300} height={150} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
