"use client";
import React, { useState, useEffect } from "react";
import ChangePasswordForm from "@/app/components/pass-recovery/ChangePasswordForm";
import Link from "next/link";
import Image from "next/image";
import MonoPerfil from "../../../../public/monoperfil.jpg";
import landindImage from "../../../../public/landing-img.jpg";
import { useRouter } from "next/navigation";

const ProfileUser: React.FC = () => {
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const router = useRouter();
  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handleClosePasswordForm = () => {
    setIsChangingPassword(false);
  };

  return (
    <section
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center object-contain "
      style={{ backgroundImage: `url('${landindImage.src}')` }}
    >
      <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
        <div className="text-white absolute top-4 left-4 md:top-6 md:left-6 z-10 ">
          <Image
            src={MonoPerfil}
            width={100}
            height={400}
            alt="logo"
            className="rounded-full"
          />
        </div>

        <div className="text-white text-right absolute top-4 left-4 md:top-16 md:left-40 z-10 ">
          <h2 className="text-4xl font-bold mb-4 text-cyan-500">
            Profile User
          </h2>
        </div>
        <div className="text-cyan-500 absolute top-20 left-4 md:top-40 md:left-40 z-10">
          <p className="text-lg font-semibold">Name: {name}</p>
          <p className="text-lg font-semibold">Email: {correo}</p>
        </div>

        {isChangingPassword ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white p-4 rounded-md shadow-md">
              <button
                className="absolute top-2 right-2 text-cyan-500 hover:text-cyan-600"
                onClick={handleClosePasswordForm}
              >
                Close
              </button>
              
                <ChangePasswordForm />
              
            </div>
          </div>
        ) : (
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
          onClick={handleChangePassword}>
            Change Password
          </button>
        )}

        {/*<button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-8 md:mb-0 transition duration-300 ease-in-out">
          Show my info
        </button>*/}
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-8 md:mb-0 transition duration-300 ease-in-out">
          Change name
        </button>

        <Link
          href="/"
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-8 md:mb-0 transition duration-300 ease-in-out"
        >
          Return Home Page
        </Link>
      </div>
    </section>
  );
};

export default ProfileUser;
