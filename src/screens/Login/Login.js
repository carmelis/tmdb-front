import {useState ,React } from 'react'
import "../../styles/Login.css"
import axios from 'axios';
import { useAuthenticationData } from '../../contexts/authentication';
function Login() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setAuthenticationData} = useAuthenticationData()
  const handleUsername = (evento) => {
    setUsername(evento.target.value);
  };

  const handleEmail = (evento) => {
    setEmail(evento.target.value);
  };

  const handlePassword = (evento) => {
    setPassword(evento.target.value);
  };

const handleSubmit = (evento)=>{
  evento.preventDefault()
 // console.log(username)
 axios.post("http://localhost:3001/api/sigup", {username, email, password}).then((response)=>{
    setAuthenticationData(response.data)
  })
}

  return (
    <div class="form"> 
      <form role="form">
      <div class="form-group">
      <label for="email">Username:</label>
      <input onChange={handleUsername} type="Username:" class="form-control" id="email"></input>
    </div>
      <br></br>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input onChange={handleEmail} type="email" class="form-control" id="email"></input>
    </div>
      <br></br>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input onChange={handlePassword} type="password" class="form-control" id="pwd"></input>
      
    </div>
    <br></br>
    <button onClick={handleSubmit} type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>
  )
}

export default Login