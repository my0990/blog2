import View from "../components/view/View";
import { firestore } from "../api/firebase_config";
import { useState } from "react";



const ViewContainer = () => {
    const queryString = new URLSearchParams(window.location.search)
    const id = queryString.get('id')
    const db = firestore.collection("blog")
    const [data,setData] = useState({})
    db.doc(id).get().then((doc)=>{
        setData({
            title: doc.data().title,
            username: doc.data().username,
            date: doc.data().date,
            content: doc.data().content
        })
    })

    return(
        <>
         <View title={data.title} username={data.username} date={data.date} content={data.content}/>
         {/* <button onClick={()=>{console.log(data.title)}}>tset</button> */}
        </>
    )
}

export default ViewContainer;