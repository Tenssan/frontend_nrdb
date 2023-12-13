'use client';
import React, { useState, useEffect } from 'react';
import landindImage from "../../../../public/landing-img.jpg";
import RegistrationForm from '../../components/Registration';

import Link from 'next/link';
import Features from '../../components/features/Features';
import PopularProducts from '@/app/components/landing/PopularProducts';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Landing: React.FC = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <div>
      <section
        className="h-screen w-screen flex justify-center items-center bg-cover bg-center object-contain"
        style={{ backgroundImage: `url('${landindImage.src}')` }}
      >
        <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
            <div className="w-full md:w-1/2 md:mr-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-500">
                MonoStore
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Monkey Themed Apparel Sold by MonoStore
              </p>
              {isLoggedIn ? (
        
              <Link href="../pages/profileuser"
              className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
            >
              User Profile
            </Link>
            ) : (
              <p></p>
            )}
              
              <div className="flex flex-col md:flex-row">
              <Link href="../pages/products"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
                  style={{ marginRight: '10px' }} // stylos
                >
                  Explore Products
                </Link>
                <Link href="../pages/login"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
                  style={{ marginRight: '10px' }} // stylos
                >
                  Log in
                </Link>
                <Link
                href="../pages/register"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
                style={{ marginRight: '10px' }} //styloslabs
                        >
                  Sign in
                </Link>
                </div>
              </div>
            </div>
          </div>
         
          
         
        </section>
        
        <PopularProducts />
        <Features />
      </div>
    );
    

    }

export default Landing;