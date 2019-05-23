import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

// import { create } from 'domain';
// import { resolve } from 'path';

ReactDOM.render(<App />,document.getElementById('root'))





//==========================================================PROMISE=================================================================
// new Promise((resolve,reject) => {
//     return reject(new Error('No HI'))
//     setTimeout(()=>{console.log('hi')
//     resolve();}
//     ,2000)    
// }).then(()=>  {  console.log('sid');
//     console.log('sinha');}
// ).catch(error=> console.log(error));

//-----------------------------------------------------Inheritance-----------------------------------------------------------
// class Animal {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     speak(){
//         console.log('I am',this.name,'and my age is ',this.age);
//     }
// }
// class Lion extends Animal{
//     constructor(name,age,fur,speed){
//         super(name,age);
//         this.fur=fur;
//         this.speed=speed;
//     }
//     roar(){
//         console.log('ROAR!! I AM ',this.name,"my fur color is ",this.fur,'speed is ',this.speed)
//     }
// }

// const a = new Animal('Tiger','4')
// a.speak()

// console.log(a)

// const l = new Lion('Lion','4','golden','45kph')
// l.roar();
// l.speak();

// console.log(l)