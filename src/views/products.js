import React, { Component } from 'react';
import {fromClass} from "kefir.react.native";
import {addCart,subCart,removeCart} from '../model';
import Counter from './counter';
import Remove from './remove';

@fromClass
export default  class products extends Component {

  sub(item){
    subCart(item);
  }

  add(item){
    addCart(item);
  }

  remove(item){
    removeCart(item)
  }

  render() {
    let {dataProvider,isCart} = this.props;
    let that = this;
    if(isCart){
      dataProvider = dataProvider.filter(x=>x.count);
    }
    let items = dataProvider.map(function(item,index){
      return (
          <div key={index}>
            {isCart?<Remove remove={that.remove.bind(that,item)}/>:''}
            <Counter count={item.count} add={that.add.bind(that,item)} sub={that.sub.bind(that,item)}/>
            {item.name}
          </div>
        ) 
    })
    return (
      <div>
        {items}
      </div>
    )
  }


}

