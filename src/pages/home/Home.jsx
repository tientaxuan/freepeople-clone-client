import React from 'react';
import {
  productList_0,
  productList_1,
  productList_2,
  productList_3,
} from '../../data/productList';
import { catalist_0, catalist_1, catalist_2 } from '../../data/catalogList';
import {
  ThisVacation,
  HeroCollection,
  ProductList,
  CatalogList,
  MiddleHero,
  MoreToRead,
  About,
  Footer,
} from '../../components';
import aboutData from '../../data/about';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';

export const Home = () => {
  const mediumMatch = useMediaQuery(`(max-width: ${breakPoint.medium})`);
  const smallMatch = useMediaQuery(`(max-width: ${breakPoint.small})`);
  const mobileMatch = useMediaQuery(`(max-width: ${breakPoint.mobile})`);
  const slidesPerView = mobileMatch ? 2 : smallMatch ? 3 : mediumMatch ? 4 : 5;
  const slidesPerGroup = mobileMatch ? 2 : smallMatch ? 3 : mediumMatch ? 4 : 5;
  return (
    <>
      {!smallMatch && <ThisVacation />}
      <HeroCollection />
      <ProductList
        list={productList_0}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      />
      <CatalogList cataList={catalist_0} />
      <ProductList
        list={productList_1}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      />
      <MiddleHero />
      <CatalogList cataList={catalist_1} />
      <CatalogList cataList={catalist_2} />
      <ProductList
        list={productList_2}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      />
      <ProductList
        list={productList_3}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      />
      <MoreToRead />
      <About aboutData={aboutData} />
      <Footer />
    </>
  );
};
