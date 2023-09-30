import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import Layout from './component/Layout/Layout';
import Slider from './component/Slider/Slider';
import ProductCategory from './component/ProductCategory/ProductCategory';
import Addresses from './component/Addresses/Addresses';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout />
      <Slider />
      <ProductCategory />
      <h1>Новинки</h1>
      <hr />
      <Slider />
      <Addresses />
      <hr />
      <GlobalStyle />
      <Footer />
    </div>
  );
}

export default App;
