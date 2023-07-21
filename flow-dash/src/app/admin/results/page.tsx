"use client";
import { Card } from "@/components/Card";
import Result from "@/components/Result";
import {ResultView} from "@/components/ResultView";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const data = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];
  return(
    <div className=" w-full p-2 transition-all ">
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all">
      {data.map((item , index) => (
        <ResultView key={index} count={index} />
      ))}
    </section>
  </div>
    );
  // return(
  //   <Result />
  // )
}
