// import { useState } from "react";
// import { profileItems, sidebarItems } from "./data";
// import { Bars3Icon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

// export default function TransBar() {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const visibility = isNavOpen ? "visible" : "hidden";
//     const isOverflow = sidebarItems.length > 14 ? "overflow-y-scroll" : "";
//     const profileDetail = isProfileOpen ? "flex" : "hidden";

//     return (
//         <aside className="flex flex-col fixed top-3 left-3 bottom-3 max-h-screen w-auto z-40">
//             <div className="flex flex-col my-auto">
//                 <div className="p-1 w-full rounded-lg shadow-2xl bg-[#ffffff14]">
//                     <a onClick={() => { setIsNavOpen(!isNavOpen), setIsProfileOpen(false) }} className={`flex flex-row w-auto p-1 rounded-lg shadow-2xl hover:bg-[#ffffff14]`}>
//                         <Bars3Icon className="w-6 h-6 m-auto text-white" />
//                     </a>
//                 </div>
//                 <div className={`rounded-lg my-1 py-1 px-2 shadow-2xl bg-[#ffffff14] ${isOverflow} max-h-[530px]`}>
//                     {sidebarItems.map((item, index) => (
//                         <a href="#" key={index} className={`flex flex-row w-auto my-1 p-1 rounded-lg shadow-2xl hover:bg-[#ffffff14]`}>
//                             {item.icon}
//                             <span className={`my-auto ml-2 ${visibility} text-white`}>{item.title}</span>
//                         </a>
//                     ))}
//                 </div>
//                 <div className="p-1 w-full rounded-lg shadow-2xl bg-[#ffffff14]">
//                     <div className={`${profileDetail} flex-col w-auto bg-[#ffffff14] rounded-lg shadow-2xl my-1 mx-1`}>
//                         {profileItems.map((item, index) => (
//                             <a key={index} href="#" className={`flex flex-row w-auto m-1 py-2 px-1 rounded-lg shadow-2xl hover:bg-[#ffffff14]`}>
//                                 {item.icon}
//                                 <span className={`mr-auto ml-2 text-white`}>{item.title}</span>
//                             </a>
//                         ))}
//                     </div>
//                     <a onClick={(e) => { setIsNavOpen(true), setIsProfileOpen(!isProfileOpen) }} className={`flex flex-row w-auto py-2 px-1 rounded-lg shadow-2xl hover:bg-[#ffffff14]`}>
//                         <img className="w-6 h-6 m-auto rounded-lg" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="Profile" />
//                         <span className={`m-auto ${visibility} text-white`}>Profile</span>
//                         {isProfileOpen ? <ChevronDownIcon className={`w-4 h-4 ml-auto my-auto ${visibility} text-white`} />
//                             : <ChevronUpIcon className={`w-4 h-4 ml-auto my-auto ${visibility} text-white`} />}
//                     </a>
//                 </div>
//             </div>
//         </aside>
//     )
// }