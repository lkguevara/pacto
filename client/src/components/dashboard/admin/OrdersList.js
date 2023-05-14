import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FaShoppingBag } from 'react-icons/fa';
import { recentOrders } from '@/utils/dashboard/admin/data';


function OrdersList() {
    // LÓGICA DEL COMPONENTE
    const handleDetails = (id) => {
        // TO-DO: Mostrar detalles de la venta
        console.log(id);
    }


    // RENDERIZADO DEL COMPONENTE
    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                {/* Encabezados */}
                <div className='my-3 p-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between '>
                    <span className='font-semibold'>Venta</span>
                    <span className='font-semibold hidden sm:grid'>Status</span>
                    <span className='font-semibold hidden md:grid'>Hora</span>
                </div>

                {/* Registros */}
                <ul>
                    {
                        recentOrders?.map((order, index) => {
                            // Convertir la fecha a hora local
                            const utc = new Date(order.date);
                            const offset = utc.getTimezoneOffset();
                            const local = new Date(utc.getTime() + (offset*60*1000));

                            return (
                                <li key={index} 
                                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '
                                onClick={() => handleDetails(order._id)}
                                >
                                    
                                    {/* Venta */}
                                    <div className='flex items-center'>
                                        <div 
                                            className={
                                                `p-3 rounded-lg 
                                                ${
                                                    order.orderStatus === 'Entregado' 
                                                    ? 'bg-green-100' 
                                                    : 'bg-orange-100'
                                                }
                                                `
                                            }
                                        >
                                            <FaShoppingBag 
                                                className={
                                                    `${
                                                        order.orderStatus === 'Entregado' 
                                                        ? 'text-verde' 
                                                        : 'text-orange-400'
                                                    }`
                                                } 
                                            
                                            />
                                        </div>
                                        <div className='pl-4'>
                                            <p className='text-gray-800 font-bold'>{`$ ${order.totalAmount}`}</p>
                                            <p className='text-gray-400 text-sm'>{order.userFirstname + " " + order.userLastname}</p>
                                        </div>
                                    </div>

                                    {/* Estado de la venta*/}
                                    <p className='text-gray-600 sm:text-left text-right hidden sm:grid'>
                                        <span
                                            className={
                                                `w-min
                                                ${
                                                    order.orderStatus === 'Entregado' 
                                                    ? 'bg-green-100 p-2 rounded-lg' 
                                                    : 'bg-orange-100 p-2 rounded-lg'
                                                }
                                                `
                                            }
                                        >
                                            {order.orderStatus}
                                        </span>
                                    </p>

                                    {/* Fecha de la venta */}
                                    <p className='text-gray-600 hidden md:grid'>{ formatDistanceToNow(local) }</p>

                                    

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default OrdersList;