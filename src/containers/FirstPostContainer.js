// import Post,{PostBar} from "../components/post/Post";
// import PostTemplate from "../components/post/PostTemplate";
// import { firestore } from "../api/firebase_config";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getDocs, limitToLast } from "firebase/firestore";
// import { queryByTestId } from "@testing-library/react";


// const FirstPostContainer =  () => {
//     const [list,setList] = useState([])
//     const [lastDoc,setLastDoc] = useState()
    

//     useEffect(()=>{
//         firestore
//         .collection('blog')
//         .orderBy('timeStamp','desc')
//         .limit(10)
//         .get()
//         .then((collections) => {
//             const tempList = collections.docs.map((list) => list.data())
//             const tempLastDoc = collections.docs[collections.docs.length - 1];
//             setList(tempList)
//             setLastDoc(tempLastDoc)
//         })
//     },[])

//     const fetchMore = () => {
//         firestore
//         .collection('blog')
//         .orderBy("timeStamp","desc")
//         .startAfter(lastDoc)
//         .limit(10)
//         .get()
//         .then((collections)=>{
//             const tempList = collections.docs.map((list) => list.data())
//             const tempLastDoc = collections.docs[collections.docs.length - 1];
//             setList(tempList)
//             setLastDoc(tempLastDoc)
//         })
//     }


//     return(
//         <>
//         <PostTemplate onNext={fetchMore}>
//             <PostBar />
//             {list.map((a,i)=>{
//                 return(
                    
//                         <Post 
//                             username={a.username}
//                             content={a.content}
//                             date={a.date}
//                             title= {a.title}
//                             key= {i}
//                             id={a.id}/>
                    
//                 )
//             })}
//         </PostTemplate> 
        
//         </>
//     )
// }

// export default FirstPostContainer;