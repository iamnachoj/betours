import EventList from "../../components/events/event-list";
import { DATA_BASE_EVENTS_COLLECTION } from "../../data-base";

export default function AllEvents() {
    return (
        <>
            <h2>All Events</h2>
            <EventList events={DATA_BASE_EVENTS_COLLECTION}/>
        </>
    )
}
