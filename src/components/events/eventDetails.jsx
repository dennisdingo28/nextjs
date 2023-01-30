import React,{useState,useRef} from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const EventDetails = (props) => {
  const { id, title, city, description, image } = props;
  const inputEmail=useRef();
  const router=useRouter();
  const [message,setMessage]=useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue=inputEmail.current.value;
    const eventId=router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validRegex)){
      setMessage('Please introduce a correct email address')
    }

    try{
      const response = await fetch("/api/emailRegistration",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({email:emailValue,eventId})
        }
      );
      if(!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value='';
    }catch(e){
      console.log('ERROR',e);
    }
  };
  return (
    <div className="pageContent">
      <div className="pageContainer">
        <h2>{title}</h2>
        <Image src={image} alt={id} width={600} height={400} />
        <p>{description}</p>
        <form onSubmit={onSubmit} className="email_registration">
          <label>Get Registered for the event!</label>
          <input
            placeholder="Please insert your email here"
            type="text"
            className="newsletterInput"
            ref={inputEmail}
          />
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EventDetails;
