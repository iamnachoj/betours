import EventList from "../../components/events/event-list";
import { DATA_BASE_EVENTS_COLLECTION } from "../../data-base";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEvents() {
    const router = useRouter();
    function findEventsForSelectedDates(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath).then()
    }

    return (
        <>
            <h2>All Events</h2>
            <EventsSearch onSearch={findEventsForSelectedDates}/>
            <EventList events={DATA_BASE_EVENTS_COLLECTION}/>
        </>
    )
}
