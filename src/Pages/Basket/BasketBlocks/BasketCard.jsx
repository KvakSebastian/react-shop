import React, {useState} from 'react';
import {  Col } from 'antd';
import {PlusOutlined,MinusOutlined
} from '@ant-design/icons';




export const BasketCard = ({el}) => {
  let [productCount,ChangeCount]= useState(0);
  let [productPrice,ChangePrice]= useState(0);
  function countPlus () {
    ChangeCount(++productCount);
  }
  function countMinus () {
    if (productPrice>0) {
    ChangeCount(--productCount);}
    else{
      ChangePrice(0);
    }
  }
  function pricePlus (){
    ChangePrice(productPrice+el.price);}
     
  function priceMinus (){
    if (productPrice>0) {
    ChangePrice(productPrice-el.price);}
    else{
      ChangePrice(0);
    }
  }
  const ChangeValuesPlus = () =>{
    countPlus();pricePlus();
  }
  const ChangeValuesMinus = () =>{
    countMinus();priceMinus();
  }

    return  (
    <Col productCount={productCount} style={{display:'flex',justifyContent:"center",alignItems:"center",margin:'20px'}}> 
    <img src={el.image} alt="" style={{width:'100px',height:'100px'}}/>
     <p style={{margin:'0 20px 0 20px'}}>{el.name}</p> 
     <div className="icons-list" style={{display:'flex'}}>
     <PlusOutlined onClick={ChangeValuesPlus} style={{margin:'0 20px 0 20px', padding:'5px', background:'#FFF'}}/> 
    <div  style={{margin:'0 5px 0 5px'}}>Кількість {productCount}</div>  
     <MinusOutlined onClick={ChangeValuesMinus} style={{margin:'0 20px 0 20px', padding:'5px', background:'#FFF'}}/>
     <div style={{margin:'0 5px 0 5px'}}>Ціна {productPrice}</div>  

  </div>
    </Col> 
  );
}



