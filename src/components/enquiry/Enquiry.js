import React from 'react'
import './Enquiry.css'
export default function Enquiry() {

    const courses= {
            Btech:["ETC","CS & IT","CSE","CSE AIML","CST","EE","EEE","ME","CIVIL","BIOTECH"],
            Other:["M.Sc(Biotechnology)","B.Sc(Appl. Microbiology)","B.Sc(Biotechnology)","BCA","BBA","M.TECH(Comp. Sc.)","MTech(ETC)","MCA","MBA"]
        }
    



    return (
        <div>
            <form >
                <div style={{display:"flex",textAlign:"center",flexDirection:"column"}}>
           <div id="header">
           <h1>Trident Group Of Institutions</h1>
             </div>
            <h3>Enquiry Form</h3>
          
        </div>

      <div className="outerdiv">
           <div className="innerdiv">
           <span> OJEE Rank <input type="text" name="ojee_rank" placeholder="Eg 258246"/></span>
           
           <span> OJEE/JEE MAIN/Other Roll No.  <input type="text" name="jee_roll" placeholder="Eg OR546543585"/></span>
           </div>
           
           <div className="innerdiv">
           <span> JEE MAIN Rank <input type="text" name="jee_rank" placeholder="Eg 258246"/></span>
           
           <span> OJEE/JEE MAIN/Other Application No.  <input type="text"  name="application_no"placeholder="Eg OR546543585"/></span>
           </div>

           <div className="innerdiv">
           <span> Other Sources <input type="text" name="other_sources" placeholder="Eg 258246"/></span>
           <span> +2Roll no <input type="text" name="+2_roll" placeholder="Eg 258246"/></span>
           
           <span>+2 School no.  <input type="text" name="+2_school_no" placeholder="Eg OR546543585"/></span>
           </div>

           <div className="innerdiv">
           <span> Aggr. % in 10th <input type="text" name="10th" placeholder="Eg 258246"/></span>
           <span> Aggr. % in 12th  <input type="text" name="12th" placeholder="Eg 258246"/></span>
           <span> Aggr. % in   <input type="text" name="13th" placeholder="Eg 258246"/></span>
           
           <span> +2 Center No. <input type="text" name="+2_center_no" placeholder="Eg OR546543585"/></span>
          
           </div>

          

            <b>Candidate Details</b><br/>
           <div className="innerdiv">
          
           <span>Name of the Candidate <input type="text" name="name" placeholder="Eg 258246"/></span>
           <span>Relationship with the Candidate<input type="text" name="relationship" placeholder="Eg 258246"/></span>
           <span> Enquired By <input type="text" name="enquird_by" placeholder="Eg OR546543585"/></span>
          
           </div>
           <div className="innerdiv">
           <span> Date Of Birth <input type="text" name="dob" placeholder="Eg 258246"/></span>
           
           <span> Aadhar No. <input type="text" name="aadhar_no" placeholder="Eg OR546543585"/></span>
           </div>
         <b>  Mobile Number  </b><br/>
           <div className="innerdiv">
          
          <span>Self<input type="text" name="mobile_self" placeholder="Eg 258246"/></span>
          <span>Father<input type="text" name="mobile_father" placeholder="Eg 258246"/></span>
          <span> Other<input type="text" name="mobile_other" placeholder="Eg OR546543585"/></span>
         
          </div>


          <b>  Address  </b><br/>
           <div className="innerdiv">
          
          <span>Address for contact<input type="text" name="address_home" placeholder="Eg 258246"/></span>
          <span>Address for OJEE counselling<input type="text" name="address_ojee"  placeholder="Eg 258246"/></span>
         
         
          </div>
          <b>Enquiry is for</b><br/>
          <div className="innerdiv">
              <span>
              <select  name="enquiry_course">
                {courses.Btech.map((el)=>(<option value={el}>{`Btech ${el}`}</option>))}
                {courses.Other.map((el)=>(<option value={el}>{el}</option>))}
              </select> 
                
              <input type="checkbox" id="le" name="le" value="LE" style={{marginRight:"-50px"}}/>
              Mark for LE

              </span>
            

          </div>

          <div>
              If Admitted,Hostel Required Or Not<br/>
            Yes
            <input type="radio" id="hostel" name="hostel" value="yes" />
            No
            <input type="radio" id="hostel" name="hostel" value="no"/>
          </div>

        <button value="submit" id="submit_btn">Submit</button>

        </div>
        </form>
        </div>
    )
}
