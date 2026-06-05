import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/AuthSlice";

function Login() {  
  const dispatch=useDispatch();
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
  console.log(isAuthenticated);
    return (
    <>
    {
      isAuthenticated?
      <button onClick={()=>dispatch(logout())}>Logout</button> :
      <button onClick={()=>dispatch(login())}>LogIn</button>
    }
    </>
  )
}

export default Login