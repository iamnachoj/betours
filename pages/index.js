import { getFeaturedEvents } from "../data-base";
import EventList from "../components/events/event-list";

export default function Index() {
  const featuredEvents = getFeaturedEvents()
    return (
        <>
          <h2>Featured Events</h2>
          <EventList events={featuredEvents}/>
        </>
    )
}
