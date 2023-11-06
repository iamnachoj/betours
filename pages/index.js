import { getFeaturedEvents } from "../data-base";
import EventList from "../components/events/event-list";
import classes from "../styles/home.module.css";

export default function HomePage() {
  const  featuredEvents = getFeaturedEvents()
    return (
    <div className={classes.mainContainer}>
      <h1>Hello BeTours!</h1>
      <h2>Find the best tours for each place</h2>
      <EventList events={featuredEvents}/>
    </div>
  )
}
