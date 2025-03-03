import Link from "next/link";
import { HeaderItem } from "@/types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item }) => {
  return (
    <Link 
      href={item.href || "#"}
      className="py-3 text-white hover:text-primary w-full block text-lg"
    >
      {item.label}
    </Link>
  );
};

export default MobileHeaderLink;
