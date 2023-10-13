import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from "../../redux/actions/actions.js";
import './card.css';

export class Card({ name, price, id }) {
   function handleDelete() {
      deleteProduct(id),
   }

   return (
      <div className="cardBg">
         <h5>{this.props.name}: </h5>
         <h5>${this.props.price}</h5>
         <button className="cardBtn" onClick={handleDelete}>
         X
         </button>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      deleteProduct: id => dispatch(deleteProduct(id)),
   };
}
export default connect(null, mapDispatchToProps)(Card);
