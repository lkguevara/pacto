import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { BsPersonFill } from 'react-icons/bs';
import { users } from "../../../utils/dashboard/admin/data";
import { banUser } from "../../../api/usersApi";


function UsersList() {
    // LÓGICA DEL COMPONENTE

    // Función para ver detalles del usuario
    const handleDetails = (id) => {
        // TO-DO: Mostrar detalles del usuario
        console.log(id);
    }

    // Función para bloquear/desbloquear usuario
    const handleBlock = async (id) => {
        // try {
        //     const response = await banUser(id);
        //     console.log(response);
        // } catch (error) {
        //     console.error('Error al bloquear usuario:', error);
        //     alert('Error al bloquear usuario');
        //     throw error;
        // }
        console.log(id);
    }

    // RENDERIZADO DEL COMPONENTE
    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                {/* Encabezados */}
                <div className='my-3 p-2 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 items-center justify-between '>
                    <span className='font-semibold pl-20 hidden sm:grid sm:col-span-2 md:col-span-2 xl:col-span-2'>Nombre</span>
                    <span className='font-semibold hidden sm:grid col-span-1'>Verificación</span>
                    <span className='font-semibold hidden sm:grid col-span-1'>Estado</span>
                    <span className='font-semibold hidden xl:grid col-span-2'>Email</span>
                    <span className='font-semibold hidden lg:grid col-span-2 xl:col-span-1'>Registrado/a</span>
                    <span className='font-semibold hidden md:grid col-span-1'>Acciones</span>
                </div>

                {/* Registros */}
                <ul>
                    {
                        users?.map((user, index) => {
                            // Convertir la fecha a hora local
                            let local = null;
                            if (user.dateRegister) {
                                const utc = new Date(user.dateRegister);
                                const offset = utc.getTimezoneOffset();
                                local = new Date(utc.getTime() + (offset*60*1000));
                            }

                            return (
                                <li key={index} 
                                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-4 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 items-center justify-between '
                                >
                                    
                                    {/* Nombre */}
                                    <div className='flex items-center justify-center sm:justify-start flex-col sm:flex-row col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2 ' >
                                        <div 
                                        className={
                                            `p-3 rounded-full sm:rounded-lg mb-2 sm:mb-0
                                            ${
                                                user.state ? 'bg-green-100' 
                                                : 'bg-red-100'
                                            }`
                                        }
                                        >
                                            <BsPersonFill 
                                            className={
                                                user.state ? 'text-verde' 
                                                : 'text-red-400'
                                            } 
                                            />
                                        </div>
                                        <p className='font-medium text-center sm:pl-4'>{user.firstname + " " + user.lastname}</p>
                                    </div>

                                    {/* Verificado */}
                                    <p 
                                    className="grid col-span-1 rounded-lg justify-center sm:justify-start items-center "> 
                                        <span className={`
                                        text-sm font-semibold w-fit py-1
                                        ${
                                            user.verified ? 'text-verde' 
                                            : 'text-orange-400'
                                        }
                                        `}
                                        >
                                            {user.verified ? '✔ Verificado' : '⨯ Pendiente'}
                                        </span>
                                    </p>

                                    {/* Estado */}
                                    <p 
                                    className="grid col-span-1 rounded-lg justify-center sm:justify-start items-center">
                                        <span className={`
                                        text-sm font-semibold w-fit py-1
                                        ${
                                            user.state ? 'text-verde' 
                                            : 'text-red-500'
                                        }
                                        `}
                                        >
                                            {user.state ? "✔ Activo" : "⨯ Bloqueado"}
                                        </span>
                                    </p>

                                    {/* Email */}
                                    <p className='text-gray-600 hidden xl:grid col-span-2'>{user.email}</p>

                                    {/* Fecha de registro */}
                                    <p className='text-gray-600 hidden lg:grid col-span-2 xl:col-span-1'>{ 
                                    local ? formatDistanceToNow(local) : "próximamente..." }</p>

                                    {/* Acciones */}
                                    <div className='flex items-center justify-center col-span-1 sm:col-span-4 md:col-span-1 mt-2'>
                                        <button 
                                        className='
                                            bg-verde hover:bg-verde-light text-white font-semibold text-sm
                                            py-1 mx-1 w-20 sm:max-w-md
                                            rounded-md cursor-pointer'
                                        onClick={() => handleDetails(user._id)}
                                        >
                                            Perfil
                                        </button>
                                        <button 
                                        className='bg-rose-500 hover:bg-rose-400 text-white font-semibold 
                                        py-1 w-20 rounded-md cursor-pointer mx-1 text-sm'
                                        onClick={() => handleBlock(user._id)}
                                        >
                                            Bloquear
                                        </button>
                                    </div>

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