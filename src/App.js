import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React from 'react';
//import Carti from './Cartitem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component{
  constructor(){
    super();      // to call the constructor of my superclass(here Component)
    this.state  =
     {
        products  :[], 
        loading : true
        //    { price : 75000,
        // title :'phone',
        // qty : 1,
        // id:1,
        // img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        //    },
        //    {price : 9999,
        //     title :'watch',
         //     qty : 6,
        //      id:2,
        //      img : "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        //     },
        //     {
        //         price : 10000,
        //         title :'laptop',
        //         qty : 4,
        //         id:3 ,
        //         img :"https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        //         }
        
    }

// this.increaseqty = this.increaseqty.bind(this);
this.db = firebase.firestore();
}

//componentDidMount() {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //  console.log(snapshot);
  
  //  snapshot.docs.map((doc)=>{
  //   console.log(doc.data());
         
  //  })
  //  const products = snapshot.docs.map((doc) =>{
  //   const data = doc.data();
  //   data['id'] = doc.id;
  //    return data;
  //  })
  //  this.setState({
  //   products : products,
  //    loading : false
  //  })
  // })
  // }
  
  componentDidMount() {
    this.db
    .collection('products')
   // .where('price', '>', 9999   )
  // .where('qty' ,  '==', 2)
 // .where('qty' , '>=', 2)   // we can write multiple where together
  //.where('price', '==' ,400 )
  //.where ('title' , '==', 'laptp' )
  .orderBy('price')             // sorting the data according to price
   .onSnapshot((snapshot) => {
     console.log(snapshot);
    
     snapshot.docs.map((doc)=>{
      console.log(doc.data());      
     })

     const products = snapshot.docs.map((doc) =>{
     const data = doc.data();
      data['id'] = doc.id;
      //return doc.data();
       return data;
     })
     this.setState({
      products : products,
       loading : false
     })
    })
    }
    
handleIncrease = (pro) =>{
console.log("please inc qty of", pro);
const {products} = this.state;
const index = products.indexOf(pro);
//products[index].qty += 1;
//this.setState({
  //  pr : products

//})

const docRef  = this.db.collection('products').doc(products[index].id);

docRef
.update({
qty : products[index].qty +1
})
.then(()=>{
  console.log('updated successfully')
})
.catch((error)=>{
  console.log('ERROR' , error)

})

}

handleDecrease = (pro) =>{
    console.log("please dec the qty of", pro);
    const {products} = this.state;
    const index = products.indexOf(pro);
      if(products[index].qty == 0){
         return;
      }
    //  products[index].qty -= 1;
    //   this.setState({
    //     pr : products
    //           })

    const docRef =  this.db.collection('products').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty -1
    })
    .then(()=>{
      console.log('updated successfully');
    })
    .catch((error)=>{
      console.log('error', error);

    })
} 

handleDelete = (id) => {
    console.log("deleting the product", id);
    // const {products} = this.state;
    // const items = products.filter((item) => item.id !== id);
    // console.log(items);
    // this.setState({
    //     products : items             
    // })
  
    const docRef=  this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('deleted successfully')
    })
    .catch((error)=>{
      console.log('error', error);
    })
  }

  getCartCount=()=>{
  const {products} = this.state;
  let count = 0 ;
  products.forEach((item) => {
    count += item.qty;
  })
  return count;
  }

  getCartTotal = () => {
    const {products} =  this.state;
    let getprice = 0;
    products.forEach((item) => {
      getprice  = getprice + (item.qty * item.price); 
    })
     return getprice;
  }

addProduct = () =>{
  this.db
  .collection('products')
  .add({
    img: 'https://m.media-amazon.com/images/I/411qVYp7v-L._SL1500_.jpg',
    price : 400,
    qty :1,
    title : 'laptop'
  })
  .then((docRef)=>{
     console.log('product has been added' ,docRef)
  })
  .catch((error)=>{
    console.log('error : ' , error);
  })
}


  render(){
    const {products , loading} = this.state;
  return (
    <div className="App">
      <Navbar count= {this.getCartCount()}
      />
        <h1 style={{textAlign:"center"}}> Cart </h1>
      <button onClick={this.addProduct} style={{ padding: 10, fontSize: 20, background:"beige", borderRadius :10}}>Add a product</button>
      <Cart
      prod={products}     // prod is a prop name here, which will be used in its children
      onIncrease = {this.handleIncrease}
      onDecrease = {this.handleDecrease} 
      onDelete = {this.handleDelete} 
      />

      {loading && <h1> Loading Products ..... </h1>}    { /*conditional rendering*/}
<div style = {{fontSize : 20 , padding:10}}> TOTAL: {this.getCartTotal()}</div>     
    </div>
  );
}
}
export default App;
