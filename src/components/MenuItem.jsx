import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ onClick, text, isActive }) => {
    return (
        <li>
            <Link
                to="#"
                onClick={onClick}
                className={`cursor-pointer relative group ${isActive ? 'text-white group-active:w-full' : 'text-blue-500'}`}
            >
                <span>{text}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-inred md:bg-inblack transition-all ${isActive ? 'w-full' : 'group-hover:w-full'}`}></span>
            </Link>
        </li>
    );
};

export default MenuItem;