import React from 'react';
import { Col, Button } from 'reactstrap';

const Item = (props, i) => (
    <Col md="12" id={props.id}>
      <div className="item-content mb-3 p-2">
        <div className="image-content">
         <div className="image" style={ { backgroundImage: 'url(' + props.imagenUrl + ')' } }></div>
        </div>
        <div className="caption">
           <h2 className="title">{props.title}</h2>
           <div className="block-stars"><div className="stars" data-star={props.stars} style={ {width: 'calc('+ props.stars + '0 * 2%)'} }></div></div>
           <div className="icons-amenities">
             { props.icons.map(f => <i className={f}></i>) }
           </div>
        </div>
        <div className="details">
          <p className="description mb-2">Precio por noche por habitaci&oacute;n</p>
          <div className="price mb-2"><span className="currency">Ars</span>{props.price}</div>
          <Button color="primary" className="btn-block">Ver hotel</Button>
        </div>
        <div className="clear"></div>
      </div>
    </Col>);

export default Item;
