import CatEvent from '@/components/events/catEvent';
import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = (props)=>{
    return (
        <CatEvent {...props}/>
    )
}

export default EventsCatPage;   



export async function getStaticPaths(){
    const {events_categories}=await import('/data/data.json');
    const allPaths = events_categories.map(ev=>{
        return {
            params:{
                cat:ev.id.toString(),
            }
        }
    })
    return {
        paths:allPaths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {allEvents}=await import('/data/data.json');
    const id=context?.params.cat;

    const data = allEvents.filter(ev=>ev.city==id)
    return {
        props:{data,id}
    }
}