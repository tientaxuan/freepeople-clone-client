const menuItem = [
  {
    display: 'New',
    path: '/catalog/new/all',
    type: 'new',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            display: 'Shop All New',
            path: '/catalog/new/all',
          },
          {
            display: 'New Today',
            path: '/catalog/new/today',
          },
          {
            display: 'Celebrate Summer Sale',
            path: '/catalog/new/clebrate-vacation',
          },
          {
            display: 'Back In Stock',
            path: '/catalog/new/back-in-stock',
          },
          {
            display: 'Gift Cards',
            path: '/catalog/new/gift-card',
          },
          {
            display: 'New Accessories',
            path: '/catalog/new/accessory',
          },
          {
            display: 'New Activewear',
            path: '/catalog/new/activewear',
          },
          {
            display: 'New Beauty + Wellness',
            path: '/catalog/new/beauty-and-wellness',
          },
          {
            display: 'New Bottoms',
            path: '/catalog/new/bottom',
          },
          {
            display: 'New Clothes',
            path: '/catalog/new/clothes',
          },
          {
            display: 'New Dresses',
            path: '/catalog/new/dress',
          },
          {
            display: 'New Intimates',
            path: '/catalog/new/intimate',
          },
          {
            display: 'New Jackets',
            path: '/catalog/new/jacket',
          },
          {
            display: 'New Jeans',
            path: '/catalog/new/jean',
          },
          {
            display: 'New Shoes',
            path: '/catalog/new/shoe',
          },
          {
            display: 'New Sweaters',
            path: '/catalog/new/sweater',
          },
          {
            display: 'New Swim',
            path: '/catalog/new/swim',
          },
          {
            display: 'New Tops',
            path: '/catalog/new/top',
          },
          {
            display: 'New Sale',
            path: '/catalog/new/sale',
          },
        ],
      },
      {
        title: 'Shop By Collection',
        list: [
          { display: 'We The Free: Summer 22' },
          { display: 'Collection: Summer Romance' },
          { display: 'The Summer 22 Collection: Feel Free In FP' },
          { display: 'The Getaway Shop' },
          { display: 'The Suit Shop' },
          { display: 'The Festival Shop' },
          { display: 'FP X Rose Bowl' },
          { display: 'FP MART' },
          { display: 'Care FP: Sustainability Shop' },
          { display: 'FP Live: Live Stream Shopping' },
        ],
      },
      {
        title: 'Articles + Advice',
        list: [
          { display: 'Mercury Retrograde is OVER' },
          { display: 'The Epitome Of Summer Nails' },
          { display: 'All The Vitamin C Your Skin Needs' },
          { display: 'A Real Knock-Out Workout' },
        ],
      },
      {
        title: '',
        list: [],
        images: [
          {
            title: 'Shop The Collection',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/5RwtUMdemDu53Klh0bIDLJ/a914e0b6d97b4be4717dab6aa7ac972b/7.4-Supernav.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Top Rated',
    path: '/catalog/top-rated/all',
    type: 'top-rated',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            display: 'Shop All Top Rated',
            path: '/catalog/top-rated/all',
          },
          {
            display: 'Top Rated Clothes',
            path: '/catalog/top-rated/clothes',
          },
          {
            display: 'Top Rated Dresses',
            path: '/catalog/top-rated/dress',
          },
          {
            display: 'Top Rated Jeans',
            path: '/catalog/top-rated/jean',
          },
          {
            display: 'Top Rated Activewear',
            path: '/catalog/top-rated/activewear',
          },
          {
            display: 'Top Rated Shoes',
            path: '/catalog/top-rated/shoe',
          },
          {
            display: 'Top Rated Accessories',
            path: '/catalog/top-rated/accessory',
          },
          {
            display: 'Top Rated Beauty + Wellness',
            path: '/catalog/top-rated/beauty-and-wellness',
          },
        ],
      },
    ],
  },
  {
    display: 'Clothes',
    path: '/catalog/clothes/all',
    type: 'clothes',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            display: 'Shop All Clothes',
            path: '/catalog/clothes/all',
          },
          {
            path: '/catalog/clothes/new',
            display: 'New Clothes',
          },
          {
            path: '/catalog/clothes/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/clothes/back-in-stock',
            display: 'Back In Stock Clothes',
          },
          {
            path: '/catalog/clothes/activewear',
            display: 'Activewear',
          },
          {
            path: '/catalog/clothes/dress',
            display: 'Dresses',
          },
          {
            path: '/catalog/clothes/jacket',
            display: 'Jackets',
          },
          {
            path: '/catalog/clothes/jean',
            display: 'Jeans',
          },
          {
            path: '/catalog/clothes/jumpsuit',
            display: 'Jumpsuits',
          },
          {
            path: '/catalog/clothes/loungewear',
            display: 'Loungewear',
          },
          {
            path: '/catalog/clothes/pant',
            display: 'Pants',
          },
          {
            path: '/catalog/clothes/romper',
            display: 'Rompers',
          },
          {
            path: '/catalog/clothes/set',
            display: 'Sets',
          },
          {
            path: '/catalog/clothes/shot',
            display: 'Shots',
          },
          {
            path: '/catalog/clothes/skirt',
            display: 'Skirts',
          },
          {
            path: '/catalog/clothes/suit',
            display: 'Suits',
          },
          {
            path: '/catalog/clothes/sweater',
            display: 'Sweaters',
          },
          {
            path: '/catalog/clothes/swim',
            display: 'Swim',
          },
          {
            path: '/catalog/clothes/top',
            display: 'Tops',
          },
          {
            path: '/catalog/clothes/vintage',
            display: 'Vintage: FP x Rose Bowl',
          },
        ],
      },
      {
        title: 'Brands We Love',
        list: [
          { display: 'Endless Summer' },
          { display: 'For Love & Lemons' },
          { display: 'FP Beach' },
          { display: 'Levi' },
          { display: 'LoveShackFancy' },
          { display: 'Magnolia Pearl' },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/4aY5hvKdFzcmlRikDWaYUZ/3601854a1b0ff5f7a132f5f95c5df3dd/Supernav_TheGetawayShop.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/13sbZnrgmQslbAO98rhIVJ/e87df41759a869966f0b12ed536f4d47/Supernav_TheSuitShop.jpg?w=620&q=80&fm=webp',
          },
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/jtmUEGiaKpRv1bVWWgQ37/0fd39d428102b127a67188fcf9446957/Supernav_TrendWeLoveCrochet.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Dresses',
    path: '/catalog/dress/all',
    type: 'dress',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            display: 'Shop All Dresses',
            path: '/catalog/dress/all',
          },
          {
            path: '/catalog/dress/new',
            display: 'New Dresses',
          },
          {
            path: '/catalog/dress/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/dress/back-in-stock',
            display: 'Back In Stock Dresses',
          },
          {
            path: '/catalog/dress/casual',
            display: 'Casual Dresses',
          },
          {
            path: '/catalog/dress/denim',
            display: 'Denim Dresses',
          },
          {
            path: '/catalog/dress/jumpsuit',
            display: 'Jumpsuits',
          },
          {
            path: '/catalog/dress/maxi',
            display: 'Maxi Dresses',
          },
          {
            path: '/catalog/dress/midi',
            display: 'Midi Dresses',
          },
          {
            path: '/catalog/dress/mini',
            display: 'Mini Dresses',
          },
          {
            path: '/catalog/dress/party',
            display: 'Party Dresses',
          },
          {
            path: '/catalog/dress/printed',
            display: 'Printed Dresses',
          },
          {
            path: '/catalog/dress/set',
            display: 'Sets',
          },
          {
            path: '/catalog/dress/white',
            display: 'White Dresses',
          },
          {
            path: '/catalog/dress/sale',
            display: 'Sale Dressses',
          },
        ],
      },
      {
        title: 'Brands We Love',
        list: [
          { display: 'Endless Summer' },
          { display: 'For Love & Lemons' },
          { display: 'FP Beach' },
          { display: 'Magnolia Pearl' },
          { display: 'Nigel Preston' },
          { display: 'Selkie' },
          { display: 'Shona Joy' },
        ],
      },
      {
        title: 'The Best Dresses For ...',
        list: [
          { display: 'Going out' },
          { display: 'Special Occasions' },
          { display: 'Vaction' },
        ],
      },

      {
        images: [
          {
            title: 'Shirt Dresses',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/1RXL1SaMkKF8etTaHcJwV7/a0c99093a5306ca23b93c35f8e10aa14/Dresses_Supernav_Full__1_.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Activewear',
    path: '/catalog/activewear/all',
    type: 'activewear',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/activewear/all',
            display: 'Shop All Activewear',
          },
          {
            path: '/catalog/activewear/new',
            display: 'New Activewear',
          },
          {
            path: '/catalog/activewear/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/activewear/back-in-stock',
            display: 'Back In Stock Activewear',
          },
          {
            path: '/catalog/activewear/athletic',
            display: 'Athletic Shoes',
          },
          {
            path: '/catalog/activewear/bottom',
            display: 'Bottoms',
          },
          {
            path: '/catalog/activewear/hoodie-and-sweatshirt',
            display: 'Hoodies + Sweatshirts',
          },
          {
            path: '/catalog/activewear/leggin',
            display: 'Leggins',
          },
          {
            path: '/catalog/activewear/one-piece',
            display: 'One-Pieces',
          },
          {
            path: '/catalog/activewear/outerwear',
            display: 'Outerwear',
          },
          {
            path: '/catalog/activewear/short-bra',
            display: 'Shorts Bras',
          },
          {
            path: '/catalog/activewear/wellness',
            display: 'Wellness',
          },
          {
            path: '/catalog/activewear/workout-gear',
            display: 'Workout Gear',
          },
          {
            path: '/catalog/activewear/workout-set',
            display: 'Workout Sets',
          },
          {
            path: '/catalog/activewear/workout-top',
            display: 'Workout Tops',
          },
          {
            path: '/catalog/activewear/sale',
            display: 'Sale Activewear',
          },
        ],
      },
      {
        title: 'Shop Our Favorite Collections',
        list: [
          { display: 'The Way Home Collection' },
          { display: 'The Good Karma Collection' },
          { display: 'The Happiness Runs Collection' },
          { display: 'The Hit The Slopes Collection' },
          { display: 'The Hot Shot Collection' },
        ],
      },
      {
        title: 'Shop By Activity',
        list: [
          { display: 'Hike' },
          { display: 'Run' },
          { display: 'Surf' },
          { display: 'Tennis + Racket Sports' },
          { display: 'Yoga' },
        ],
      },
      {
        images: [
          {
            title: 'Run + Recover',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/28g5PeziAFYI3hjyZYQO1q/d54d39afb6c4fcc647476daaec7aee29/NEW-RUNRECOVER.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Swim',
    path: '/catalog/swim/all',
    type: 'swim',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/swim/all',
            display: 'Shop All Swim',
          },
          {
            path: '/catalog/swim/new',
            display: 'New Swim',
          },
          {
            path: '/catalog/swim/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/swim/back-in-stock',
            display: 'Back In Stock',
          },
          {
            path: '/catalog/swim/bikini-bottom',
            display: 'Bikini Bottoms',
          },
          {
            path: '/catalog/swim/bikini-top',
            display: 'Bikini Tops',
          },
          {
            path: '/catalog/swim/cover-up',
            display: 'Cover-Ups',
          },
          {
            path: '/catalog/swim/one-piece',
            display: 'One-Pieces',
          },
          {
            path: '/catalog/swim/sun-suit',
            display: 'Sun Suits',
          },
          {
            path: '/catalog/swim/surf',
            display: 'Surf',
          },
          {
            path: '/catalog/swim/under-100$',
            display: 'Under $100 Swim',
          },
          {
            path: '/catalog/swim/sale',
            display: 'Sale Swim',
          },
        ],
      },
      {
        title: 'Brand We Love',
        list: [
          { display: 'Agua Bendita' },
          { display: 'Beach Riot' },
          { display: 'Montee Swim' },
          { display: 'Rhythm' },
          { display: 'Seaa' },
          { display: 'Stone Fox Swim' },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/71kWCxw5VeNwZyMw82oWB4/f9b5d5e01b8de3da06bc2d16030ddeef/Suncare-Self-Tanning-resize.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Intimates',
    path: '/catalog/intimate/all',
    type: 'intimate',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/intimate/all',
            display: 'Shop All Intimates',
          },
          {
            path: '/catalog/intimate/new',
            display: 'New Intimates',
          },
          {
            path: '/catalog/intimate/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/intimate/back-in-stock',
            display: 'Back In Stock Intimates',
          },
          {
            path: '/catalog/intimate/body-suit',
            display: 'Body Suit',
          },
          {
            path: '/catalog/intimate/bottom',
            display: 'Bottoms',
          },
          {
            path: '/catalog/intimate/bralette',
            display: 'Bralettes',
          },
          {
            path: '/catalog/intimate/bra',
            display: 'Bras',
          },
          {
            path: '/catalog/intimate/intimate-bundle',
            display: 'Intimates Bundles',
          },
          {
            path: '/catalog/intimate/sleep-and-lounge',
            display: 'Sleep + Lounge',
          },
          {
            path: '/catalog/intimate/slip',
            display: 'Slips',
          },
          {
            path: '/catalog/intimate/top',
            display: 'Tops',
          },
          {
            path: '/catalog/intimate/underwear-set',
            display: 'Underwear Sets',
          },
          {
            path: '/catalog/intimate/undie',
            display: 'Undies',
          },
          {
            path: '/catalog/intimate/sale',
            display: 'Sale Intimates',
          },
        ],
      },
      {
        title: 'Shop By Collections',
        list: [
          { display: 'Seamless Collection' },
          { display: 'Neo Collection' },
          { display: 'Duo Collection' },
          { display: 'The Essential Collection' },
          { display: 'Basics' },
        ],
      },
      {
        images: [
          {
            title: 'Shorts Shop',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/46JPqbnt13QgCFTkVNbocP/2ae3cd710109c322564d8f9a388fd727/ShortsShop-FullSizeSuperNav.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
      {
        images: [
          {
            title: 'The Festival Shop',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/6w6OGVxD3sGe1UfPomgnNp/2ae5f18cb570757f54d6b9b441bc3401/GoodVibrations-FullSizeSupernav.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Shoes',
    path: '/catalog/shoe/all',
    type: 'shoe',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/shoe/all',
            display: 'Shop All Shoes',
          },
          {
            path: '/catalog/shoe/new',
            display: 'New Shoes',
          },
          {
            path: '/catalog/shoe/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/shoe/back-in-stock',
            display: 'Back In Stock Shoes',
          },
          {
            path: '/catalog/shoe/boot',
            display: 'Boots',
          },
          {
            path: '/catalog/shoe/clog-and-mules',
            display: 'Clogs + Mules',
          },
          {
            path: '/catalog/shoe/flat',
            display: 'Flats',
          },
          {
            path: '/catalog/shoe/platform-and-wedge-and-heel',
            display: 'Platforms, Wedges+Heels',
          },
          {
            path: '/catalog/shoe/men-swear',
            display: 'MenSwear',
          },
          {
            path: '/catalog/shoe/sandal',
            display: 'Sandals',
          },
          {
            path: '/catalog/shoe/slipper',
            display: 'Slipper',
          },
          {
            path: '/catalog/shoe/sneaker',
            display: 'Sneakers',
          },
          {
            path: '/catalog/shoe/sock-and-tight',
            display: 'Socks + Tights',
          },
          {
            path: '/catalog/shoe/sale',
            display: 'Sale Shoes',
          },
        ],
      },
      {
        title: 'Brand We Love',
        list: [
          { display: 'Birkenstock' },
          { display: 'Dr.Martens' },
          { display: 'FP Collection' },
          { display: 'We The Free Boots' },
          { display: 'HOKA' },
          { display: 'New Balance' },
          { display: 'Puma' },
          { display: 'Teva' },
          { display: 'Veja' },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/3fN5MhEsiF3uaij3YDA3hu/9b1de741fa891d28b428f92d2d5cfd3c/Supernav_Sandals.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/uUWp6PVUfWVOlmEmfepUw/ec31161e8edbbb812c8a0dac2c4de71c/Supernav_Platforms.jpg?w=620&q=80&fm=webp',
          },
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/5tBTFbgZirqof4JV40fXNn/4b6fddbd3bf819770cc6595813cfa232/Supernav_Heels.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Accessories',
    path: '/catalog/accessory/all',
    type: 'accessory',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/accessory/all',
            display: 'Shop All Accessories',
          },
          {
            path: '/catalog/accessory/new',
            display: 'New Accessories',
          },
          {
            path: '/catalog/accessory/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/accessory/back-in-stock',
            display: 'Back In Stock Accessories',
          },
          {
            path: '/catalog/accessory/bag',
            display: 'Bags',
          },
          {
            display: 'Bandanas + Scarves',
            path: '/catalog/accessory/bandana-and-scarve',
          },
          {
            path: '/catalog/accessory/belt',
            display: 'Belts',
          },
          {
            path: '/catalog/accessory/game-and-gift',
            display: 'Game + Gifts',
          },
          {
            path: '/catalog/accessory/hair',
            display: 'Hair Accessories',
          },
          {
            path: '/catalog/accessory/hat',
            display: 'Hats',
          },
          {
            path: '/catalog/accessory/jewerly',
            display: 'Jewerly',
          },
          {
            path: '/catalog/accessory/sock-and-tight',
            display: 'Socks + Tights',
          },
          {
            display: 'Sunglasses + Eyewear',
            path: '/catalog/accessory/sunglass-and-eyewear',
          },
          {
            path: '/catalog/accessory/tech-and-phone',
            display: 'Tech + Phone Accessories',
          },
          {
            path: '/catalog/accessory/sale',
            display: 'Sale Accessories',
          },
        ],
      },
      {
        title: 'Shop by Collection',
        list: [
          { display: 'Designer Jewerly' },
          { display: 'Eco-Conscious Accessories' },
          { display: 'We The Free Accessories' },
          { display: 'Outdoor Gear' },
          { display: 'Hair Jewelry' },
        ],
      },
      {
        images: [
          {
            title: 'Shop Crossbodies',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/3GwUmP4t2LmFAVQzE5yQd9/718d8c0a1e645b4f9a717088a6b0fd6f/Supernav_Acc_Bags.jpg?w=620&q=80&fm=webp',
          },
          {
            title: 'Shop Body Jewelry',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/6wP4jsmTbKq6LfioN2qXYV/db853759b485eb7cb04b1fbf8018944f/Supernav_Acc_BodyJewelry.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
      {
        images: [
          {
            title: 'Shop Baseball Hat',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/uUWp6PVUfWVOlmEmfepUw/ec31161e8edbbb812c8a0dac2c4de71c/Supernav_Platforms.jpg?w=620&q=80&fm=webp',
          },
          {
            title: 'Shop Sharong',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/QjKnda59DhsUncLGmYfQv/ee47016910894cdc9107eba38d0fd5b7/Supernav_Acc_Sarong.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Beauty + Wellness',
    path: '/catalog/beauty-and-wellness/all',
    type: 'beauty-and-wellness',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/beauty-and-wellness/all',
            display: 'Explore Beauty + Wellness',
          },
          {
            path: '/catalog/beauty-and-wellness/new',
            display: 'New Beauty + Wellness',
          },
          {
            path: '/catalog/beauty-and-wellness/top-rated',
            display: 'Top Rated',
          },
          {
            path: '/catalog/beauty-and-wellness/back-in-stock',
            display: 'Back In Stock Beauty + Wellness',
          },
          {
            path: '/catalog/beauty-and-wellness/active-essential',
            display: 'Active Essentials',
          },
          {
            path: '/catalog/beauty-and-wellness/body',
            display: 'Body',
          },
          {
            path: '/catalog/beauty-and-wellness/books-and-game',
            display: 'Books + Games',
          },
          {
            path: '/catalog/beauty-and-wellness/fragance-and-aromatherapy',
            display: 'Fragrance + Aromatherapy',
          },
          {
            path: '/catalog/beauty-and-wellness/gift-set-and-travel-size',
            display: 'Gift Sets and Travel Size',
          },
          {
            path: '/catalog/beauty-and-wellness/hair',
            display: 'Hair',
          },
          {
            path: '/catalog/beauty-and-wellness/makeup',
            display: 'Makeup',
          },
          {
            path: '/catalog/beauty-and-wellness/nail',
            display: 'Nails',
          },
          {
            path: '/catalog/beauty-and-wellness/self-love',
            display: 'Self Love',
          },
          {
            path: '/catalog/beauty-and-wellness/skincare',
            display: 'Skincare',
          },
          {
            path: '/catalog/beauty-and-wellness/suncare',
            display: 'Suncare',
          },
          {
            path: '/catalog/beauty-and-wellness/crystal',
            display: 'The Crystal Shop',
          },
          {
            path: '/catalog/beauty-and-wellness/vegan',
            display: 'Vegan Beauty',
          },
          {
            path: '/catalog/beauty-and-wellness/wellness',
            display: 'Wellness',
          },
        ],
      },
      {
        title: 'Brand We Love',
        list: [
          { display: 'COOLA' },
          { display: 'Moon Juice' },
          { display: 'Pai Skincare' },
          { display: 'RMS' },
          { display: 'Supergoop' },
          { display: 'Youth To The People' },
        ],
      },
      {
        title: 'Articles + Advice',
        list: [
          { display: 'How I Boosted My Greens Intake' },
          { display: 'Want Longer, Stronger Hair?' },
          { display: 'An Anti-Chafe Stick, But So Much More' },
          { display: 'All The Vitamin C Your Skin Needs' },
          { display: 'See More...' },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/51zkA2LLkhOvcu6hmDPrzC/8ecf4113e4c986263c2d48b2967c5ed2/MoonJuiceSkincare-Supernav.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
  {
    display: 'Sale',
    path: '/catalog/sale/all',
    type: 'sale',
    content: [
      {
        main: true,
        title: 'Shop by Category',
        list: [
          {
            path: '/catalog/sale/all',
            display: 'Shop All Sale',
          },
          {
            path: '/catalog/sale/new',
            display: 'New Sale',
          },
          {
            path: '/catalog/sale/best-of-sale',
            display: 'Best of Sale',
          },
          {
            path: '/catalog/sale/accessory',
            display: 'Sale Accessories',
          },
          {
            path: '/catalog/sale/activewear',
            display: 'Sale Activewear',
          },
          {
            path: '/catalog/sale/bottom',
            display: 'Sale Bottoms',
          },
          {
            path: '/catalog/sale/dress',
            display: 'Sale Dresses',
          },
          {
            path: '/catalog/sale/intimate',
            display: 'Sale Intimates',
          },
          {
            path: '/catalog/sale/jacket-and-outerwear',
            display: 'Sale Jackets + Outerwear',
          },
          {
            path: '/catalog/sale/shoe',
            display: 'Sale Shoes',
          },
          {
            path: '/catalog/sale/sweater',
            display: 'Sale Sweaters',
          },
          {
            path: '/catalog/sale/swim',
            display: 'Sale Swim',
          },
          {
            path: '/catalog/sale/top',
            display: 'Sale Tops',
          },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/5LcPc3Pf2ksTMsE6bpXcpU/e890a6043955db72fe14d1e6184b24cb/SuperNav_2UP_UndiesVP_COM.jpg?w=620&q=80&fm=webp',
          },
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/69z3L6HElmjIE4pQWYiFDl/91c06993a2ebe4edf7d1ea7ae8a93587/SuperNav_2UP_SocksVP_COM.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
      {
        images: [
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/1OeqfdzaHmGdMSFsDbZm6C/0d1c603c751252b7f5381650e3348380/SuperNav_2UP_ScrunchiesVP_COM.jpg?w=620&q=80&fm=webp',
          },
          {
            title: '',
            src: 'https://images.ctfassets.net/udk41sh7kfzj/5ZpO0fIPSq14J7d4JQo8Tq/c0191bd27668b652f83209cb4eca74d4/SuperNav_2UP_HairClawVP_COM.jpg?w=620&q=80&fm=webp',
          },
        ],
      },
    ],
  },
];
export default menuItem;
