import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const HomePage = ({ data }) => {
  return (<div className="home_body">
    {
      data?.map(ev => {
        return <Link key={ev.id} className="card" href={`/events/${ev.id}`} passHref>
          <div className="card2"><Image width={400} alt="destImage" height={300} src={ev.image} />
            <div className="content">
              <h1>{ev.title}</h1>
              <p>{ev.description}</p>
            </div>
          </div>
        </Link>
      }
      )
    }
  </div>
  )
}