import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css'
function ReportValue(props)
{
   return(
    <table id="customers" >
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.number}</td>
    </tr>
   </table> 
   )
}
export default ReportValue;