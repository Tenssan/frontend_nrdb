'use client';
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import CartCount from "./CartCount";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
        <div className="sticky top-0 w-full bg-white z-30 shadow-md">
          <div className="py-4 border-b-[1px]">
            <Container>
              <div className="flex items-center justify-between gap-3 md-gap-0">
                <div className="flex items-center gap-2">
                  <Image src={logo} width={30} height={40} alt="logo" className="rounded-full"/>
                  <Link href="/" className="font-bold text-2xl">MonoStore</Link>
                </div>
                <div className="flex items-center gap-8 md:gap-12">
                  <div onClick={() => router.push('/pages/profileuser')} className="relative cursor-pointer transition hover:scale-105"><CgProfile size={30}/></div>
                  <div><CartCount /></div>
                </div>
              </div>
            </Container>
          </div>
        </div>
    );
    }

export default Navbar;