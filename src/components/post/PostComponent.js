import styled from "styled-components";
import palatte from "../../lib/style/palatte";

const PostTemplateBlock = styled.div`
    width: 100%;
    padding: 1rem;
    background: ${palatte.orange[1]};
    border-radius: 5px;
    margin-top: 2rem;
    

    .contentBox {
        
        
        div:nth-child(1){
            width: 100%;
            height: 30rem;
            background-image: url('https://source.unsplash.com/random');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin: 1rem 0;
        }
        div:nth-child(2){
            

        }
    }
    .title {
        border-bottom: 1px solid gray;
        h1{
            margin: 0;
        }
        
    }
`

const PostComponent = () => {
    return(
        <PostTemplateBlock>
            <div className="title">
                <h1>titles</h1>
            </div>
            <div className="contentBox">
                <div />
                <div>
                    되는건가요
                </div>
            </div>
        </PostTemplateBlock>
    )
}

export default PostComponent;