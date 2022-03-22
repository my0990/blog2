import styled from "styled-components"
import palatte from "../../lib/style/palatte"
import Responsive from "../common/Responsive"


const BoardTemplateBlock = styled.div`
    background-color: ${palatte.orange[3]};
`
const Wrapper = styled(Responsive)`
    display: flex;
`


const BoardTemplate = ({children}) => {
    return (
        <BoardTemplateBlock>
            <Wrapper>
                {children}
            </Wrapper>
        </BoardTemplateBlock>
    )
}

export default BoardTemplate;