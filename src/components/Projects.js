import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import data from "../projects-data";


const Projects = () => {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false)
    const { register, handleSubmit,  formState: { errors }, reset } = useForm();

    const onSave = (data) => {
    data.id = projects[projects.length - 1].id + 1
   setProjects([...projects, data])
        reset()
        setShowModal(false)
    }
    useEffect(() => {
        setProjects(data)
    }, [])
    return (
        <Layout>
            <h1 className='uppercase text-3xl text-purple-900 mt-6'>Проекты</h1>

            <div className='flex justify-between mt-3'>
                <h5>Список проектов </h5>

                <div>
                    <button
                        onClick={() => setShowModal(true)}
                        className='bg-purple-900 hover:bg-purple-600 text-white px-2 py-2'>Добавить проект
                    </button>
                    <div
                        className=" text-sm text-gray-500 leading-none   rounded-full text-right">
                        <button
                            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full py-2 active"
                            id="grid">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full  py-2"
                            id="list">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap -mx-3'>
                {
                    projects.map(project => <ProjectCard project={project}/>)
                }
                {
                    showModal &&
                    <div
                        className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-50">
                        <div className="bg-white rounded-lg w-1/2">
                            <div className="flex flex-col items-start p-4">
                                <div className="flex items-center w-full">
                                    <svg onClick={() => setShowModal(false)}
                                         className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path
                                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                                    </svg>
                                </div>
                                <hr/>
                                <div className="bg-grey-lighter w-full flex flex-col">
                                    <form  onSubmit={handleSubmit(onSave)} >
                                        className="  mx-auto flex items-center justify-center px-2">
                                        <div className="bg-white px-6 py-8 rounded shadow-md text-black ">
                                            <h1 className="mb-8 text-3xl text-center">Fill in the forms</h1>
                                            <label htmlFor="name ">
                                                Имя проекта
                                            </label>
                                            <input
                                                type="text"
                                                className="  border border-grey-light w-full p-2 rounded mb-4"
                                                id="name"
                                                {...register("title", { required: true })}
                                             />

                                            <label htmlFor="name ">
                                                Имя менеджера
                                            </label>
                                            <input
                                                type="text"
                                                className=" block border border-grey-light w-full p-2 rounded mb-4"
                                                id="name"
                                                {...register("manager", { required: true })}
                                              />
                                            <div>
                                                <label htmlFor="name ">
                                                    Имя администратора
                                                </label>
                                                <input
                                                    type="text"
                                                    className=" block border border-grey-light mx-1 w-full p-2 rounded mb-4"
                                                    id="name"
                                                    {...register("administrator", { required: true })}
                                                />
                                              <div className='flex'>
                                                 <div className="w-1/2">
                                                     <label htmlFor="dateStart " className="block">
                                                         Дата начала
                                                     </label>
                                                     <input
                                                         type="date"
                                                         className=" w-full border border-grey-light  p-2 rounded mb-4"
                                                         id="dateStart"

                                                         {...register("dateStart", { required: true })}
                                                     />
                                                 </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="dateEnd ">
                                                        Дата окончания
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className=" w-full border border-grey-light  p-2 rounded mb-4"
                                                        id="dateEnd"

                                                        {...register("dateEnd", { required: true })}
                                                    />
                                                </div>
                                              </div>
                                            </div>





                                        </div>
                                        <div className="ml-auto mt-3">
                                            <button

                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Добавить проект
                                            </button>

                                        </div>

                                    </form>

                                </div>
                                <hr/>

                            </div>
                        </div>
                    </div>
                }

            </div>
        </Layout>


    );
};

export default Projects;