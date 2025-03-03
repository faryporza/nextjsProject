"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>ที่มาและความสำคัญ</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                        Cleaning and Service Technician Application.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>ในปัจจุบันผู้ใช้บริการที่ต้องการหาช่างหรือแม่บ้านมาทำงานในบ้านมักมองหาความสะดวกสบาย จากผู้ให้บริการที่น่าเชื่อถือ และการเข้าถึงบริการที่ง่ายและรวดเร็ว โดยเฉพาะในยุคปัจจุบันที่ผู้คน ให้ความสำคัญกับการใช้ชีวิตที่สะดวกและประหยัดเวลา</p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'>ผู้คนมักพบความยากลำบากในการหาช่องทางติดต่อช่างเมื่อเกิดเหตุการณ์ฉุกเฉิน การกำหนดราคาที่ไม่ชัดเจน และการขาดการยืนยันตัวตนของผู้ให้บริการ ซึ่งทำให้เกิดข้อสงสัยเกี่ยวกับความน่าเชื่อถือ</p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'>เราได้พัฒนาแอปพลิเคชันที่รวบรวมข้อมูลของช่างและแม่บ้าน พร้อมระบบรีวิว การให้คะแนน ระบบจองคิว และการยืนยันตัวตนด้วยการสแกนใบหน้า เพื่อสร้างความมั่นใจให้กับผู้ใช้บริการ</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
