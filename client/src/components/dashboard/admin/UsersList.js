import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { BsPersonFill } from 'react-icons/bs';
// import { users } from "../../../utils/dashboard/admin/data";
import { banUser, getAllUsers } from "../../../api/usersApi";
import Pagination from './Pagination';


function UsersList() {
    // LÓGICA DEL COMPONENTE
    const router = useRouter();

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const amountXPage = 20; // Cantidad de usuarios por página (default: 20)
    const totalPages = Math.ceil(totalUsers / amountXPage);

    useEffect(() => {
        const fetchUsers = async () => {
            // Obtener los usuarios de la página actual
            console.log("currentPage: " + currentPage);
            const { totalUsers, users } = await getAllUsers(currentPage);
            console.log(totalUsers);
            setTotalUsers(totalUsers || 0);
            setUsers(users || []);
        };

        fetchUsers();
    }, [currentPage]);


    // Función para gestionar el cambio de página
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }


    // Función para ver detalles del usuario
    const handleDetails = (id) => {
        // TO-DO: Mostrar detalles del usuario
        console.log(id);
    }

    // Función para bloquear/desbloquear usuario
    const handleBlock = async (id) => {
        try {
            const response = await banUser(id);
            router.reload();
            console.log(response);
        } catch (error) {
            console.error('Error al bloquear usuario:', error);
            alert('Error al bloquear usuario');
        }
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
                                            py-1 px-2 mx-1 w-24 sm:max-w-md
                                            rounded-md cursor-pointer'
                                        onClick={() => handleDetails(user._id)}
                                        >
                                            Perfil
                                        </button>
                                        <button 
                                        className='bg-rose-500 hover:bg-rose-400 text-white font-semibold 
                                        py-1 px-2 w-24 rounded-md cursor-pointer mx-1 text-sm'
                                        onClick={() => handleBlock(user._id)}
                                        >
                                            {user.state ? "Bloquear" : "Desbloquear"}
                                        </button>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>

                {/* Paginación */}
                <div className='flex w-full items-center justify-center p-4'>
                    <Pagination currentPage={users.length !== 0 ? currentPage : 0} totalPages={totalPages} handlePageChange={handlePageChange} />
                </div>
            </div>
        </div>
    )
}

export default UsersList;