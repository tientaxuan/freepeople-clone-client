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

export const Home = () => {
  return (
    <>
      <ThisVacation />
      <HeroCollection />
      <ProductList list={productList_0} />
      <CatalogList cataList={catalist_0} />
      <ProductList list={productList_1} />
      <MiddleHero />
      <CatalogList cataList={catalist_1} />
      <CatalogList cataList={catalist_2} />
      <ProductList list={productList_2} />
      <ProductList list={productList_3} />
      <MoreToRead />
      <About aboutData={aboutData} />
      <Footer />
    </>
  );
};
