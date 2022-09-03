// import { Box } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import logo from '../../public/bg-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const social = [
    { icon: <FacebookIcon />, title: '' },
    { icon: <TwitterIcon />, title: '' },
    { icon: <LinkedInIcon />, title: '' },
    { icon: <InstagramIcon />, title: '' }
  ];

  return (
    <div
     className='bg-gray-200 px-56'
     >
       <div className="flex justify-between items-center">
       <div className="circle">
               <Image
               src={logo}
               alt="Meta magazsine" 
               width={120}
               height={120}
               />
           </div>
         <div>
           <h3 className="text-2xl py-4 font-bold">Get In Touch: </h3>
          <ul className='flex items-center'>
            {
              social.map(s => (
                <li className="flex items-center hover:text-white cursor-pointer px-4 ml-2 text-3xl py-2 bg-slate-500 rounded-full text-gray-200">{s.icon}</li>
              ))
            }
          </ul>
         </div>
       </div>
       <div className="w-full h-[1px] bg-gray-500"></div>
    <div className='grid grid-cols-3'>
       <div className=''>
           <div className="explore">
               <h2 className="font-semibold text-xl">Explore</h2>
                <ul className='text-slate-600 text-xl font-semibold leading-10'>
                    <li>NFT's</li>
                    <li>Crypto</li>
                    <li>Metaverse</li>
                    <li>Defi</li>
                    <li>DAO</li>
                    <li>DAI</li>
                </ul>
            </div>
               
       </div>
       <div className=''>
       <div className="">
           <h2 className="font-semibold text-xl">About</h2>
                <ul className='text-slate-600 text-xl font-semibold leading-10'>
                    <li>About</li>
                    <li>News Letter</li>
                    <li>Privacy Policy</li>
                    <li>Vission</li>
                    <li>Support</li>
                    <li>Learn</li>
                </ul>
        </div>
       </div>
       <div  className=''>
          
        </div>
    </div>
    </div>
  )
}

export default Footer