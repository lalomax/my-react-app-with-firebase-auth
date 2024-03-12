import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
    console.log(user)

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <div className = "col-md-4 text-center">
                    <p>Welcome <em className = "text-decoration-underline">{ user.email }</em>. You are logged in!</p>
                    <img src={user.photoURL} alt="" />
                    <div className = "d-grid gap-2">
                        <button type = "submit" className = "text-white bg-violet-600 px-4 rounded-md" onClick = {(e) => logoutUser(e)}>Logout</button>
                    </div>                
                </div>
            </div>
        </div>       
    )    
}

export default Profile