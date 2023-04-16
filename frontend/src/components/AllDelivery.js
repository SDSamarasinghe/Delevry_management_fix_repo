import axios from "axios";
import React, {useState,useEffect} from "react";



function AllDelivery(){

    const [deliveries,setdeliveries] = useState([]);


    useEffect(()=>{
        function getDelivery(){
            axios.get("http://localhost:8070/delivery/").then((res)=>{
            setdeliveries(res.data);    
            //console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
        
            })
        }
        getDelivery();
    }, [])
    return(
        <div className='container'>
        <h2>All Deliveries</h2>
        <button className="btn btn-success"> <a href ="/add" style = {{textDecoration:'none',color:'white'}}>Create New Delivery</a></button>
        <table className = "table">
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">deliveryNo</th>
              <th scope = "col">status</th>
              <th scope = "col">currentLocation</th>
              <th scope = "col">deliveredDate</th>
              <th scope = "col">dispatchedTime</th>
              <th scope = "col">estimatedDeliverytime</th>
              <th scope = "col">summery</th>
              <th scope = "col">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((deliveries,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href = {`/get/${deliveries._id}`} style = {{textDecoration:'none'}}>
                  {deliveries.deliveryNo}
                  </a>
                </td>
                <td>{deliveries.status}</td>
                <td>{deliveries.currentLocation}</td>
                <td>{deliveries.deliveredDate}</td>
                <td>{deliveries.dispatchedTime}</td>
                <td>{deliveries.estimatedDeliverytime}</td>
                <td>{deliveries.summery}</td>
                
                <td>
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#">
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

       
       
      </div>
    )
}

export default AllDelivery;