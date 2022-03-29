import styled from "styled-components";
import palatte from "../../lib/style/palatte";
import Responsive from "../common/Responsive";

const PostFormBlock = styled(Responsive)`
    background: ${palatte.orange[2]}
`

const PostWrapper = styled.div`
    height: 2rem;
    display: flex;
    text-align: center;
    .title-bar{
        text-align: start;
    }

    .title {
        flex: 2;
    }
    .username{
        flex: 1;
        display: none;
    }
    .date{
        flex: 1;
        display: none;
    }
`

const PostForm = () => {
    return(
        <PostFormBlock>
            <h1>게시판</h1>
            <PostWrapper>
               <div className="title">제목</div>
               <div className="username">글쓴이</div>
               <div className="date">날짜</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>
            <PostWrapper>
               <div className="title title-bar">안녕하세요</div>
               <div className="username">my0990@naver.com</div>
               <div className="date">2022/03/30</div>
            </PostWrapper>

        </PostFormBlock>
    )
}

export default PostForm;