import styled from "styled-components";
import palatte from "../../lib/style/palatte";
import Responsive from "../common/Responsive";

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

const PostFormBlock = styled(Responsive)`
    background: ${palatte.orange[2]}
`


const PostTemplate = ({ children, ...rest}) => {
    return(
        <PostTemplateBlock >
            <PostFormBlock  {...rest} >
                {children}
            </PostFormBlock>
        </PostTemplateBlock>
    )
}

export default PostTemplate;