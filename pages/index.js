import { getFeaturedEvents } from "../data-base";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const  featuredEvents = getFeaturedEvents()
  return (
    <div>
      <h1>Hello BeTours!</h1>
      <h2>Find the best tours for each place</h2>
      <EventList items={featuredEvents}/>
    </div>
  )
}
