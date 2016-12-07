import 'babel-polyfill'   
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {fromClass} from "kefir.react.native"
import Products from '../views/products';
import {productProvider} from '../model';

let render = () => {
  ReactDOM.render(
    <div>
      <h1>Karet (toy) Shopping Cart example</h1>
      <a href="https://github.com/bird512/kefir.atom-react-demo">GitHub</a>
      <div className="panels">
        <div className="panel">
          <h2>Products</h2>
          <Products dataProvider={productProvider}/>
        </div>
        <div className="panel">
          <h2>Shopping Cart</h2>
          <Products dataProvider={productProvider} isCart={true}/>
        </div>
      </div>
    </div>
  , document.getElementById('root'));
};

render();
