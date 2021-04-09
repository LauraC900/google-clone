import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import {useRouter} from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null)

    const search = e =>{
        e.preventDefault();
    
        const term = searchInputRef.current.value;
        // alert(term)
    
        if(!term) return;
       
        router.push(`/search?term=${term}`);

       
      } 

    return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6">
            <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() =>router.push("/")}
            />

            <form onSubmit={search}className="flex border border-gray-200 rounded-full 
               shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
               <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text" />
               <XIcon 
               className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
               onClick={() => searchInputRef.current.value = ""}
               /> 
               <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
               <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
               <button hidden type="submit">
                   search
               </button>
            </form>
            <Avatar url="https://i.scdn.co/image/ab6775700000ee85deb22b370330fcb13e126d9f" className="ml-auto" />
        </div>
        <HeaderOptions />
    </header>
    )
}

export default Header
