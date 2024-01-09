
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

export default function Index(props) {
    return (
        <>
          <h2>Featured Events</h2>
          <EventList events={props.featuredEvents}/>
        </>
    )
}
export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            featuredEvents: featuredEvents
        }
    }
}
