import ProductCard from "../components/ProductCard/productCard";
// import { ProductCard } from "react-ui-cards";

import epicTimeImage from "../assets/images/epic-time.jpg";
import epicTimeGif from "../assets/images/epic-time.gif";
import allThatJazzImage from "../assets/images/allthatjazz.jpg";
import allThatJazzGif from "../assets/images/allthatjazz.gif";
import stopImage from "../assets/images/stop.jpg";
import stopGif from "../assets/images/stop.gif";
import murealImage from "../assets/images/mureal.jpg";
import murealGif from "../assets/images/mureal.gif";
import searchifyImage from "../assets/images/searchify.jpg";
import searchifyGif from "../assets/images/searchify.gif";
import connectImage from "../assets/images/connect-four.jpg";
import connectGif from "../assets/images/connect-four.gif";

const projects = [
    {
        key: 0,
        title: "All that Jazz",
        description:
            "My one-week final project from the course at Spiced Academy",
        image: allThatJazzImage,
        gif: allThatJazzGif,
        url: "https://allthatjazz.vercel.app/",
        stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
    },
    {
        key: 1,
        title: "Epic Time",
        description:
            "A Social network for 90s lovers for contacts and some nostalgia chats",
        image: epicTimeImage,
        gif: epicTimeGif,
        url: "https://epic-time.herokuapp.com/",
        stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
    },
    {
        key: 3,
        title: "Mureal",
        description:
            "An image oriented platform dedicated to street art and murals",
        image: murealImage,
        gif: murealGif,
        url: "https://mureal.herokuapp.com/",
        stack: "Vue.js, Node.js, PostgreSQL, AWS",
    },
    {
        key: 4,
        title: "Searchify",
        description: "Search your artists and albums with the spotify API",
        image: searchifyImage,
        gif: searchifyGif,
        url: "https://searchify-alpha.vercel.app",
        stack: "Node.js, Spotify API",
    },
    {
        key: 2,
        title: "Stop the Stomp",
        description:
            "Petition project for collecting e-signatures against stomping neighbors",
        image: stopImage,
        gif: stopGif,
        url: "https://stop-the-stomp.vercel.app/",
        stack: "Handlebars, Node.js, PostgreSQL",
    },
    {
        key: 5,
        title: "Connect Four",
        description:
            "Connect Four game retro style. Match four diagonal avatars and win the round",
        image: connectImage,
        gif: connectGif,
        url: "https://connect-four-retro.vercel.app",
        stack: "Node.js, JavaScript",
    },
];

export const Card = () =>
    projects.map((proj) => (
        <ProductCard
            key={proj.key}
            photos={[proj.image, proj.gif]}
            productName={proj.title}
            description={proj.description}
            buttonText="Go"
            url={proj.url}
        />
    ));
