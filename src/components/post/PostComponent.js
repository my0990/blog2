import styled from "styled-components";
import palatte from "../../lib/style/palatte";

const PostTemplateBlock = styled.div`
    width: 100%;
    padding: 1rem;
    
    margin-top: 1rem;
    .contentBox {
        display: flex;
        height: 30rem;
        div:nth-child(1){
            flex: 3;
            background-image: url('https://source.unsplash.com/random');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        div:nth-child(2){
            flex: 1;
            background-color: ${palatte.orange[3]};
        }
    }
    .title {
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