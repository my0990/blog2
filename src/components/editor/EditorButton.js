import styled from "styled-components"
import palatte from "../../lib/style/palatte"

const Wrapper = styled.div`
    margin: 0.5rem;
            
    background-color: ${props => palatte.orange[props.color]};
    outline: none;
    border: none;
    width: 8rem;
    height: 2rem;
    border-radius: 5px;
    text-align: center;
    line-height: 2rem;
    &:hover {
        cursor: pointer;
        background-color:  ${ palatte.orange[8]};
    
}
`



const EditorButton = ({ ...rest}) => {
    return(
        <>
            <Wrapper {...rest}></Wrapper>
        </>
    )
}

export default EditorButton;