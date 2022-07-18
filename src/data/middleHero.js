import desktopImg from '../assets/images/middle-hero/desktopImg.jpg';
import mobileImg from '../assets/images/middle-hero/mobileImg.jpg';

export const middleHeroData = {
  path: '',
  title: 'Dress For The Summer You Want',
  intro:
    'No matter where your summer plans take you... we have the perfect outfit.',
  picture: [
    {
      img: mobileImg,
      breakpoint: '768px',
      default: false,
    },
    {
      img: desktopImg,
      default: true,
    },
  ],
};
