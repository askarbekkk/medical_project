import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-col bg-purple-900 w-64 min-h-screen px-4 tex-gray-900 border border-purple-900">
            <div className="flex flex-wrap mt-8">
                <div className="w-1/2">
                    <img
                        src="https://www.slashgear.com/wp-content/uploads/2016/02/the-simpsons-homer-simpson-wallpaperjpg-57aa94_1280w.jpg"
                        className="mx-auto w-20 h-20 rounded-full"
                    />
                </div>
                <div className="w-1/2">
                    <span className="font-semibold text-white">Ava Harper</span>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
                        Premium
                    </button>
                </div>
            </div>
            <div className="mt-10 mb-4">
                <ul className="ml-4">
                    <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-green-400    hover:font-bold rounded rounded">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
                        <Link to="/tasks">
                            <span className="ml-2">Задачи и работы</span>
                        </Link>
                    </li>
                    <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-green-400    hover:font-bold rounded rounded-lg">
              <span>
                <svg
                    className="fill-current h-5 w-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                      fill="currentColor"
                  />
                  <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                  />
                </svg>
              </span>
                        <Link to="/projects">

                            <span className="ml-2">Проекты</span>
                        </Link>
                    </li>
                    <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-green-400    hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
                  ></path>
                </svg>
              </span>
                        <Link to="#">

                            <span className="ml-2">Календарь</span>
                        </Link>
                    </li>
                    <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-green-400    hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                        014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                        8-4z"
                  ></path>
                </svg>
              </span>
                        <Link to="#">
                            <span className="ml-2">Возможности</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>

    );
};

export default Navbar;