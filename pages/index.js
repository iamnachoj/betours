import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../helpers/api-util";
import Head from "next/head";

export default function Index(props) {
    return (
        <>
            <Head>
                <title>Betours: tours to remember</title>
                <meta name="description" content="Find the best tours around the globe"/>
            </Head>
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
        },
        revalidate: 86400
    }
}
