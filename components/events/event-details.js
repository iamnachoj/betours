import classes from "./event-details.module.css";

export default function EventDetails(props) {
    const { event }  = props;
    console.log(event)
    if (!props.event) {
        return <p>Oops! this tour is no longer available! :(</p>
    }
    return (
        <div className={classes.component}>
            <img className={classes.backgroundImage} src={event.image} alt={event.title}/>
            <h1 className={classes.title}>{event.title}</h1>
            <div className={classes.details}>
                <p>{event.date}</p>
                <address>{event.location}</address>
                <p>{event.description}</p>
            </div>
        </div>
    )
}
