import Post,{PostBar} from "../components/post/Post";
import PostTemplate from "../components/post/PostTemplate";
import { firestore } from "../api/firebase_config";
import { useState } from "react";
import { useEffect } from "react";


const FirstPostContainer = () => {
    const [tasks,setTasks] = useState([])
    const db = firestore.collection("blog").orderBy("timeStamp","desc")
    const fetchData = ()=>{
        let tasksData = [];

        db.get().then((docs)=>{
            docs.forEach((doc) => {
                // let data = doc.data()
                tasksData.push({
                    username: doc.data().username,
                    content: doc.data().content,
                    date: doc.data().date,
                    title: doc.data().title,
                    uid: doc.data().uid,
                    id: doc.id,
                });
            });
            setTasks((prevTasks) => prevTasks.concat(tasksData))
        })
    }
    useEffect(()=>{
        fetchData()
    },[])


    return(
        <PostTemplate>
            <PostBar />

            {tasks.map((a,i)=>{
                return(
                    <Post 
                        username={a.username}
                        content={a.content}
                        date={a.date}
                        title= {a.title}
                        key= {i}
                        id={a.id}/>
                )
            })}
        </PostTemplate> 
    )
}

export default FirstPostContainer;