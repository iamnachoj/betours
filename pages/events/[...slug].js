import { router } from "next/client";
import {getFilteredEvents} from "../../data-base";
import EventList from "../../components/events/event-list";

function FilteredEventsPage() {
    const year = router.query.slug[0];
    const month = router.query.slug[1];
    const monthName = new Date(2022, month - 1, 1)
        .toLocaleString('en-US', { month: 'long' });

    const filteredEvents = getFilteredEvents({year, month})

    return (
        <>
            {!filteredEvents && <p className="center">Loading...</p>}
            <div>
                <h2>Filtered events</h2>
                <h3>{monthName}, {year}</h3>
                <EventList events={filteredEvents}/>
                {filteredEvents.length === 0 && <h3 className="center">No events found for this month</h3>}
            </div>
        </>

    )
}

export default FilteredEventsPage;
