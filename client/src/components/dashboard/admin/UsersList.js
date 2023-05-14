import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { users } from "../../../utils/dashboard/admin/data";

function UsersList() {
    // LÓGICA DEL COMPONENTE
    const handleDetails = (id) => {
        // TO-DO: Mostrar detalles del usuario
        console.log(id);
    }


    // RENDERIZADO DEL COMPONENTE
    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                {/* Encabezados */}
                <div className='my-3 p-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 items-center justify-between '>
                    <span className='font-semibold col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-2'>Nombre</span>
                    <span className='font-semibold hidden sm:grid col-span-1'>Verific.</span>
                    <span className='font-semibold hidden md:grid col-span-1'>Estado</span>
                    <span className='font-semibold hidden xl:grid col-span-2'>Email</span>
                    <span className='font-semibold hidden lg:grid col-span-2 xl:col-span-1'>Registro</span>
                </div>

                {/* Registros */}
                <ul>
                    {
                        users?.map((user, index) => {
                            // Convertir la fecha a hora local
                            const utc = new Date(user.dateRegister);
                            const offset = utc.getTimezoneOffset();
                            const local = new Date(utc.getTime() + (offset*60*1000));

                            return (
                                <li key={index} 
                                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 items-center justify-between cursor-pointer '
                                onClick={() => handleDetails(user._id)}
                                >
                                    
                                    {/* Nombre */}
                                    <div className='flex items-center col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-2'>
                                        <div className='bg-green-100 p-3 rounded-lg '>
                                            <BsPersonFill className='text-verde' />
                                        </div>
                                        <p className='font-medium pl-4'>{user.firstname + " " + user.lastname}</p>
                                    </div>

                                    {/* Verificado */}
                                    <p className='text-gray-600 hidden sm:grid col-span-1'>{user.verified ? 'Verificado' : 'Sin Verificar'}</p>

                                    {/* Estado */}
                                    <p className='text-gray-600 hidden md:grid cols-span-1'>{user.state ? "Activo" : "Bloqueado"}</p>

                                    {/* Email */}
                                    <p className='text-gray-600 hidden xl:grid col-span-2'>{user.email}</p>

                                    {/* Fecha de registro */}
                                    <p className='text-gray-600 hidden lg:grid col-span-2 xl:col-span-1'>{ formatDistanceToNow(local) }</p>

                                    

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default UsersList;