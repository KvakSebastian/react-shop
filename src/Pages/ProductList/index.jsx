import React from 'react';
import { Layout,Row, Col} from 'antd';
import {Card} from './Blocks/Card'

const { Header, Footer, Content } = Layout;


const data = [
  {
    id :1,
    name:'Кубик',
    image:'https://static.zrk.ua/handmade-product/big/183469/1.jpg?v=1585669448'
},
{
  id :2,
  name:'Мячик',
  image:'https://static.zrk.ua/handmade-product/big/183010/1.jpg?v=1585159209'
}, {
  id :3,
  name:'Зайчик',
  image:'https://static.zrk.ua/handmade-product/big/183006/1.jpg?v=1585157355 '
}
];
export const ProductList = () => {
  const renderCards = (element) =>(
    <Col span={4}>
    <Card el={element}/>
    
  </Col>
  )
  return (
<Layout style={styles.layoutStyle}>
      <Header>Header</Header>
      <Content>
      <Row justify="space-around">
      {data.map(el=>renderCards(el))}
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

