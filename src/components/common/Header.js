import Responsive from "./Responsive";
import styled from "styled-components";
import { useEffect, useState } from "react";
import palatte from "../../lib/style/palatte";



const HeaderBlock = styled.header`
    position: fixed;
    margin: 0 auto;
    background-color: ${palatte.orange[4]};
    height: 4rem;
    width: 100%;
`

const Wrapper = styled(Responsive)`
    height: 4rem;
    line-height: 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    background-color: ${palatte.orange[4]};
    align-items: center;


    .left{
        
    }
    .category {
        flex: 1;
        ul {
            display: flex;
            justify-content: space-evenly;
            margin: 0;
            padding: 0;
            list-style: none;
        }
        


    }
    .right{
        cursor: pointer;
    }

`
const MenuImg = styled.div`
    background-image: url("https://img.icons8.com/material-rounded/24/000000/menu--v3.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 32px;
    height: 32px;
    cursor: pointer;
    /* @keyframes ani {
        0%{
            
            opacity: 1;
        }
        25% {
            transform: rotate(45deg);
            opacity: 0;
            background-image: url("https://img.icons8.com/material-rounded/24/000000/menu--v3.png");
        }

        50% {
            transform: rotate(0);
            opacity: 0;
        }
        100%{
            
            opacity: 1;
            background-image: url("https://img.icons8.com/ios/50/000000/delete-sign--v3.png")
        }
    }
    animation: ani 1s linear forwards; */

`



const Spacer = styled.div`
    height: 4rem;
`

const Header = ({onLogout,username}) => {
    const [isMobile,setIsMobile] = useState(false);
    const [test,setTest] = useState(false)
    const resizingHandler = () => {
        if (window.innerWidth <= 1023) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(()=>{
        if (window.innerWidth <= 1023){
            setIsMobile(true)
        }
        window.addEventListener("resize", resizingHandler);
        return () => {
            window.removeEventListener("resize", resizingHandler);
        };
    }, []);
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="left"><b>{username}</b>님 환영합니다</div>
                    {!isMobile ? 
                    <>
                    <div className="category">
                        <ul>
                            <li>게시판1</li>
                            <li>게시판2</li>
                            <li>게시판3</li>
                        </ul>
                    </div>
                    <div className="right" onClick={onLogout}>로그아웃</div>
                    </> :
                     <MenuImg />
                    }
                    
                   
                    
                </Wrapper>
                
                
            </HeaderBlock>
            <Spacer />

        </>
    )
}

export default Header;