import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function MerchAdd(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleAddMerchSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='size'
          placeholder='Item Size' />
        <input
          type='text'
          name='quantity'
          placeholder='Item Qty' />
        <textarea
          type='text'
          name='description'
          placeholder='Item Desc.' />
        <input
          type='text'
          name='category'
          placeholder='Item Category' />
        <button type='submit' value='ADD ITEM' />
      </form>
    </ React.Fragment>
  );
  function handleAddMerchSubmission(event) {
    event.preventDefault();
    props.onMerchAdd({ name: event.target.name.value, size: event.target.size.value, quantity: event.target.quantity.value, description: event.target.description.value, category: event.target.category.value, id: v4() });
  }
}

MerchAdd.propTypes = {
  onMerchAdd: PropTypes.func
};


export default MerchAdd;