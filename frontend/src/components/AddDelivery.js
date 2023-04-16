import React,{useState} from "react"
import axios from "axios";

function AddDelivery(){

    const[deliveryNo,setdeliveryNo]= useState("");
    const[status,setstatus]= useState("");
    const[currentLocation,setcurrentLocation]= useState("");
    const[deliveredDate,setdeliveredDate]= useState("");
    const[dispatchedTime,setdispatchedTime]= useState("");
    const[estimatedDeliverytime,setestimatedDeliverytime]= useState("");
    const[summery,setsummery]= useState("");

    function sendData(e){
        e.preventDefault();
        //alert("Insert");

        const newDelivery={
            deliveryNo,
            status,
            currentLocation,
            deliveredDate,
            dispatchedTime,
            estimatedDeliverytime,
            summery
        }

        //console.log(newDelivery);
        axios.post("http://localhost:8070/delivery/add",newDelivery).then(()=>{
            alert("Create Delivery")
            
        }).catch((err)=>{
            alert(err)
        })
    }

    
    return(
        <div className="container">
        <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="deliveryNo" class="form-label">Delivery Number</label>
                <input type="text" class="form-control" id="deliveryNo" 
                onChange={(e)=>{
                    setdeliveryNo(e.target.value);
                }}></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <input type="text" class="form-control" id="status"
                onChange={(e)=>{
                    setstatus(e.target.value);
                }}></input>
            </div>

            <div class="mb-3">
                <label for="currentLocation" class="form-label">Current Location</label>
                <input type="text" class="form-control" id="currentLocation"
                onChange={(e)=>{
                    setcurrentLocation(e.target.value);
                }}></input>
            </div>

            <div class="mb-3">
                <label for="deliveredDate" class="form-label">Delivered Date</label>
                <input type="date" class="form-control" id="deliveredDate"
                onChange={(e)=>{
                    setdeliveredDate(e.target.value);
                }}></input>
            </div>

            <div class="mb-3">
                <label for="dispatchedTime" class="form-label">Dispatched Time</label>
                <input type="text" class="form-control" id="dispatchedTime"
                onChange={(e)=>{
                    setdispatchedTime(e.target.value);
                }}></input>
            </div>

            <div class="mb-3">
                <label for="estimatedDeliverytime" class="form-label">Estimated Time for Delivery</label>
                <input type="text" class="form-control" id="estimatedDeliverytime"
                onChange={(e)=>{
                    setestimatedDeliverytime(e.target.value);
                }}></input>
            </div>

            <div class="mb-3">
                <label for="summery" class="form-label">Summery</label>
                <input type="text" class="form-control" id="summery"
                onChange={(e)=>{
                    setsummery(e.target.value);
                }}></input>
            </div>
            

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
  

            <button type="reset" class="btn btn-primary">Reset</button><br/><br/> 

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>

    )
}

export default AddDelivery;