import styled from "styled-components";
import palatte from "../../lib/style/palatte";

const PostTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${palatte.orange[3]};
`


const PostTemplate = ({...rest}) => {
    return(
        <PostTemplateBlock {...rest}></PostTemplateBlock>
    )
}

export default PostTemplate;