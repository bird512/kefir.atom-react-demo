import Atom from 'kefir.atom';
import * as L    from "partial.lenses"
import * as R    from "ramda"
import K, * as U from "karet.util"

const products = [
  {id: 1, name: "Sinertävä lenkki 500g"},
  {id: 2, name: "Maksainen laatikko 400g"},
  {id: 3, name: "Maitoa etäisesti muistuttava juoma 0.9l"},
  {id: 4, name: "Festi moka kaffe 500g"},
  {id: 5, name: "Niin hyvä voffeli ettei saa 55g"},
  {id: 6, name: "Suklainen Japanilainen viihdyttäjä 37g"}
]

const findProd = U.staged(item => U.view([L.find(R.whereEq({id: item.id}))]));
const filterProd = U.view([L.choose((props = {}) => L.defaults({...props, count: 0})),"count"]);
export const productProvider = Atom(products);
export function addCart(item){
	const p = findProd(item,productProvider);
	const c = p.view('count');
	let count = c.get();
	if(count){
		count ++;
	}else{
		count = 1;
	}
	c.set(count);
}

export function subCart(item){
	const p = findProd(item,productProvider);
	const c = p.view('count');
	let count = c.get();
	if(count>0){
		count --;
	}else{
		count = 0;
	}
	c.set(count);
}

export function removeCart(item){
	const p = findProd(item,productProvider);
	const c = p.view('count');
	c.set(0);
}

