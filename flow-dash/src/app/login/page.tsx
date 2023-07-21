"use client";

import Login  from "@/components/Login";

export default function LoginPage() {
    const data = [
      { title: "Title 1", count: '341234' },
      { title: "Title 2", count: '341234' },
      { title: "Title 3", count: '341234' },
      { title: "Title 3", count: '341234' },
    ];
    return (
        <div className=" w-full h-full flex items-center justify-center p-2 transition-all ">
           
           <Login/>
        </div>
    );
  }
  