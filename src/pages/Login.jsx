import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Login() {
    const {isAuthenticated,login,logout}= useContext(AuthContext);
  return (
    <>
    {
      isAuthenticated?
      <button onClick={()=>logout()}>Logout</button> :
      <button onClick={()=>login()}>LogIn</button>
    }
    </>
  )
}

export default Login