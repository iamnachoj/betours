import {getAllEvents, getEventById} from "../../helpers/api-util";
import EventDetails from "../../components/events/event-details";

EventDetailsPage.propTypes = {
    event : {}
}

export default function EventDetailsPage({event}) {
    return <EventDetails event={event}/>
}

export async function getStaticPaths() {
    const events = await getAllEvents();
    const paths = events.map(event => ({params: {eventId: event.id}}))
    console.log('paths:', paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId)
    return {
        props: {
            event
        }
    }
}
