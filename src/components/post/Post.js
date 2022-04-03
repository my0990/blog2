import { Link } from "react-router-dom";
import styled, {css} from "styled-components";
import palatte from "../../lib/style/palatte";

const PostWrapper = styled.div`
    height: 2rem;
    display: flex;
    text-align: center;
    .post{
        text-align: start;
        &:hover{
            color: ${palatte.orange[8]}
        }
    }
    .title {
        flex: 2;

    }
    .username{
        flex: 1;
    }
    .date{
        flex: 1;
    }
`
export const PostBar = () => {
    return(
        <PostWrapper>
            <div className="title">제목</div>
            <div className="username">작성자</div>
            <div className="date">날짜</div>
        </PostWrapper>
    )
}



const Post = ({title, username, date, id}) => {
    const url = `view?id=${id}`
    return(
        <PostWrapper>
            <div className="title post"><Link to={url}>{title}</Link></div>
            <div className="username">{username}</div>
            <div className="date">{date}</div>
        </PostWrapper>
    )
}

export default Post;