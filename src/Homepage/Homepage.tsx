import React, { FunctionComponent } from "react";
import styles from './Homepage.module.scss';
import { NewsArticles } from "../News Articles/NewsArticles";
import { Link } from "react-router-dom";
import { Mars } from "../InteractiveMars/Mars";

export const Home: FunctionComponent = () => {
    return (
        <div className={styles.homepage}>
            <Link to="/rover_explorer" className={styles.marsbutton}> ENTER MARS</Link>
            <Mars />
            <NewsArticles />
            <footer className={styles.Footer}>
                <div className={styles.ImageParent}>
                    {/* eslint-disable-next-line */}
                    <a href="#top" className={styles.ImageTop} aria-label="Scroll to Top"></a>
                    {/* eslint-disable-next-line */}
                    <a href="#bottom" className={styles.ImageBottom} aria-label="Jump to Bottom" ></a>
                </div>
            </footer>
            <div id="bottom"></div>
        </div>
    );
}