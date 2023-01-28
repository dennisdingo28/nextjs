import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CatEvent = ({data,id}) => {
    return (
        <div className='cat_events'>
            <h1>Events In {id}</h1>
            <div className='content'>
                {
                    data.map(ev => (
                        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                            <div className='card'>
                                <Image src={ev.image} alt={ev.title} width={400} height={200} />
                                <h3>{ev.title}</h3>
                                <p>{ev.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CatEvent
