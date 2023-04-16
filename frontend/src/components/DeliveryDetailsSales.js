import axios from "axios";
import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function DeliveryDetailsSales(){

    const [delivery,setdelivery] = useState([]);
    const { id } =useParams();

    useEffect(()=>{
        async function getDeliveryData(){

            axios.get(`http://localhost:8070/delivery/get/${id}`).then((res)=>{
            setdelivery(res.data);    
            console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
        
            })
        }
        getDeliveryData();
    }, [id])

    return(
        <div className='container'>
        
        <h1>Delivery Number:{delivery.deliveryNo}</h1>
        <p>status: {delivery.status}</p>
        <p>currentLocation: {delivery.currentLocation}</p>
        <p>deliveredDate: {delivery.deliveredDate}</p>
        <p>dispatchedTime: {delivery.dispatchedTime}</p>
        <p>estimatedDeliverytime: {delivery.estimatedDeliverytime}</p>
        <p>summery: {delivery.summery}</p>
        
      </div>
    )
}

export default DeliveryDetailsSales;





// import React,{Componenet} from 'react';

// class DeliveryDetailsSales extends React.Component {
//     constructor(props){
//         super(props);
        
//         this.state= {
//             delivery:{}
//         };
//     }

//     componentDidMount(){

//         const id = this.props.match.params.id;

//         axios.get(`/get/${id}`).then((res)=>{
//         //setdelivery(res.data);    
//         console.log(res.data);
//         }).catch((err)=>{
//             alert(err.message);
    
//         })
//     }


//     render(){
//         return(
//             <div>
//                 <h3>Deliveries</h3>
//             </div>
//         )
//     }
// }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DeliveryDetailsSales({ id }) {
//     const [delivery,setdelivery] = useState([]);
//   //const [data, setData] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(`http://localhost:8070/delivery/get/${id}`);
//       setdelivery(response.data);
//     }
//     fetchData();
//   }, [id]);

//   return (
//     <div>
//         <h1>Delivery Number:{delivery.deliveryNo}</h1>
//         <p>status: {delivery.status}</p>
//          <p>currentLocation: {delivery.currentLocation}</p>
//         <p>deliveredDate: {delivery.deliveredDate}</p>
//        <p>dispatchedTime: {delivery.dispatchedTime}</p>
//          <p>estimatedDeliverytime: {delivery.estimatedDeliverytime}</p>
//         <p>summery: {delivery.summery}</p>


      
//     </div>
//   );
// }

// export default DeliveryDetailsSales;
