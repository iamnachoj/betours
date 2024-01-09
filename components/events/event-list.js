import EventItem from "./event-item";
import classes from "./event-list.module.css";

EventList.propTypes = {
    events: {}
}

function EventList(props) {
    const { events } = props;

    return <ul className={classes.list}>
        {events?.map(event => {
            return <EventItem key={event.id} item={event}/>
        })}
    </ul>
}

export default EventList
