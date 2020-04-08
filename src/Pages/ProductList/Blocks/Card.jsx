import React, {useState} from 'react';
import {Card as CardComponent} from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Meta } = CardComponent;



export const Card = ({el}) => {
  const [isFlipped, changeFlipped] = useState(false);
  const onChangeFlipped = ()=>{
    changeFlipped(!isFlipped);
  }
    return  (

<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<CardComponent
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={el.image} style = {{height:'240px'}} />}
  onClick={onChangeFlipped}
  >
    <Meta title={el.name}  />
  </CardComponent>
 
        <CardComponent
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={el.image} style = {{height:'240px'}} />}
    onClick={onChangeFlipped}
  b >
    <Meta title={el.name}  />
  </CardComponent>
      </ReactCardFlip>

  
  );
}



