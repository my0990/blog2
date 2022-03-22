import styled from "styled-components";
import palatte from "../../lib/style/palatte";

const StyledButton = styled.button`
    width: 100%;
    background-color: ${palatte.orange[4]};
    outline: none;
    border: none;
    
    &:hover {
        cursor: pointer;
        background-color:  ${palatte.orange[5]};
    }
`

const Button = ({children}) => {
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;