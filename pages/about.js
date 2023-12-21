import Button from "../components/atoms/button";

export default function About() {
    return (
        <article style={classes.about}>
            <h1>Hey <b>Unique Traveller</b>!</h1>
            <div style={classes.text}>
                <p>Congratulations on snagging an invite to this exclusive, secret space dedicated to real
                    adventurers!</p>
                <p>Whether you're a geography fanatic, history lover, language enthusiast, or a science and nature buff,
                    this is your ultimate destination!</p>
                <p>Our community of <b>Unique Travellers</b> from across the globe is gearing up to share their most
                    incredible experiences just for you!</p>
                <p>We're here to ignite your inspiration and curiosity.</p>
                <p>Explore a curated list of unique events and don't forget to contribute to the community by sharing
                    your
                    own extraordinary experiences!</p>
                <p>As the great explorer Ibn Battuta once said, <i>"Traveling—it leaves you speechless, then turns you
                    into a storyteller."</i></p>
                <br/>
            </div>
            <Button link="/events">
                Start exploring
            </Button>
        </article>

    )
}

const classes = {
    about: {
        margin: '1rem',
    },
    text: {
        fontSize: '1.2rem'
    }
}
