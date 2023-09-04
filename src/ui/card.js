import { useState } from "react";
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
import ProjectDetails from "../components/projectDetails";

const projects = [
    {
        key: 0,
        title: "All that Jazz",
        description:
            "My one-week final project from the course at Spiced Academy",
        image: allThatJazzImage,
        gif: allThatJazzGif,
        url: "https://github.com/Lia-Mead/allthatjazz",
        stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
        slug: "allthatjazz",
        prod: false,
    },
    {
        key: 1,
        title: "Epic Time",
        description:
            "A Social network for 90s lovers for contacts and some nostalgia chats",
        image: epicTimeImage,
        gif: epicTimeGif,
        url: "https://github.com/Lia-Mead/epic-time",
        stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
        slug: "epic-time",
        prod: false,
    },
    {
        key: 3,
        title: "Mureal",
        description:
            "An image oriented platform dedicated to street art and murals",
        image: murealImage,
        gif: murealGif,
        url: "https://github.com/Lia-Mead/mureal",
        stack: "Vue.js, Node.js, PostgreSQL, AWS",
        slug: "mureal",
        prod: false,
    },
    {
        key: 4,
        title: "Searchify",
        description: "Search your artists and albums with the spotify API",
        image: searchifyImage,
        gif: searchifyGif,
        url: "https://searchify-alpha.vercel.app",
        stack: "Node.js, Spotify API",
        slug: "searchify",
        prod: true,
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
        slug: "stop-the-stomp",
        prod: false,
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
        slug: "connect-four",
        prod: true,
    },
];

export const Card = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <>
            {projects.map((project) => (
                <ProductCard
                    key={project.key}
                    photos={[project.image, project.gif]}
                    title={project.title}
                    slug={project.slug}
                    description={project.description}
                    stack={project.stack}
                    buttonText="More"
                    url={project.url}
                    prod={project.prod}
                    // onClick={() => handleClick(project)}
                />
            ))}
            {selectedProject && <ProjectDetails project={selectedProject} />}
        </>
    );
};
