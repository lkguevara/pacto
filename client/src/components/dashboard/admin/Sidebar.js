import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineShoppingBag, HiOutlineChatAlt2, HiOutlineUser, HiOutlineChartBar } from 'react-icons/hi';
import { BsPostcard } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className='flex'>
      {/* Contenedor */}
      <div className='w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col '>
        {/* Main */}
        <div className='flex flex-col items-center'>
          
          {/* Logo (dirige al home) */}
          <Link href="/">
            <div className='cursor-pointer inline-block'>
              <Image src="/pacto-logo.png" alt="logo" width="85" height="88" title='Home' className='max-w-fit px-3'/> 
            </div>
          </Link>

          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

          {/* Botón Dashboard */}
          <Link href="/dashboard/admin">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Dashboard'>
              <HiOutlineChartBar size={20} />
            </div>
          </Link>

          {/* Botón Ventas */}
          <Link href="/dashboard/admin/ventas">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Últimas ventas realizadas'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>

          {/* Botón Productos */}
          <Link href="/dashboard/admin/productos">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Últimos productos publicados'>
              <BsPostcard size={20} />
            </div>
          </Link>

          {/* Botón Usuarios */}
          <Link href="/dashboard/admin/usuarios">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Últimos usuarios registrados'>
              <HiOutlineUser size={20} />
            </div>
          </Link>

          {/* Botón Reviews */}
          <Link href="/dashboard/admin/calificaciones">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Últimas calificaciones realizadas'>
              <MdOutlineRateReview size={20} />
            </div>
          </Link>

          {/* Botón Preguntas/Respuestas */}
          <Link href="/dashboard/admin/preguntas">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Últimas preguntas/respuestas'>
              <HiOutlineChatAlt2 size={20} />
            </div>
          </Link>

          {/* Botón Configuración */}
          <Link href="/dashboard/admin/configuracion">
            <div className='bg-gray-100 text-verde-dark hover:bg-verde hover:text-white active:bg-verde active:text-white cursor-pointer p-3 mt-4 mb-2 rounded-lg inline-block ' title='Configuración'>
              <FiSettings size={20} />
            </div>
          </Link>

        </div> 
      </div>
    </div>
  )
};

export default Sidebar;