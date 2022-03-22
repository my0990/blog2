import AuthTemplate from "./AuthTemplate"
import styled from "styled-components"
import palatte from "../../lib/style/palatte"
import Button from "../common/Button"
import { Link } from "react-router-dom"

const AuthBlock = styled.div`
    width: 100%;
    padding: 1rem;
    div {
        text-align: center;
        color: #868e96;
    }
`

const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${palatte.orange[3]};

    &:focus {
        outline: none;
        border-bottom: 3px solid ${palatte.orange[7]}
    }
    &+&{
        margin-top: 1rem;
    }
`

const Spacer = styled.div`
    width: 100%;
    height: 1rem;
`

const AuthForm = ({type, onChange}) => {


    return (
        // <AuthTemplate>
        //     <h3 className="logo">{type}</h3>
            <AuthBlock>
                <h2>로그인</h2>
                <StyledInput onChange={onChange} name="username" placeholder="아이디" name="username"/>
                <StyledInput onChange={onChange} name="password" placeholder="비밀번호"/>
                <Spacer/>
                <footer>
                    <Button>로그인</Button>
                    <div>or</div>
                    <Link to="/register">
                        <Button>회원가입</Button>
                    </Link>
                </footer>
            </AuthBlock>

        // </AuthTemplate>
    )
}


export default AuthForm;