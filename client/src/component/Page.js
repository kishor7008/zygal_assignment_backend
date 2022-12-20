import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';
const Page = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const [cookies, setCookie] = useCookies(['user']);
  return (
    <>
      <form style={{ width: "18rem" }}>

        <div class="form-outline mb-4" >
          <input type="text" id="form2Example1" class="form-control" onChange={(e) => setData(e.target.value)} />
          <label class="form-label" for="form2Example1" onClick={()=>setCookie('Name', data, { path: '/' })}>Submit text message</label>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4">Submit(button1)</button>


        <div class="form-outline mb-4">
          <input type="text" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Search text message</label>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4">Submit(button2)</button>

        <input type="textarea" style={{ width: "18rem", height: "20vh" }} />
        <br></br>
        <button type="button" class="btn btn-primary btn-block mb-4">clear button</button>




        <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => navigate("/")}>logout(button4)</button>



      </form>
    </>
  )
}
export default Page;