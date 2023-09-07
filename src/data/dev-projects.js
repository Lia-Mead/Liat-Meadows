import epicTimeImage1 from '../assets/images/epic-time.jpg';
import epicTimeImage2 from '../assets/images/epic1.png';
import epicTimeImage3 from '../assets/images/epic2.png';
import epicTimeGif from '../assets/images/epic-time.gif';
import allThatJazzImage1 from '../assets/images/allthatjazz1.png';
import allThatJazzImage2 from '../assets/images/allthatjazz2.jpg';
import allThatJazzGif from '../assets/images/allthatjazz.gif';
import stopImage from '../assets/images/stop.jpg';
import stopGif from '../assets/images/stop.gif';
import murealImage from '../assets/images/mureal.jpg';
import murealGif from '../assets/images/mureal.gif';
import searchifyImage from '../assets/images/searchify.jpg';
import searchifyGif from '../assets/images/searchify.gif';
import connectImage from '../assets/images/connect-four.jpg';
import connectGif from '../assets/images/connect-four.gif';
import chargingProcessGif from '../assets/images/incar-charging.gif';
import chargingProcessMp from '../assets/images/incar-charging.mp4';
import userchi1 from '../assets/images/userchi1.jpg';
import userchi2 from '../assets/images/userchi2.jpg';
import incarImage1 from '../assets/images/incar1.png';
import incarImage2 from '../assets/images/incar4.png';
import incarImage3 from '../assets/images/incar6.png';
import incarImage4 from '../assets/images/incar12.png';

export const devProjects = [
  {
    title: 'USER-CHI',
    description:
      'Frontend for a react native app for charging electric vehicles, as a part of my work at VMZ Berlin',
    image1: userchi1,
    image2: userchi2,
    gif: '',
    url: 'https://youtu.be/JhcZUrs1yss?si=xBuQBkUzmPsALPYN',
    stack: 'React Native, Node.js',
    slug: 'user-chi',
    published: true,
  },
  {
    title: 'All that Jazz',
    description: 'My one-week final project from the course at Spiced Academy',
    image1: allThatJazzImage2,
    image2: allThatJazzImage1,
    gif: allThatJazzGif,
    url: 'https://github.com/Lia-Mead/allthatjazz',
    stack: 'React, Node.js, PostgreSQL, Socket.IO, AWS',
    slug: 'allthatjazz',
    published: false,
  },
  {
    title: 'Epic Time',
    description:
      'A Social network for 90s lovers for contacts and some nostalgia chats',
    image1: epicTimeImage1,
    image2: epicTimeImage2,
    image3: epicTimeImage3,
    gif: epicTimeGif,
    url: 'https://github.com/Lia-Mead/epic-time',
    stack: 'React, Node.js, PostgreSQL, Socket.IO, AWS',
    slug: 'epic-time',
    published: false,
  },
  {
    title: 'Mureal',
    description:
      'An image oriented platform dedicated to street art and murals',
    image1: murealImage,
    gif: murealGif,
    url: 'https://github.com/Lia-Mead/mureal',
    stack: 'Vue.js, Node.js, PostgreSQL, AWS',
    slug: 'mureal',
    published: false,
  },
  {
    title: 'Searchify',
    description: 'Search your artists and albums with the spotify API',
    image1: searchifyImage,
    gif: searchifyGif,
    url: 'https://searchify-alpha.vercel.app',
    stack: 'Node.js, Spotify API',
    slug: 'searchify',
    published: true,
  },
  {
    title: 'Stop the Stomp',
    description:
      'Petition project for collecting e-signatures against stomping neighbors',
    image1: stopImage,
    gif: stopGif,
    url: 'https://stop-the-stomp.vercel.app/',
    stack: 'Handlebars, Node.js, PostgreSQL',
    slug: 'stop-the-stomp',
    published: false,
  },
  {
    title: 'Connect Four',
    description:
      'Connect Four game retro style. Match four diagonal avatars and win the round',
    image1: connectImage,
    gif: connectGif,
    url: 'https://connect-four-retro.vercel.app',
    stack: 'Node.js, JavaScript',
    slug: 'connect-four',
    published: true,
  },
];
