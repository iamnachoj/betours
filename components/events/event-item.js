import classes from './event-item.module.css';
import Button from "../ui/button";

function EventItem(props) {
    const {image, title, date, location, id} = props.item;
    const readableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n');
    const exploreLinkUrl = `/events/${id}`;

   return (
       <li className={classes.item}>
        <img src={image} alt={title} width="200px"/>
        <div className={classes.content}>
            <div>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <time>{readableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLinkUrl}>Explore Event</Button>
            </div>
        </div>
       </li>
   );
}

export default EventItem;
