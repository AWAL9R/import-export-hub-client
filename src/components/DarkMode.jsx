import React, { useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const DarkMode = () => {

    const [dark, setDark] = useState(false)


    const html = document.documentElement;
    html.dataset.theme = dark ? "dark" : "light";

    const toggleDark = () => {
        setDark(!dark)
    }

    return (
        <div
            onClick={toggleDark}
            className="
    group cursor-pointer select-none
    rounded-xl py-2 px-3
    border border-base-300
    bg-base-100 hover:bg-base-200
    transition-all duration-200
    active:scale-95
    flex justify-center items-center
    text-2xl
    max-[600px]:text-lg
    max-[600px]:py-1.5
    max-[600px]:px-2
  "
        >
            {dark ? (
                <HiOutlineSun className=" ext-base-content/70 group-hover:text-base-content transition" />
            ) : (
                <HiOutlineMoon className="text-base-content/70 group-hover:text-base-content transition" />
            )}
        </div>
    );
};

export default DarkMode;