import Header from "../components/common/Header";
import { signOutGoogle } from "../api/firebase_config";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HeaderContainer = () => {
    const navigate = useNavigate();
    const onLogout = async () => {
        await signOutGoogle().then(()=>{navigate('/login')}).then(localStorage.removeItem('user'))
    }
    const getUser = JSON.parse(localStorage.getItem("user"));
    let username;
    if(getUser){
        username = getUser.username
    }

    return(
        <>
            <Header onLogout={onLogout} username={username}/>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default HeaderContainer;