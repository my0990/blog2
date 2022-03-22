import styled from "styled-components";
import palatte from "../../lib/style/palatte";

const AuthTemplateBlock = styled.div`
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

const WhiteBox = styled.div`
    width: 320px;
    background-color: white;
    padding: 2rem;
    .logo {
        text-align: center;
    }
`

const AuthTemplate = ({children}) => {
    return(
        <AuthTemplateBlock>
            <WhiteBox>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    )
}

export default AuthTemplate;