"use client";
import React, { useState } from "react";
import Toast from "../components/Toast";
import Image from "next/image";
const Page = () => {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-32 w-screen h-screen p-5 md:p-16 md:px-36">
        <div className="flex-1 flex flex-col gap-10">
          <p className="text-3xl md:text-5xl font-bold">Story book</p>

          <p className="text-gray-600 text-xl leading-relaxed">
            Storybook is a frontend workshop for building UI components and
            pages in isolation. It helps you develop and share hard-to-reach
            states and edge cases without needing to run your whole app.
            Thousands of teams use it for UI development, testing, and
            documentation. It&apos;s open source and free.
          </p>

          <button
            onClick={() => setToastVisible(!toastVisible)}
            className="w-full md:w-fit bg-green-500 text-white px-4 py-2 rounded-lg mt-5"
          >
            Download Book
          </button>
        </div>

        <div className="flex-1 flex h-screen md:py-16 sm:p-5">
          <div className="bg-gray-200 w-full">
            <Image
              src="https://th.bing.com/th/id/OIP.128iOAveLZb389ws75jm0AHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="storybook"
              width={500}
              height={500}
              quality={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="fixed md:bottom-5  bottom-20 left-1/2 transform -translate-x-1/2 z-50">
        {toastVisible && <Toast text="Message Here" />}
      </div>
    </>
  );
};

export default Page;
