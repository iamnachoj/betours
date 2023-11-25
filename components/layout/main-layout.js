import Header from "./header";
import Footer from "./footer";
import classes from "./main-layout.module.css";

export default function Layout(props) {
    return (
        <div className={classes.layout}>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
