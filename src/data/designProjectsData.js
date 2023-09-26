import flamingoBook from '../assets/images/flamingo-bookcover.jpg';
import flamingoWeb from '../assets/images/flamingo-web.jpg';
import flamingoPhone from '../assets/images/flamingo-phone.jpg';
import flamingoStickers from '../assets/images/flamingo-stickers.jpg';
import lvComp from '../assets/images/lv-comp.jpg';
import lvIllu from '../assets/images/lv-illu.jpg';
import fcWindow from '../assets/images/fc-window.jpg';
import fcTitle from '../assets/images/fc-title.jpg';
import fcPages from '../assets/images/fc-pages.jpg';
import fcGraffiti from '../assets/images/fc-graffiti.jpg';
import fcBrowse from '../assets/images/fc-browse.jpg';
import legendaryPoster from '../assets/images/legendary-poster.jpg';
import legendaryWoods from '../assets/images/legendary-woods.jpg';
import legendaryPWolf from '../assets/images/legendary-wolf.jpg';
import legendarySegway from '../assets/images/legendary-segway.jpg';
import legendaryGrandma from '../assets/images/legendary-grandma.jpg';
import Ziegert1 from '../assets/images/ziegert1.jpg';
import Ziegert2 from '../assets/images/ziegert2.jpg';
import Ziegert3 from '../assets/images/ziegert3.jpg';
import Ziegert4 from '../assets/images/ziegert4.jpg';

export const getDesignProjects = () => {
  return [
    {
      title: 'card_project_name_ziegert',
      description: 'card_description_ziegert',
      image1: Ziegert1,
      image2: Ziegert2,
      image3: Ziegert3,
      image4: Ziegert4,
      url: '',
      stack: 'Sketch, Photoshop, React, HTML, CSS',
      slug: 'ziegert-real-estate',
      isWideCard: true,
    },
    {
      title: 'card_project_name_flamingo',
      description: 'card_description_flamingo',
      image1: flamingoBook,
      image2: flamingoWeb,
      image3: flamingoPhone,
      image4: flamingoStickers,
      url: 'https://www.behance.net/gallery/23594217/flamingo-generation',
      stack: 'InDesign, Photoshop, Illustrator',
      slug: 'flamingo-generation',
      isWideCard: true,
      // published: true,
      detailPageButton: 'details_button_behance',
    },
    {
      title: 'card_project_name_les_voyageurs',
      description: 'card_description_les',
      image1: lvComp,
      image2: lvIllu,
      url: 'https://www.behance.net/gallery/24510341/Les-Voyageurs',
      stack: 'Photoshop, Illustrator',
      slug: 'les-voyageurs',
      isWideCard: true,
      // published: true,
      detailPageButton: 'details_button_behance',
    },
    {
      title: 'card_project_name_fine_corner',
      description: 'card_description_fine',
      image1: fcWindow,
      image2: fcTitle,
      image3: fcPages,
      image4: fcGraffiti,
      image5: fcBrowse,
      url: 'https://www.behance.net/gallery/11271997/A-Fine-Corner-(Ein-schoenes-Eck)',
      stack: 'Photography, InDesign, Photoshop, Illustrator',
      slug: 'fine-corner',
      isWideCard: true,
      // published: true,
      detailPageButton: 'details_button_behance',
    },
    {
      title: 'card_project_name_simply',
      description: 'card_description_simply',
      image1: legendaryPoster,
      image2: legendaryWoods,
      image3: legendaryPWolf,
      image4: legendarySegway,
      image5: legendaryGrandma,
      url: 'https://www.behance.net/gallery/11274551/Simply-legendary',
      stack: 'Photoshop, Illustrator',
      slug: 'simply-legendary',
      isWideCard: true,
      // published: true,
      detailPageButton: 'details_button_behance',
    },
  ];
};
