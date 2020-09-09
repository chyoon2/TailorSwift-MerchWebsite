import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function MerchShow(props) {
  return (
    <React.Fragment>
      {props.merchShow.map((item, index) => (
        <Item
          name={item.name}
          size={item.size}
          quantity={item.quantity}
          description={item.description}
          category={item.category}
          key={index}                          //ask about uuid and key
        />
      ))}
    </React.Fragment>
  );
}

MerchShow.propTypes = {
  merchShow: PropTypes.array
};

export default MerchShow;