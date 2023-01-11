import { createContext, useState } from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBezierCurve, faEarthAmericas, faBrush, faBullhorn, faBox, faCode } from '@fortawesome/free-solid-svg-icons';

import Green from '../assets/portfolio/grow-green.jpg';
import Green2 from '../assets/portfolio/grow-green@2x.jpg';
import Guitarist from '../assets/portfolio/guitarist.jpg';
import Guitarist2 from '../assets/portfolio/guitarist@2x.jpg';
import Lady from '../assets/portfolio/lady-shutterbug.jpg';
import Lady2 from '../assets/portfolio/lady-shutterbug@2x.jpg';
import Palmeira from '../assets/portfolio/palmeira.jpg';
import Palmeira2 from '../assets/portfolio/palmeira@2x.jpg';
import Beetle from '../assets/portfolio/the-beetle.jpg';
import Beetle2 from '../assets/portfolio/the-beetle@2x.jpg';
import Woodcraft from '../assets/portfolio/woodcraft.jpg';
import Woodcraft2 from '../assets/portfolio/woodcraft@2x.jpg';

const socialInfoData = [
  { 
    title: 'Facebook',
    icon: faFacebook
  },
  { 
    title: 'Twitter',
    icon: faTwitter
  },
  { 
    title: 'Instagram',
    icon: faInstagram
  },
  { 
    title: 'Linkedin',
    icon: faLinkedin
  },
  { 
    title: 'Github',
    icon: faGithub
  }, 
]

const sideMenuLinksData = [ 'Home', 'About', 'Services', 'Works', 'Clients', 'Contact' ];

const statsData = [
  {
    value: '127',
    title: 'Awards Received'
  },
  {
    value: '1505',
    title: 'Cups of Coffee'
  },
  {
    value: '109',
    title: 'Projects Completed'
  },
  {
    value: '102',
    title: 'Happy Clients'
  }
];

const workItem = [
  {
    icon: faBrush,
    title: 'Brand Identity',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  }, 
  {
    icon: faBezierCurve,
    title: 'Illustration',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faBullhorn,
    title: 'Brand Identity',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faEarthAmericas,
    title: 'Marketing',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faBox,
    title: 'Web Design',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faCode,
    title: 'Web Development',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
];

const images = [
  {
    src: Lady,
    href: 'img/lady.jpg',
    alt: 'Lady',
    size: "560-560",
    height: '560px',
    title: 'SHUTTERBUG',
    text: 'Branding',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
  {
    src: Woodcraft,
    href: 'img/woodcraft.jpg',
    alt: 'Woodcraft',
    size: "560-700",
    height: '700px',
    title: 'WOODCRAFT',
    text: 'Web Design',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
  {
    src: Beetle,
    href: 'img/beetle.jpg',
    alt: 'Beetle',
    size: "560-560",
    height: '560px',
    title: 'PALMERIA',
    text: 'Web Design',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
  {
    src: Green,
    href: 'img/green.jpg',
    alt: 'green',
    size: "560-560",
    height: '560px',
    title: 'GROW GREEN',
    text: 'Branding',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
  {
    src: Guitarist,
    href: 'img/guitarist.jpg',
    alt: 'Guitarist',
    size: "560-700",
    height: '700px',
    title: 'GUITARIST',
    text: 'Web Design',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
  {
    src: Palmeira,
    href: 'img/palmeira.jpg',
    alt: 'Palmeira',
    size: "560-560",
    height: '560px',
    title: 'THE BEETLE',
    text: 'Web Development',
    description: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
  },
]

export const Context = createContext();

const DataProvider = ({ children }) => {

    const [ switchMenu, setSwitchMenu ] = useState(false);
    const [ socialInfo, setSocialInfo ] = useState(socialInfoData)
    const [ sideMenuLinks, setSideMenuLinks ] = useState(sideMenuLinksData)
    const [ statsInfo, setRate ] = useState(statsData);
    const [ value, setValue ] = useState(200);
    const [ workItemInfo, setWorkItemInfo ] = useState(workItem);
    const [ imagesInfo, setImagesInfo ] = useState(images);

    const onMenuToggle = () => setSwitchMenu(!switchMenu);

    const formatValue = value => value.toFixed(0);

    return (
        <Context.Provider 
          value={{ 
            switchMenu, onMenuToggle, socialInfo,
            sideMenuLinks, value, formatValue, 
            statsInfo, workItemInfo, imagesInfo 
          }}
        >
          { children }
        </Context.Provider>
      )
}

export default DataProvider