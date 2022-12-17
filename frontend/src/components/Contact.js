import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";




function Contact() {

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const navigate = useNavigate();

    const collectData=async()=>{
        console.warn(name,phone,email,message);
        let result = await fetch("http://localhost:5000/contact",{
            method:'post',
            body:JSON.stringify({name,phone,email,message}),
            headers:{
                'content-Type':'application/json'
                
            }

        })
        result=await result.json();
        // console.warn(result);
        localStorage.setItem("contact",JSON.stringify(result))

    }
    

  return (
      <div>


        <div class='container'> 
      <h1 class='my-5'>Contact Us</h1>



   


      <form action="">
            <div class="form-floating mb-3">
                <i class="icon fa-solid fa-user-tie fa-lg"></i>
                <input type="text" class="form-control" id="floatingName" placeholder="Name"
                value={name} onChange={(e)=>setName(e.target.value)}
                />
                <label for="floatingNmame">Name</label>
            </div>

            <div class="form-floating mb-3">
                <i class="icon fa-solid fa-phone fa-lg"></i>
                <input type="text" class="form-control" id="floatingEmail" placeholder="Email"
                 value={phone} onChange={(e)=>setPhone(e.target.value)}
                />
                <label for="floatingNmame">Phone</label>
            </div>

            <div class="form-floating mb-3">
                <i class="icon fa-solid fa-envelope fa-lg"></i>
                <input type="email" class="form-control" id="floatingPhone" placeholder="Phone"
                 value={email} onChange={(e)=>setEmail(e.target.value)}
                />
                <label for="floatingNmame">email</label>
            </div>

            <div class="form-floating mb-3">
                <i class="icon-textarea fa-solid fa-message fa-lg"></i>
                <textarea class="form-control" placeholder="Leave a Message Here" id="floatingTextArea" 
                style={{height: "100px"}}
                value={message} onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
                <label for="floatingTextArea">Message</label>
            </div>

            <div>
                <button type="button" class="btn btn-outline-dark mb-5"
                onClick={collectData}>
                    Submit
                    </button>
            </div>


           
            </form>

       
      </div>

    </div>
  )
}

export default Contact
