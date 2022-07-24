import multiColor from '../assets/images/color/multi.jpeg';

const filterData = [
  {
    name: 'productType',
    display: 'Product Type',
    list: [
      {
        value: 'Activewear Bras',
        count: 61,
      },
      {
        value: 'Activewear Jacket + Outerwear',
        count: 35,
      },
      {
        value: 'Activewear One-Pieces',
        count: 79,
      },
      {
        value: 'Activewear Pants',
        count: 93,
      },
      {
        value: 'Activewear Sets',
        count: 24,
      },
      {
        value: 'Activewear Shorts',
        count: 81,
      },
      {
        value: 'Activewear Skirts',
        count: 7,
      },
      {
        value: 'Activewear Skorts',
        count: 15,
      },
      {
        value: 'Activewear Tops',
        count: 247,
      },
      {
        value: 'Aromatherapy',
        count: 18,
      },
      {
        value: 'Bags',
        count: 55,
      },
      {
        value: 'Bath+Shower',
        count: 41,
      },
      {
        value: 'Beauty Tools',
        count: 21,
      },
      {
        value: 'Body Care',
        count: 60,
      },
      {
        value: 'Bracelets',
        count: 1,
      },
      {
        value: 'Eyewear',
        count: 14,
      },
      {
        value: 'Face Makeup',
        count: 3,
      },
      {
        value: 'Gloves',
        count: 3,
      },
      {
        value: 'Hair Accessories',
        count: 43,
      },
      {
        value: 'Hair Care',
        count: 21,
      },
      {
        value: 'Hats',
        count: 28,
      },
      {
        value: 'Jackets + Outerwear',
        count: 1,
      },
      {
        value: 'Lifestyle',
        count: 65,
      },
      {
        value: 'Lip Makeup',
        count: 4,
      },
      {
        value: 'Nails',
        count: 2,
      },
      {
        value: 'Necklaces',
        count: 1,
      },
      {
        value: 'One-Piece Swimsuits',
        count: 55,
      },
      {
        value: 'Perfume',
        count: 3,
      },
      {
        value: 'Sandals',
        count: 16,
      },
      {
        value: 'Scarves',
        count: 3,
      },
      {
        value: 'Self Love',
        count: 44,
      },
      {
        value: 'Skin Care',
        count: 153,
      },
      {
        value: 'Socks + Tights',
        count: 53,
      },
      {
        value: 'Swim Bottoms',
        count: 38,
      },
      {
        value: 'Swim Top',
        count: 40,
      },
      {
        value: 'Tech Accessories',
        count: 2,
      },
      {
        value: 'Tech Procducts',
        count: 5,
      },
      {
        value: 'Tops',
        count: 2,
      },
      {
        value: 'Vitamins + Supplements',
        count: 102,
      },
      {
        value: 'Wellness Aceessories',
        count: 170,
      },
    ],
  },
  {
    name: 'color',
    display: 'Color',
    list: [
      {
        value: 'Black',
        colorCodeDisplay: '#000000',
        count: 588,
      },
      {
        value: 'Multi',
        colorCodeDisplay: '',
        colorImgDisplay: multiColor,
        count: 553,
      },
      {
        value: 'Blue',
        colorCodeDisplay: '#3630CE',
        count: 360,
      },
      {
        value: 'White',
        colorCodeDisplay: '#FFFFFF',
        count: 337,
      },
      {
        value: 'Green',
        colorCodeDisplay: '#35A547',
        count: 273,
      },
      {
        value: 'Pink',
        colorCodeDisplay: '#FFE4E1',
        count: 267,
      },
      {
        value: 'Gray',
        colorCodeDisplay: '#949494',
        count: 214,
      },
      {
        value: 'Tan',
        colorCodeDisplay: '#DD7E2E',
        count: 152,
      },
      {
        value: 'Brown',
        colorCodeDisplay: '#A16633',
        count: 147,
      },
      {
        value: 'Red',
        colorCodeDisplay: '#FF0000',
        count: 144,
      },
      {
        value: 'Purple',
        colorCodeDisplay: '#800080',
        count: 140,
      },
      {
        value: 'Orange',
        colorCodeDisplay: '#FFB400',
        count: 108,
      },
      {
        value: 'Yellow',
        colorCodeDisplay: '#F4DD2C',
        count: 88,
      },
      {
        value: 'Silver',
        colorCodeDisplay: '#D0D0D0',
        count: 7,
      },
      {
        value: 'Gold',
        colorCodeDisplay: '#CBB946',
        count: 5,
      },
      {
        value: 'alphabet',
        colorCodeDisplay: '#FFFFFF',
        count: 1,
      },
    ],
  },
  {
    name: 'size',
    display: 'Size',
    list: [
      {
        value: 'XS',
        count: 474,
      },
      {
        value: 'XS/S',
        count: 106,
      },
      {
        value: 'S',
        count: 492,
      },
      {
        value: 'S/M',
        count: 9,
      },
      {
        value: 'M',
        count: 485,
      },
      {
        value: 'M/L',
        count: 109,
      },
      {
        value: 'L',
        count: 464,
      },
      {
        value: 'L/XL',
        count: 1,
      },
      {
        value: 'XL',
        count: 230,
      },
      {
        value: 'XXL',
        count: 1,
      },
    ],
  },
  {
    name: 'price',
    display: 'Price',
    list: [
      {
        value: '0-25',
        display: 'Less than $25',
        count: 308,
      },
      {
        value: '25-50',
        display: '$25 - $50',
        count: 519,
      },
      {
        value: '50-100',
        display: '$50 - $100',
        count: 536,
      },
      {
        value: '100-200',
        display: '$100 - $200',
        count: 349,
      },
      {
        value: '200-500',
        display: '$200 - $500',
        count: 87,
      },
      {
        value: '500-999999',
        display: 'More than $500',
        count: 4,
      },
    ],
  },
  {
    name: 'brand',
    display: 'Brand',
    list: [
      {
        value: '1809 Collection',
        count: 2,
      },
      {
        value: '3rd Ritual',
        count: 2,
      },
      {
        value: '8Greens',
        count: 3,
      },
      {
        value: 'ABRAMS The Art Of Books',
        count: 2,
      },
      {
        value: 'Abysse',
        count: 19,
      },
      {
        value: 'Acacia',
        count: 5,
      },
      {
        value: 'Act + Acre',
        count: 4,
      },
      {
        value: 'ACTIVIST',
        count: 2,
      },
      {
        value: 'Agua Bendita',
        count: 1,
      },
      {
        value: 'Alia',
        count: 1,
      },
      {
        value: 'Alia Blue',
        count: 1,
      },
      {
        value: 'Airblaster',
        count: 1,
      },
      {
        value: 'ALOHA Collection',
        count: 1,
      },
      {
        value: 'American Needle',
        count: 3,
      },
      {
        value: 'Anima Mundi',
        count: 11,
      },
      {
        value: 'Anna Sui',
        count: 3,
      },
      {
        value: 'APL',
        count: 11,
      },
      {
        value: 'Arebesk',
        count: 12,
      },
      {
        value: 'Ariana Ost',
        count: 4,
      },
      {
        value: 'Aromatherapy Associates',
        count: 2,
      },
      {
        value: 'ASICS',
        count: 3,
      },
      {
        value: 'Assouline',
        count: 2,
      },
      {
        value: 'ASYSTEM',
        count: 2,
      },
      {
        value: 'Atmosea',
        count: 9,
      },
      {
        value: 'Bala',
        count: 10,
      },
      {
        value: 'Beach Riot',
        count: 2,
      },
      {
        value: 'Bed Of Nails',
        count: 2,
      },
      {
        value: 'Bennd Yoga',
        count: 4,
      },
    ],
  },
  {
    name: 'availability',
    display: 'Availability',
    list: [
      {
        value: 'in-stock-only',
        display: 'In Stock Only',
        count: 1767,
      },
    ],
  },
];

export default filterData;
