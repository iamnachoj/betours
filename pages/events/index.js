import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";

AllEvents.propTypes = {
    allEvents : {}
}

export default function AllEvents(props) {
    const router = useRouter();
    function findEventsForSelectedDates(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath).then()
    }

    return (
        <>
            <h2>All Events</h2>
            <EventsSearch onSearch={findEventsForSelectedDates}/>
            <EventList events={props.allEvents}/>
        </>
    )
}

export async function getStaticProps() {
    const allEvents = await getAllEvents()
    return {
        props: {
            allEvents
        },
        revalidate: 600
    }
}
