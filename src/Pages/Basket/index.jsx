import React from 'react';
import { Layout,Row, Col,Menu } from 'antd';
import {BasketCard} from './BasketBlocks/BasketCard'
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;


const data = [
  {
    id :1,
    name:'Кубик',
    price:500,
    image:'https://static.zrk.ua/handmade-product/big/183469/1.jpg?v=1585669448'
},

{
  id :2,
  name:'Мячик',
  price:500,
  image:'https://static.zrk.ua/handmade-product/big/183010/1.jpg?v=1585159209'
}, {
  id :3,
  name:'Зайчик',
  price:400,
  image:'https://static.zrk.ua/handmade-product/big/183006/1.jpg?v=1585157355 '
}
];
export const Basket = () => {
  const renderCards = (element) =>(
<Row>    <BasketCard el={element}/>
    
  </Row>
  )
  return (
<Layout style={styles.layoutStyle}>
      <Header>
      <Row justify="end">
      <Col><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to='/'>Головна</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/basket'><ShoppingCartOutlined /></Link></Menu.Item>
      </Menu></Col>
     
    </Row>
      </Header>
      <Content>
      <Row  style={{flexDirection:'column'}}>
        <div style={{margin:'20px'}}>
      {data.map(el=>renderCards(el))}</div>
      </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

const styles = {
    layoutStyle:{
        minHeight:'100vh'
    }
}

