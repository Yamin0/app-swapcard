import * as React from "react";
import {useEffect, useState} from "react";

interface ISocialNetwork {
    title: string,
    link: string,
    image: string,
}

const socialNetworks: ISocialNetwork[] = [
    {
        title: "My LinkedIn",
        link: "https://www.linkedin.com/in/delphine-godet-4250b0121/",
        image: "/images/icons/icon-linkedin.png",
    },
    {
        title: "My GitHub",
        link: "https://github.com/Yamin0",
        image: "/images/icons/icon-github.png",
    },
    {
        title: "Email me",
        link: "mailto:delphine.godet@epitech.eu",
        image: "/images/icons/icon-mail.png"
    }
];

const Footer: React.FunctionComponent = () => {
    const [scrollTop, setScrollTop] = useState(true);

    useEffect(() => {
        const onScroll = (e: Event) => setScrollTop(window.scrollX === 0 && window.scrollY === 0);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <footer>
            <div className="row footer">
                <div className="footer-section d-flex justify-content-center">
                    {
                        socialNetworks.map((s, i) =>
                            <div className="footer-elem social" key={i}>
                                <a href={s.link} target="_blank" rel="noopener noreferrer">
                                    <img src={s.image} alt={s.title}/>
                                    <span className="d-none d-sm-inline-block">
                                        {s.title}
                                    </span>
                                </a>
                            </div>
                        )
                    }
                    <div>
                        {
                            !scrollTop &&
                            <button className="btn btn-secondary btn-scroll-top" onClick={() => window.scrollTo(0, 0)}>
                                <span className="oi oi-arrow-thick-top"/>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
