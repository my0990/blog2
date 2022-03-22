import styled from "styled-components";
import Button from "../common/Button";
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
    width: 500px;
    background-color: white;
    padding:  4rem 5rem;
    .logo {
        text-align: center;
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 2rem 3rem;
        font-size: 0.9rem;
    }
`


const StyledUl = styled.ul`
    display: flex;
    padding: 0;
    flex-direction: column;
    margin-bottom: 2rem;
    li {
        
        display: flex;
        justify-content: space-between;
        width: 100%;
        input {
            width: 12rem;
            outline: none;
            border: none;
            border-bottom: 1px solid ${palatte.orange[5]};
            &:focus {
                border-bottom: 3px solid ${palatte.orange[7]}
            }
        };
        
        padding-top: 15px;
        label {
            text-align: right;
        }
    }
    @media (max-width: 768px){
        li{
            input{
                width: 6rem;
            }
        }
    }
`




const RegisterForm = ({onChange}) => {
    const labelList =['*아이디','*비밀번호','*비밀번호확인','*이름','*이메일','좋아하는 영화','좋아하는 책']
    const nameList = ['username','password','passwordConfirm','name','email','favoriteMovie','favoriteBook']
    return(
        <AuthTemplateBlock>
            <WhiteBox>
            <h3 style={{textAlign:'center'}}>회원가입</h3>
            <StyledUl>
                {labelList.map((a,i)=>{
                    return (
                        <li>
                            <labe>{a}</labe>
                            <input name={nameList[i]} onChange={onChange} type={a === '*비밀번호' || a === '*비밀번호확인' ? 'password' : 'none'}/>
                        </li>
                    )
                })}
            </StyledUl>
            <Button>가입</Button>
            </WhiteBox>
        </AuthTemplateBlock>
    )
}

export default RegisterForm;