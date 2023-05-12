import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FaShoppingBag } from 'react-icons/fa';
import { recentOrders as orders } from "../../../utils/dashboard/admin/data";

function RecentOrders() {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll '>
      <h1>Ventas recientes</h1>
      <ul>
        {
          orders?.map((order, index) => (
            <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer '>
              <div className='bg-green-100 rounded-log p-3 '>
                <FaShoppingBag className='text-verde-dark' />
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{`$ ${order.total}`}</p>
                <p className='text-gray-400 text-sm'>{order.name}</p>
              </div>
              <div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>{ formatDistanceToNow(new Date(order.date)) }</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default RecentOrders;