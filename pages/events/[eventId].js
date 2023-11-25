import { useRouter } from "next/router";
import { getEventById } from "../../data-base";
import EventDetails from "../../components/events/event-details";

export default function EventDetailsPage() {
    const router = useRouter()
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    return <EventDetails event={event}/>
}
