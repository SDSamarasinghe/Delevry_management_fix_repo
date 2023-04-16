const router = require("express").Router();
let delivery = require("../models/deliveries");

//create

//http://localhost:8070/delivery/add
router.route("/add").post((req,res)=>{

   const deliveryNo = req.body.deliveryNo; 
   const status = req.body.status; 
   const currentLocation = req.body.currentLocation; 
   const deliveredDate = req.body.deliveredDate; 
   const dispatchedTime = req.body.dispatchedTime; 
   const estimatedDeliverytime = req.body.estimatedDeliverytime; 
   const summery = req.body.summery; 

   const newDelivery = new delivery({
        deliveryNo,
        status,
        currentLocation,
        deliveredDate,
        dispatchedTime,
        estimatedDeliverytime,
        summery
   })

   newDelivery.save().then(()=>{
        res.json("Successfully Delivery Details are added")
   }).catch((err)=>{
        console.log(err);
   })

})

//retrive

// router.route("/").get((req,res)=>{
//     delivery.find().exec((err,deliveries)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success: true,
//             existingDeliveries:deliveries
//         });
//     });  
// });

//http://localhost:8070/delivery/
router.route("/").get((req,res)=>{
    delivery.find().then((deliveries)=>{
        res.json(deliveries)

    }).catch((err)=>{
        console.log(err)
    })
})


//update

//http://localhost:8070/delivery/update/vttf4tf55
router.route("/update/:id").put(async (req,res)=>{
    let deliveryId = req.params.id;

    const{deliveryNo,
        status,
        currentLocation,
        deliveredDate,
        dispatchedTime,
        estimatedDeliverytime,
        summery} = req.body;

        const updateDelivery ={
            deliveryNo,
            status,
            currentLocation,
            deliveredDate,
            dispatchedTime,
            estimatedDeliverytime,
            summery
        }    
   
   const update = await delivery.findByIdAndUpdate(deliveryId,updateDelivery)
   .then(()=>{
    res.status(200).send({status: "Update delivery"});
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Update Error", error: err.message});

   })

})

//delete
//http://localhost:8070/delivery/delete/vttf4tf55
router.route("/delete/:id").delete(async(req,res)=>{
    let deliveryId = req.params.id;

    await delivery.findByIdAndDelete(deliveryId)
    .then(()=>{
    res.status(200).send({status: "delete delivery"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "delete Error", error: err.message});
    })
})


//fetch
router.route("/get/:id").get(async(req,res)=>{
    let deliveryId = req.params.id;
    
    const user = await delivery.findById(deliveryId)
    .then((delivery)=>{
    res.status(200).send({status: "fetched delivery", delivery});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "fetched Error", error: err.message});
    })
})





module.exports=router;