import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.svg" 
        alt="Logo"
        width={140}
        height={40}
        className="h-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
