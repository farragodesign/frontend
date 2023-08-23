"use client";
import { Card } from "@/components/Card";

export default function Page() {
  
  const data = [
    { title: "Title 1", count: '341234' },
    { title: "Title 2", count: '341234' },
    { title: "Title 3", count: '341234' },
    { title: "Title 3", count: '341234' },
  ];
  return (
      <div className=" w-full p-2 transition-all ">
        {/* <section className="flex justify-between transition-all "> */}
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6  transition-all ">
          {data.map((item, index) => (
            <Card key={index} title={item.title} count={item.count} />
          ))}
        </section>
      </div>
  );
}
