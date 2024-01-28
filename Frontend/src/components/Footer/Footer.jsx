

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
    {
        path: "www.codeforces.com",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "www.codeforces.com",
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "www.codeforces.com",
        icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "www.codeforces.com",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
    }

];

const quickLinks01 = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/",
        display: "About Us"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/home",
        display: "Blog"
    }


]


const Footer = () => {

    const year = new Date().getFullYear();

    return <footer className='pb-16 pt-10'>
        <div className="container">
            <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                <div>
                    <img src={logo} alt="" />
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>Copyright @ {year} developed by Sadid Rafan all rights reserved</p>
                    <div className='flex items-center gap-3 mt-4'>
                        {socialLinks.map((link, index) => <Link to={link.path} key={index}
                            className='w-9 h-9 border border-solid border-[#181A1E] rounded-full
                        flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
                    </div>
                </div>
            </div>
        </div>

    </footer>
}

export default Footer

