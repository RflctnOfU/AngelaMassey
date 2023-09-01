import { Mail, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="w-full h-auto flex flex-col bg-[url(/images/test/4.png)]">
      <div className="flex justify-center  items-center gap-8 py-4">
        <Link href={""}>
          <Mail size={30} />
        </Link>
        <Link href={""}>
          <Facebook size={30} />
        </Link>
        <Link href={""}>
          <Youtube size={30} />
        </Link>
        <Link href={""}>
          <Instagram size={30} />
        </Link>
        <Link href={""}>
          <Linkedin size={30} />
        </Link>
      </div>
      <div className="flex md:flex-row md:justify-around items-center justify-center flex-col pb-4">
        <div className="w-48 text-center">angmassey@gmail.com</div>

        <div className="w-48 text-center">706.726.2667</div>
        <div className="w-48 text-center">angelamasseyflute.com</div>
      </div>
    </footer>
  );
}

export default Footer;
