import styled from "styled-components";
import palatte from "../../lib/style/palatte";
import Responsive from "../common/Responsive";

const ViewContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 4rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 700px;
    background-color: ${palatte.orange[3]};
    
`
const ViewWrapper = styled(Responsive)`
    background-color: ${palatte.orange[2]};
    border-radius: 10px;
    
    div{
        padding: 1rem;
    }
`
const ViewTitle = styled(Responsive)`
    padding: 1rem;
    font-size: 2.5rem;
    position: relative;
`

const ViewContent = styled.div`
    min-height: 400px;
    font-size: 1.4rem;
`

const UserInfo = styled.div`
    float: right;
    height: 50%;
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    div{
        padding: 0;
        margin: 0;
        

    }
`

const View = () => {
    return(
        <>
            <ViewContainer>
                    <ViewTitle> 
                        곶감먹고싶다
                        <UserInfo>
                            <div>my0990</div>
                            <div>2022/3/22</div>
                        </UserInfo>
                    </ViewTitle>
                <ViewWrapper>

                    <ViewContent>
                        난 곶감이 먹고싶다
                        너도 곶감좋아해?
                    </ViewContent>
                </ViewWrapper>
            </ViewContainer>
        </>
    )
}

export default View;