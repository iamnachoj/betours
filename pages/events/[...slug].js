import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";
import Spinner from "../../components/atoms/spinner";
import Button from "../../components/atoms/button";
import {getFilteredEvents} from "../../helpers/api-util";

export default function FilteredEventsPage(props) {
    const {filteredEvents, year, month } = props
    const monthName = new Date(2022, month - 1, 1)
        .toLocaleString('en-US', {month: 'long'});

    return (
        <>
            {!filteredEvents &&  <div className='center'><Spinner/></div>}
            <div>
                <h2>Filtered events</h2>
                <h3>{monthName}, {year}</h3>
                <EventList events={props.filteredEvents}/>
                {filteredEvents.length === 0 && <h3 className="center">No events found for this month</h3>}
                <div className='center'><Button link="/events">Show all events</Button></div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    const filteredData = params.slug
    const year = filteredData[0];
    const month = filteredData[1];

    const filteredEvents = await getFilteredEvents({year, month})

    return {
        props: {
            filteredEvents,
            year,
            month
        }
    }
}
