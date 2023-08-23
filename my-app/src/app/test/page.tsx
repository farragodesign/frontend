"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [loading, setLoading] = useState(true);
  const [data, setData]: any = useState([]);


  useEffect(()=>{
     fetch(
        "https://result-gen.vercel.app/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: `{
            details {
              name
              motto
            }
          }
           `,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          // next:{revalidate:2}
        }
      ).then((res) => {
        setData(res.json())
        setLoading(false)
      })
  })



  return <div>{loading ? <h1>Loading...</h1> : <h1>{data[0].motto}</h1>}</div>;
}
