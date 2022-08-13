import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const handlesubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json() 
      
        if (response.status === 200){
            // Save the auth token and redirect
            localStorage.setItem('token', json.auth_token); 
            navigate('/');

        }
        else{
            alert("Invalid credentials");
        }

       
        
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='container' onSubmit={handlesubmit}   >
      <form>
  <div   className="mb-3">
    <label htmlFor="exampleInputEmail1"   className="form-label">Email address</label>
    <input type="email"  name='email' value={credentials.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={onChange}/>
    <div id="emailHelp"   className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div   className="mb-3">
    <label htmlFor="exampleInputPassword1" value={credentials.password}   className="form-label">Password</label>
    <input type="password" name='password'   className="form-control" id="exampleInputPassword1" onChange={onChange} />
  </div> 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
