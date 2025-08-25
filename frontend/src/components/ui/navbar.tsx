
import { GeneralResponse } from '@/interfaces/general';
import React from 'react'
import Thumb from '../atoms/thumb';
import Container from '../global/Container';
import Link from 'next/link';

const Navbar = async () => {

  const { data: { logo } }: GeneralResponse = await getData();


  return (
    <Container>
      <nav className='w-full h-[6rem] flex items-center justify-between font-primary' >
        <Thumb className={"w-[15rem]"} logo={logo} />
        <ul className='flex gap-4 items-center font-[700] !text-gray'>
          <li><Link href={"/"}>Inicio</Link></li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li className="relative group">{<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
            <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
            <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" strokeWidth="1.5" />
            <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" strokeWidth="1.5" />
            <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="#1C274C" strokeWidth="1.5" />
          </svg>}
             <div className="absolute right-0 mt-2 w-[250px] bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 scale-95
                    group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
              <div className="p-4 text-sm text-gray-700">
                <p className="font-semibold">Tu carrito</p>
                <p className="text-gray-500">No tienes productos aún</p>
              </div>
            </div> 
          </li>

        </ul>
      </nav>
    </Container>

  )
}

export default Navbar


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/general?populate=all`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
