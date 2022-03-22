import styled from "styled-components";
import Responsive from "../common/Responsive"

const BoardFormBlock = styled.div`
    width: 50%;
    padding: 2rem;
`

const BoardForm = ({title}) => {
    return(
        <BoardFormBlock>
            <h3>{title}</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </BoardFormBlock>
    )
}

export default BoardForm;