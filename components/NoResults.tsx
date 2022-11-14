import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineLogout} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'

import Logo from '../utils/tiktik-logo.png'


interface IProps{
    text: string;
}


const NoResults = ({text}: IProps) =>{
    return (
        <div>

        </div>
    )
}

export default NoResults