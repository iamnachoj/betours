import {getEventById, getFeaturedEvents} from "../../helpers/api-util";
import EventDetails from "../../components/events/event-details";

EventDetailsPage.propTypes = {
    event : {}
}

export default function EventDetailsPage({event}) {
    return <EventDetails event={event}/>
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({params: {eventId: event.id}}))
    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId)
    return {
        props: {
            event
        },
        revalidate: 600
    }
}
