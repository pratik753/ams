import ReportValue from './Reportvalue'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css'
import {useState} from 'react'
function  MainReport()
{
   const [value,changeValue]=useState([]); 
   const arr=[{
       name:'Pratik',
       email:'pratik@gmail.com',
       select:1,
       id:1,
       status:'REGISTERED VALUE',
       number:'7979738171'
   },
   {
    name:'Aman',
    email:'aman@gmail.com',
    select:1,
    id:2,
    status:'REGISTERED VALUE',
    number:'7979738161'
},
{
    name:'Aditya',
    email:'aditya@gmail.com',
    select:2,
    id:3,
    status:'ENQUIRY VALUE',
    number:'7979736171'
},
{
    name:'Praveen',
    email:'praveen@gmail.com',
    select:2,
    id:4,
    status:'ENQUIRY VALUE',
    number:'8979738171'
},
{
    name:'Virat',
    email:'virat@gmail.com',
    select:3,
    id:5,
    status:'PAYMENT VALUE',
    number:'8079738171'
},
{
    name:'Rohit',
    email:'rohit@gmail.com',
    select:3,
    id:6,
    status:'PAYMENT VALUE',
    number:'7009738171'
},
{
    name:'Mohan',
    email:'mohan@gmail.com',
    select:1,
    id:7,
    status:'REGISTERED VALUE',
    number:'7089738171'
}
] 
   function f1()
   {
       var data=parseInt(document.getElementById("registration").value);
       const result=arr.filter(array => array.select==data);
       changeValue(result);
   }
   console.log(value);
   return (
     <div>
    <form>
        <select className="reg" id="registration">
            <option value="1">Registration list upto mobile verification</option>
            <option value="2">Registration list upto Enquiry</option>
            <option value="3">Registration list upto Payment</option>
        </select>
      <Button variant="primary" color="primary" className="button" onClick={f1}>GET REPORT</Button>
      {value.length==0&&<h1>Processing..</h1>}
      {value.length>0&&<div ><h1 style={{marginTop:'60px'}}>{value[0].status}</h1></div>}
     
     
      {value.length>0&&value.map((data)=><ReportValue name={data.name} email={data.email} number={data.number}/>)}

    </form>
    
</div>  
   )
}
export default  MainReport;