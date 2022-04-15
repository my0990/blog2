import EditorForm from "../components/editor/EditorForm";
import { changeField } from "../module/edit";
import { useDispatch, useSelector } from "react-redux";
import { firestore, storage } from "../api/firebase_config";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';


//firestore 셋팅
const db = firestore.collection("post")
// bucket.doc("bucket_item").get().then((doc)=>{
//     if(doc.exists){
//         console.log(doc.data());
//     } else {
//         console.log('nothing')
//     }
// })

const EditorContainer = () => {
    const [file,setFile] = useState();
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
    const navigate = useNavigate();
    const onSubmit = () => {
        const {username,uid} = JSON.parse(localStorage.getItem("user"));
        console.log(title,content)
        let date = new Date()

        if(file){
            const storageRef = storage.ref();
            const path = storageRef.child('image/'+file.name);
            const upload = path.put(file)
    
            // 이미지 업로드
            upload.on('state_changed',
            null,
            (error) => {
                console.error('실패사유는', error);
            },
            () => {
                upload.snapshot.ref.getDownloadURL().then((url)=>{
                    db.add({
                        user: username,
                        uid: uid,
                        title: title,
                        content: content,
                        date: date.getFullYear() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getDate(),
                        timeStamp: date,
                        url: url
                    }).then(alert('저장되었습니다.')).then((doc)=>navigate('/firstPostPage/view?id=' + doc.id,{replace: true}))
                })
            })} else {
                db.add({
                    user: username,
                    uid: uid,
                    title: title,
                    content: content,
                    date: date.getFullYear() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getDate(),
                    timeStamp: date,
                    
                }).then(alert('저장되었습니다.')).then((doc)=>navigate('/firstPostPage/view?id=' + doc.id,{replace: true}))
            }
        


    }
    const fileChangeHandler = (e) => {
        const tempFile = e.target.files[0]
        setFile(tempFile)
        console.log(tempFile)

    }
    
    return(
        <>
            <EditorForm value = {body} onChangeContent={onChange} onTitleChange={onTitleChange} onSubmit={onSubmit} fileChangeHandler={fileChangeHandler}/>
        </>
    )
}

export default EditorContainer;