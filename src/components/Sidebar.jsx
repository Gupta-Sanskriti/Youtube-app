import React from "react";
import { AiFillHome, AiFillPlayCircle } from "react-icons/ai";
import {MdOutlineSubscriptions} from 'react-icons/md'
import { useSelector } from "react-redux";
const Sidebar = () => {
    const Sidebarvalue = useSelector(store=>store.sidebar.toggleSidebar);

  return (
    <div className="grid grid-flow-row w-[30rem] md:w-[20rem] p-3 shadow-md h-[91vh]">
        <div className="">
        <ul className="text-xl border-b-2">
        <li className="flex p-2 ">
          <AiFillHome className="self-center mr-2" />
          <h1>Home</h1>
        </li>
        <li className="flex p-2">
          <AiFillPlayCircle className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
        <li className="flex p-2">
          <MdOutlineSubscriptions className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
      </ul>
      <ul className="text-xl border-b-2">
        <li className="flex p-2 ">
          <AiFillHome className="self-center mr-2" />
          <h1>Home</h1>
        </li>
        <li className="flex p-2">
          <AiFillPlayCircle className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
        <li className="flex p-2">
          <MdOutlineSubscriptions className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
      </ul>
      <ul className="text-xl">
        <li className="flex p-2 ">
          <AiFillHome className="self-center mr-2" />
          <h1>Home</h1>
        </li>
        <li className="flex p-2">
          <AiFillPlayCircle className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
        <li className="flex p-2">
          <MdOutlineSubscriptions className="self-center mr-2" />
          <h1> Shorts </h1>
        </li>
      </ul>
        </div>
      
    </div>
  );
};

export default Sidebar;
