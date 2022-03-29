import EditorForm from "../components/editor/EditorForm"
import { changeField } from "../module/edit"
import { useDispatch, useSelector } from "react-redux"
import { firestore } from "../api/firebase_config"


//firestore 셋팅
const db = firestore.collection("blog")
// bucket.doc("bucket_item").get().then((doc)=>{
//     if(doc.exists){
//         console.log(doc.data());
//     } else {
//         console.log('nothing')
//     }
// })

const EditorContainer = () => {
    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch(
            changeField({
                form: 'content',
                value: e
            })
        )
    }
    const onTitleChange = (e) =>{
        dispatch(
            changeField({
                form: 'title',
                value: e.target.value
            })
        )
    }
    
    const title = useSelector(state => state.edit.title)
    const content = useSelector(state => state.edit.content)
    const body = useSelector(state => state.edit.content)

    const onSubmit = () => {
        const {username,uid} = JSON.parse(localStorage.getItem("user"));
        console.log(title,content)
        db.add({
            username: username,
            uid: uid,
            title: title,
            content: content,
            date: new Date
        })
    }
    return(
        <>
            <EditorForm value = {body} onChangeContent={onChange} onTitleChange={onTitleChange} onSubmit={onSubmit}/>
        </>
    )
}

export default EditorContainer;