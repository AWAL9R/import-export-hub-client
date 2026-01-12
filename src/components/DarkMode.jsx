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
  "
        >
            {dark ? (
                <HiOutlineSun className="text-2xl text-base-content/70 group-hover:text-base-content transition" />
            ) : (
                <HiOutlineMoon className="text-2xl text-base-content/70 group-hover:text-base-content transition" />
            )}
        </div>
    );
};

export default DarkMode;