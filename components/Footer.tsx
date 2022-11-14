import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineLogout} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import { footerList1, footerList2, footerList3 } from "../utils/constants";
import Logo from '../utils/tiktik-logo.png'


const List = ({items, mt}: {items: string[], mt : boolean}) => (
    <div className={`flex flex-wrap gap-2 ${mt &&  "mt-5"}`}>
                {items.map((item) => (
                    <p key ={item} className="text-gray-400 text-sm hover:underline cursor-pointer ">
                        {item}
                    </p>
                ))}
    </div>
    )




const Footer = () =>{
    return (
        <div className="mt-6 hidden xl:block">
            <List items={footerList1} mt={false}/>
            <List items={footerList2} mt/>
            <List items={footerList3} mt/>
            <p className="text-gray-400 text-sm mt-5">2022 Interpreco</p>
        </div>
    )
}

export default Footer