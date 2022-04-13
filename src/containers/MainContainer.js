import LoginForm from "./LoginForm";
import MainComponent from "../components/main/MainComponent";
import PostComponent from "../components/post/PostComponent";


// 로그인 되어 있으면 메인페이지 아니면 로그인 페이지 렌더
const MainContainer = () => {
    const getUser = JSON.parse(localStorage.getItem("user"))
    let username
    let uid
    if(getUser){
        username = getUser.username
        uid = getUser.uid
    } else {
        return <LoginForm />
    }
   
    
    return(
        <>
            <MainComponent>
                <PostComponent />
                <PostComponent />
            </ MainComponent>
        </>
    )
}

export default MainContainer;