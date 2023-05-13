import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { users } from "../../../utils/dashboard/admin/data";

function UsersList() {

    const handleDetails = (id) => {
        // TO-DO: Mostrar detalles del usuario
        console.log(id);
    }


  return (
    <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

            {/* Encabezados */}
            <div className='my-3 p-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between '>
                <span className='font-semibold'>Nombre</span>
                <span className='font-semibold hidden md:grid'>Email</span>
                <span className='font-semibold hidden sm:grid'>Registro</span>
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
                            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '
                            onClick={() => handleDetails(user._id)}
                            >
                                
                                {/* Nombre */}
                                <div className='flex items-center'>
                                    <div className='bg-green-100 p-3 rounded-lg '>
                                        <BsPersonFill className='text-verde' />
                                    </div>
                                    <p className='font-medium pl-4'>{user.firstname + " " + user.lastname}</p>
                                </div>

                                {/* Email */}
                                <p className='text-gray-600 hidden md:grid '>{user.email}</p>

                                {/* Fecha de registro */}
                                <p className='text-gray-600 hidden sm:grid'>{ formatDistanceToNow(local) }</p>

                                

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