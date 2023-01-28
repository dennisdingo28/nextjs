import React from 'react'
import Image from 'next/image'

const EventDetails = (props) => {
    const {id,title,city,description,image}=props;

  return (
    <div className='pageContent'>
    <div className='pageContainer'>
    <h2>{title}</h2>
    <Image src={image} alt={id} width={600} height={400}/>
    <p>{description}</p>
    <input placeholder='contact us' type="email" className='newsletterInput'/><button className='submitBtn'>Submit</button>
    </div>
</div>
  )
}

export default EventDetails
