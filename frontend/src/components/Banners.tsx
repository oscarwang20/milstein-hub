"use client";
import React from "react";
import Image from 'next/Image';

const Banners = () => {
    return (
        <div className = "grid grid-cols-4 gap-4 ">

            <div className="text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="" alt="" />
                </a>
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reservations</h5>
                </div>
            </div>


            <div className="text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="" alt="" />
                </a>
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rentals</h5>
                </div>
            </div>


            <div className="text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="" alt="" />
                </a>
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Students</h5>
                </div>
            </div>


            <div className="text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="" alt="" />
                </a>
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Profile</h5>
                </div>
            </div>

        </div>
    );
};

export default Banners;