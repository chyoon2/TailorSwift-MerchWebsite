import React from 'react';
import MerchAdd from './MerchAdd';
import MerchShow from './MerchShow';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formVisibleOnPage: false,
      masterItemList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingItemToMerchShow = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList:newMasterItemList, 
      formVisibleOnPage: false
    });
  }

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState= <MerchAdd onMerchAdd={this.handleAddingItemToMerchShow} />
      buttonText = "Return to Shopping";
    } else {
      currentlyVisibleState = <MerchShow merchShow = {this.state.masterItemList} />
      buttonText = "Add new Item"
    }
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
 
export default MerchControl;