import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DeliveryDetailsSales extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deliveryNo: "",
      status: "",
      currentLocation: "",
      deliveredDate: "",
      dispatchedTime: "",
      estimatedDeliverytime: "",
      summery: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  componentDidMount() {
    const {
      deliveryNo,
      status,
      currentLocation,
      deliveredDate,
      dispatchedTime,
      estimatedDeliverytime,
      summery,
    } = this.props.params;

    this.setState({
      deliveryNo: deliveryNo,
      status: status,
      currentLocation: currentLocation,
      deliveredDate: deliveredDate,
      dispatchedTime: dispatchedTime,
      estimatedDeliverytime: estimatedDeliverytime,
      summery: summery,
    });
  }



render() {
    return (
    <div style={{marginTop: '20px'}}>
      <p>DeliveryNo</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.deliveryNo}</p>
     <p>status</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.status}</p>
     <p>currentLocation</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.currentLocation}</p>
     <p>deliveredDate</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.deliveredDate}</p>
     <p>dispatchedTime</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.dispatchedTime}</p>
     <p>estimatedDeliverytime</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.estimatedDeliverytime}</p>
     <p>summery</p>
      <br/>
     <p style={{marginLeft:"125px", width:"70rem"}}>{this.state.summery}</p>
</div>
  )
}
}
export default withParams(DeliveryDetailsSales);