import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineLogout} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import{ topics}  from "../utils/constants";

import Logo from '../utils/tiktik-logo.png'

const Discover = () =>{

    const router  = useRouter();
    const {topic} = router.query;

    const activeTopicStyle ="xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]"
    
    const topicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black"

    return (
        <div className="xl:border-b-2 xl:border-gray-200 pd-6">
            <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
                popular topics
            </p>
            <div className="flex gap-3 flex-wrap">
                {topics.map((item) => (
                    <Link href={`/?topic=${item.name}`} key={item.name}>
                        <div className={topic === item.name ?
                        activeTopicStyle : topicStyle}>
                            <span className="font-bold text-2xl xl:text-md">
                                {item.icon}
                            </span>
                            <span className="font-medium text-md hidden xl:block captalize">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Discover