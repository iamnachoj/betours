import EventList from "../../components/events/event-list";
import { DATA_BASE_EVENTS_COLLECTION } from "../../data-base";

export default function AllEvents() {
    return (
        <div>
            <h1>Hello Events!</h1>
            <h2>See all events here</h2>
            <EventList items={DATA_BASE_EVENTS_COLLECTION}/>
        </div>
    )
}
