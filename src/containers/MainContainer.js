import LoginForm from "./LoginForm";
import MainComponent from "../components/main/MainComponent";
import PostComponent from "../components/post/PostComponent";
import { useEffect, useState } from "react";
import { firestore } from "../api/firebase_config";
import fetch from "../lib/fetch";
import { Route,Routes,Navigate, useNavigate } from "react-router-dom";
import {useInView} from "react-intersection-observer";



// 로그인 되어 있으면 메인페이지 아니면 로그인 페이지 렌더
const MainContainer = () => {
    const [list,setList] = useState([])
    const [lastKey,setLastKey] = useState()
    const [loading,setLoading] = useState(false)
    const [lastDoc,setLastDoc] = useState()
    const [isLast,setIsLast] = useState(false)
    const getUser = JSON.parse(localStorage.getItem("user"))
    let username
    let uid
    const [ref,inView] = useInView();
    useEffect(()=>{
        firestore
        .collection("post")
        .limit(3)
        .get()
        .then((collections)=>{
            const tempList = collections.docs.map((list)=> list.data());
            const tempLastDoc = collections.docs[collections.docs.length -1];
            setList(tempList);
            setLastDoc(tempLastDoc);
        })
        
    
    
    },[])
    const fetchMorePosts = () => {
        
        setLoading(true);
        firestore
        .collection("post")
        .startAfter(lastDoc)
        .limit(3)
        .get()
        .then((collections)=>{
            const tempList = collections.docs.map((list) => list.data())
            const tempLastDoc = collections.docs[collections.docs.length -1];
            setList([...list,...tempList])
            setLastDoc(tempLastDoc)
            if(tempLastDoc === undefined){
                setIsLast(true)
                console.log('last arrived')
            }
        })
        console.log(list)
        
        
    }
    useEffect(() => {
        if(inView && !isLast){
            fetchMorePosts();
            console.log('test')
        } else {
            console.log('inView false')
        }
    },[inView])


    if(getUser){
        username = getUser.username
        uid = getUser.uid
    } else {
        return(
        <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        )
        
    }



    
   
    
    return(
        <>
            <MainComponent>
                {/* {list.map((a,i)=>{
                    console.log(a)
                })} */}
                {list.map((a,i)=>(
                    <div ref={ref}>
                    {list.length-1 == i ? (
                        <PostComponent 
                            title={a.title} 
                            username={a.user}
                            src={a.url}
                            text={a.content}
                            key={i} 
                            />
                    ) : (
                        <PostComponent 
                            title={a.title} 
                            username={a.user}
                            src={a.url}
                            text={a.content}
                            key={i} 
                            />
                    )}</div>
                    // return (
                    //     <PostComponent 
                    //         title={a.title} 
                    //         username={a.user}
                    //         src={a.url}
                    //         text={a.content}
                    //         key={i} />
                    // )
                ))}
                {/* <PostComponent 
                    title={"title test"} 
                    username={"my0990@naver.com"}
                    src={"https://source.unsplash.com/random"}
                    text={"text test"}/> */}
                {/* <button onClick={()=>fetchMorePosts(lastKey)}>test</button> */}
            </ MainComponent>
            
        </>
    )
}

export default MainContainer;