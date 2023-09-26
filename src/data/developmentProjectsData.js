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
import userchi1 from '../assets/images/userchi1.jpg';
import userchi2 from '../assets/images/userchi2.jpg';

export const getDevelopmentProjects = () => {
  return [
    {
      title: 'card_project_name_userchi',
      description: 'card_description_userchi',
      image1: userchi1,
      image2: userchi2,
      gif: '',
      url: 'https://youtu.be/JhcZUrs1yss?si=xBuQBkUzmPsALPYN',
      stack: 'React Native, Node.js',
      slug: 'user-chi',
      detailPageButton: 'details_button_youtube',
    },
    {
      title: 'card_project_name_jazz',
      description: 'card_description_jazz',
      image1: allThatJazzImage2,
      image2: allThatJazzImage1,
      gif: allThatJazzGif,
      url: 'https://github.com/Lia-Mead/allthatjazz',
      stack: 'React, Node.js, PostgreSQL, Socket.IO, AWS',
      slug: 'allthatjazz',
      detailPageButton: 'details_button_github',
    },
    {
      title: 'card_project_name_epic',
      description: 'card_description_epic',
      image1: epicTimeImage1,
      image2: epicTimeImage2,
      image3: epicTimeImage3,
      gif: epicTimeGif,
      url: 'https://github.com/Lia-Mead/epic-time',
      stack: 'React, Node.js, PostgreSQL, Socket.IO, AWS',
      slug: 'epic-time',
      detailPageButton: 'details_button_github',
    },
    {
      title: 'card_project_name_mureal',
      description: 'card_description_mureal',
      image1: murealImage,
      gif: murealGif,
      url: 'https://github.com/Lia-Mead/mureal',
      stack: 'Vue.js, Node.js, PostgreSQL, AWS',
      slug: 'mureal',
      detailPageButton: 'details_button_github',
    },
    {
      title: 'card_project_name_searchify',
      description: 'card_description_searchify',
      image1: searchifyImage,
      gif: searchifyGif,
      url: 'https://searchify-alpha.vercel.app',
      stack: 'Node.js, Spotify API',
      slug: 'searchify',
      detailPageButton: 'details_button_online',
    },
    {
      title: 'card_project_name_petition',
      description: 'card_description_petition',
      image1: stopImage,
      gif: stopGif,
      url: 'https://stop-the-stomp.vercel.app/',
      stack: 'Handlebars, Node.js, PostgreSQL',
      slug: 'stop-the-stomp',
      detailPageButton: 'details_button_github',
    },
    {
      title: 'card_project_connect',
      description: 'card_description_connect',
      image1: connectImage,
      gif: connectGif,
      url: 'https://connect-four-retro.vercel.app',
      stack: 'Node.js, JavaScript',
      slug: 'connect-four',
      detailPageButton: 'details_button_online',
    },
  ];
};
