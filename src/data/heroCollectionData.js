import desktopImg from '../assets/images/hero-collection/desktop-img.jpg';
import mobileImg from '../assets/images/hero-collection/mobile-img.jpg';

const heroCollectionData = {
  path: '',
  pictures: [
    {
      src: mobileImg,
      breakpoint: '768px',
    },
    {
      defautl: true,
      src: desktopImg,
      breakpoint: '1920px',
    },
  ],
};

export default heroCollectionData;
