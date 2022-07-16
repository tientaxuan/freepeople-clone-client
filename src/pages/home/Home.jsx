import React from 'react';
import { productList_0, productList_1 } from '../../data/productList';
import {
  ThisVacation,
  HeroCollection,
  ProductList,
  CatalogList,
} from '../../components';

export const Home = () => {
  return (
    <>
      <ThisVacation />
      <HeroCollection />
      <ProductList list={productList_0} />
      <CatalogList />
      <ProductList list={productList_1} />
    </>
  );
};
