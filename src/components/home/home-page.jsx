import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const HomePage = ({ data }) => {
  const [cardCount, setCardCount] = useState(1);
  return (<div className="home_body">
    {
      data?.map(ev => {
        return <Link key={ev.id} className="card" href={`/events/${ev.id}`} passHref>
          <div className="card2"><Image width={400} alt="destImage" height={300} src={ev.image} />
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </div>

        </Link>
        setCardCount(cardCount + 1);
      }
      )
    }
  </div>
  )
}