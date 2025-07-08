import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import { PiHeadphonesLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Nav() {
  return (
    <div className='pt-4 pl-4 pr-4 flex justify-between'>
        <div className="flex gap-4">
            <div className="relative mr-[300px] w-56">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CiSearch className="text-gray-500 cursor-pointer" size={20} />
                </div>
                <input
                  type="search"
                  className="h-11 w-60 rounded-md p-4 pl-9 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  placeholder="Search your product ..."
                />
            </div>
            <div className='flex gap-4'>
              <div>
                  <PiShoppingCart size={32} />
              </div>
              <div>
                  <BiBell size={32} />
              </div>
              <div>
                  <PiHeadphonesLight size={32} />
              </div>
            </div>
            <div>
                <div>
                    <p className='flex gap-2 w-48 ml-6 bg-gray-200 p-2 pl-4 rounded-md'><span className='font-bold'>Sunday,</span> March 25<MdOutlineKeyboardArrowDown className='mt-1' size={18} /></p>
                </div>
            </div>
            <div>
                <div className='flex gap-2 ml-4'>
                    <img className='rounded-full w-10 h-10' src="https://imgs.search.brave.com/tlOPzK1eIFEQbfQRrjDanUancT8-VgjPHPNb3kwmovM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9za2V0/Y2hvay5jb20vaW1h/Z2VzL2FydGljbGVz/LzA2LWFuaW1lLzAw/Mi1vbmUtcGllY2Uv/MzEvMTguanBn" alt="" />
                    <MdOutlineKeyboardArrowDown className='mt-3' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
