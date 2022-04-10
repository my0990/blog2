import Post,{PostBar} from "../components/post/Post";
import PostTemplate from "../components/post/PostTemplate";
import { firestore } from "../api/firebase_config";
import { useState } from "react";
import { useEffect } from "react";
import { getDocs, limitToLast } from "firebase/firestore";
import { queryByTestId } from "@testing-library/react";


const FirstPostContainer =  () => {
    const [tasks,setTasks] = useState([])
    
    

    useEffect(()=>{
        const fetchData = async () => {
            await firestore.collection('blog')
            .orderBy('timeStamp','desc')
            .limit(10)
            .onSnapshot(function(querySnapshot){
                let items = [];
                querySnapshot.forEach(function(doc){
                    items.push({
                        username: doc.data().username,
                        content: doc.data().content,
                        date: doc.data().date,
                        title: doc.data().title,
                        uid: doc.data().uid,
                        id: doc.id,
                    });
                    setTasks(items);
                })
            })
        };
        fetchData();
    },[])

    
    const pageDown = async ({item}) => {
        if(tasks.length === 0) {
            alert("Thats all we have for now!")
        } else {
            const fetchNextData = async () => {
                await firestore.collection('blog')
                .orderBy("timeStamp","desc")
                .limit(10)
                .startAfter(item.created)
                .onSnapshot(function(querySnapshot){
                    const items = [];
                    querySnapshot.forEach(function(doc){
                        items.push({
                            username: doc.data().username,
                            content: doc.data().content,
                            date: doc.data().date,
                            title: doc.data().title,
                            uid: doc.data().uid,
                            id: doc.id,
                        });
                        setTasks(items);
                    })
                })
            };
            fetchNextData();
        }
    }



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
            <button onClick={()=>{pageDown({item: tasks[tasks.length -1]})}}>test</button>
            
        </PostTemplate> 
    )
}

export default FirstPostContainer;