import styled from "styled-components";
import {BallTriangle} from "react-loader-spinner";

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
`

const LoadingWrapper = styled.div`
    width: 50px;
    height: 50px;
    
`

const Loading = () => {
    return(
        <LoadingContainer>
            <LoadingWrapper>
                <BallTriangle 
                    type="Oval"
                    height={50}
                    width={50}
                    timeout={3000}
                    color="black"
                />
                loading....
            </LoadingWrapper>
            
        </LoadingContainer>

    )
}

export default Loading;