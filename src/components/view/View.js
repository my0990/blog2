import styled from "styled-components";
import palatte from "../../lib/style/palatte";
import Responsive from "../common/Responsive";
import Sanitized from "../../lib/sanitized";

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
    display: flex;
    align-items: flex-end;
`

const ViewContent = styled.div`
    min-height: 400px;
    font-size: 1.4rem;
`

const UserInfo = styled.div`
    /* flex: 1; */
    height: 60%;
    font-size: 1rem;
    line-height: 1rem;
`

const TitleInfo = styled.div`
    flex: 1;
`

const View = ({title,username,date,content}) => {

    return(
        <>
            <ViewContainer>
                    <ViewTitle> 
                        <TitleInfo>
                            {title}
                        </TitleInfo>
                        <UserInfo>
                            <div>{username}</div>
                            <div style={{textAlign:'center'}}>{date}</div>
                        </UserInfo>
                    </ViewTitle>
                <ViewWrapper>

                    <ViewContent>
                        <Sanitized html={content} />
                    </ViewContent>
                </ViewWrapper>
            </ViewContainer>
        </>
    )
}

export default View;