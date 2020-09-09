import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.size}</h3>
      <h3>{props.quantity}</h3>
      <h3>{props.description}</h3>
      <h3>{props.category}</h3>
    </React.Fragment>
  )
}

Item.propTypes = {
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Item; 