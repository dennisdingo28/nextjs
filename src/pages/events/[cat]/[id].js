import EventDetails from '@/components/events/eventDetails';
import Image from 'next/image';
const EventPage = (props)=>{
    return (
       <EventDetails {...props}/>
    )
}

export default EventPage;


export async function getStaticPaths(){
    const data = await import('/data/data.json');
    const {allEvents}=data;
    const allPaths=allEvents.map(path=>{
        return {
            params:{
                cat:path.city,
                id:path.id
            }
        }
    });
    return {
        paths:allPaths,
        fallback:false
    }
}


export async function getStaticProps(context){
    const id=context.params.id;
    const {allEvents}=await import('/data/data.json');
    
    const eventDatas=allEvents.filter(ev=>ev.id===id);
    const eventData=eventDatas[0];

    return {
        props:{
            id:eventData.id,
            title:eventData.title,
            city:eventData.city,
            description:eventData.description,
            image:eventData.image
        }
    }
}