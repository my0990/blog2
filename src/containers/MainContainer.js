import LoginForm from "./LoginForm";
import MainComponent from "../components/main/MainComponent";
import PostComponent from "../components/post/PostComponent";
import { useEffect, useState } from "react";
import { firestore } from "../api/firebase_config";


// 로그인 되어 있으면 메인페이지 아니면 로그인 페이지 렌더
const MainContainer = () => {
    const [list,setList] = useState([])
    const getUser = JSON.parse(localStorage.getItem("user"))
    let username
    let uid
    useEffect(()=>{
        
        firestore
        .collection("post")
        .get()
        .then((collections)=>{
            const tempList = collections.docs.map((list)=> list.data())
            setList(tempList)
        })
        
    
    
    },[])
    if(getUser){
        username = getUser.username
        uid = getUser.uid
    } else {
        return <LoginForm />
    }

    
   
    
    return(
        <>
            <MainComponent>
                {list.map((a,i)=>{
                    console.log(a)
                })}
                {list.map((a,i)=>{
                    return (
                        <PostComponent 
                            title={a.title} 
                            username={a.user}
                            src={a.url}
                            text={a.content}/>
                    )
                })}
                {/* <PostComponent 
                    title={"title test"} 
                    username={"my0990@naver.com"}
                    src={"https://source.unsplash.com/random"}
                    text={"text test"}/> */}
            </ MainComponent>
        </>
    )
}

export default MainContainer;