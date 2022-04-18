import styled from "styled-components"
import palatte from "../../lib/style/palatte"
import Responsive from "../common/Responsive"

const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`

const MainTemplateBlock = styled(Responsive)`
    /* background-color: ${palatte.orange[3]}; */
    // display: flex;
`

const InputButton = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    // background: red;
    cursor: pointer;
    border: 2px solid #095776;
    border-radius: 100px;
    /* Mittig */
    bottom: 50px;
    right: 50px;
    &:after {
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        height: 4px;
        width: 50%;
        background: #095776;
        top: 50%;
        left: 50%;
    }
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #095776;
        height: 50%;
        width: 4px;
    }
    &:hover{
        background-color: #095776;
        transition: 0.2s;
        &:before,&:after{
            background: #fff;
            transition: 0.2s;
        }
    }
`



const MainComponent = ({children}) => {
    return (
        <Container>
            <MainTemplateBlock>
                {children}
            </MainTemplateBlock>
            <InputButton />
        </Container>
    )
}

export default MainComponent;