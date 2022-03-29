import EditorComponent from './EditorComponent'
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palatte from '../../lib/style/palatte';
import Header from '../common/Header';
import Button from '../common/Button';
import EditorButton from './EditorButton';


const Container = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${palatte.orange[2]};  
`

const Wrapper = styled(Responsive)`
    background: ${palatte.orange[1]};   
    margin-top: 2rem;
    border-radius: 20px;
    .ql-container{ 
        font-size: 1rem;
        padding: none;
    }

`

const TitleWrapper = styled.input`
    width: 100%;
    height: 3rem;
    margin: 2rem 0 0 0  ;
    border: none;
    font-size: 1.5rem;
    outline: none;
    background: ${palatte.orange[1]};
    border-bottom: 1px solid black;
    text-indent: 1rem;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`



const EditorForm = ({onChangeContent, onTitleChange, onSubmit}) => {
    return(
        <Container>
            <Header username={'test'} />
            <Wrapper>
                <TitleWrapper placeholder='제목을 입력하세요' onChange={onTitleChange}/>
                <EditorComponent onChangeContent={onChangeContent}/>
                <ButtonWrapper>
                    <EditorButton onClick={onSubmit} color={5}>등록</EditorButton>
                    <EditorButton onClick={()=>{console.log('test')}} color={3}>취소</EditorButton>
                </ButtonWrapper>
                
            </Wrapper>
            
        </Container>
    )
}

export default EditorForm;