import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "404 Page | Venus ",
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        title="404"
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <Image 
          src="/images/404.svg"
          width={200}
          height={200}
          alt="404 Error"
          className="mb-8"
        />
        <h2 className="text-3xl font-bold mb-4 text-center">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
