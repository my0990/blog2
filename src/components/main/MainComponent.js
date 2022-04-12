import styled from "styled-components"
import palatte from "../../lib/style/palatte"
import Responsive from "../common/Responsive"


const MainTemplateBlock = styled(Responsive)`
    /* background-color: ${palatte.orange[3]}; */
    display: flex;
`



const MainComponent = ({children}) => {
    return (
        <MainTemplateBlock>
            {children}
        </MainTemplateBlock>
    )
}

export default MainComponent;