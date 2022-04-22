import styled from "styled-components";
import palatte from "../../lib/style/palatte";
import Sanitized from "../../lib/Sanitized";
import deleteIcon from "../../lib/images/delete.png";

const PostTemplateBlock = styled.div`
    width: 100%;
    
    background: ${palatte.orange[1]};
    border-radius: 5px;
    margin-top: 2rem;
    .title {
        border-bottom: 1px solid ${palatte.orange[0]};
        padding: 1rem;
        h1{
            margin: 0;
        }
        
    }

    .contentBox {
        text-align: center;
        
        img {
            max-height: 70vh;
            max-width: 100%;
        }
    }
    .text {
        margin-top: 1rem;
        padding: 1rem;
    }
    .deleteIcon{
        width: 2rem;
        height: 2rem;
        float: right;
        cursor: pointer;
        &:hover{
            width: 2.1rem;
            height: 2.1rem;
        }
        @media  (max-width: 768px){
            width: 1.6rem;
            height: 1.6rem;
            &:hover{
                width: 1.7rem;
                height: 1.7rem;
            }
        };
    }
`

const PostComponent = ({title,username,src,text,deleteCheck, onDelete,docId}) => {
    return(
        <PostTemplateBlock>
            <div className="title">
                <h1>
                    {title}                 
                    {deleteCheck ? <img src={deleteIcon} className="deleteIcon" onClick={()=>onDelete(docId)}></img> : null}
                    {console.log(deleteCheck)}
                </h1>

                <span>{username}</span>

            </div>
            <div className="contentBox">
                <img src={src}></img>
            </div>
            <div className="text">
                <Sanitized html={text} />
            </div>
        </PostTemplateBlock>
    )
}

export default PostComponent;