import React, { useState } from 'react'
import logo from '/assets/logo.png'
import { RiHome5Line } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { LuWallet } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FiBox } from "react-icons/fi";
import { FiCodesandbox } from "react-icons/fi";

function Side() {
    const [showProducts, setShowProducts] = useState(false)
  return (
    <div className='p-6 w-96 h-[1350px] bg-darkBlue text-lightGray font-semibold rounded-md'>
      <div className='shadow-md flex gap-4'>
        <div>
            <img src={logo} alt="logo" className='w-12 h-12' />
        </div>
        <div>
            <h2 className='text-white text-2xl'>Space</h2>
            <p>design@spaceup.co</p>
        </div>
      </div>
      <div className='mt-8'>
        <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><RiHome5Line className='mt-0.2' size={20} />Home</p>
        </div>
         <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><RxEnvelopeClosed className='mt-0.2' size={20} />Inbox</p>
        </div>
         <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><RiFileListLine className='mt-0.2' size={20} />Order List</p>
        </div>
         <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><SiSimpleanalytics className='mt-0.2' size={20} />Analytic</p>
        </div>
         <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><LuWallet className='mt-0.2' size={20} />Payment</p>
        </div>
         <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p className='flex gap-4'><CiSettings className='mt-0.2' size={20} />Settings</p>
        </div>
        <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
            <p onClick={() => setShowProducts(!showProducts)} className='flex gap-4'><FiBox className='mt-0.2' size={20} />Product{ showProducts ? <MdOutlineKeyboardArrowUp className='ml-12 mt-0' size={24} /> : <MdOutlineKeyboardArrowDown className='ml-12 mt-0' size={24} /> }</p>
        </div>
        {showProducts && (
            <div className='p-6 pt-2'>
                <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
                    <p className='flex gap-4'><FiCodesandbox className='mt-0.2' size={20} />New Product</p>
                </div>
                <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
                    <p className='flex gap-4'><MdOutlineProductionQuantityLimits className='mt-0.2' size={20} />Order</p>
                </div>
                <div className='hover:bg-lightBlue rounded-md h-10 p-2 w-48'>
                    <p className='flex gap-4'><LuWallet className='mt-0.2' size={20} />Payment</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Side
