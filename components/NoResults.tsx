import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineLogout} from 'react-icons/ai';
import { BiCommentX, BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'

import Logo from '../utils/inter-logo.png'
import { MdOutlineVideocamOff } from "react-icons/md";


interface IProps{
    text: string;
}


const NoResults = ({text}: IProps) =>{
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <p className="text-8xl">
                {text === 'No Comment yet'
                ? <BiCommentX/> 
                : <MdOutlineVideocamOff/>
                }
            </p>
            <p className="text-2xl text-center">{text}</p>
        </div>
    )
}

export default NoResults