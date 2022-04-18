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
    z-index: 9999;
`

const Wrapper = styled(Responsive)`
    height: 4rem;
    line-height: 4rem;
    margin: 0 auto;
    // display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1rem;
    background-color: ${palatte.orange[4]};
    align-items: center;
    .left{
        float: left;
        overflow: hidden;
    }
    .right{
        float: right;
        cursor: pointer;
        &:hover{
            font-weight: bold;
            // color: red;
        }
    }

`
const MenuImg = styled.div`
    background-image: url("https://img.icons8.com/material-rounded/24/000000/menu--v3.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 32px;
    height: 32px;
    cursor: pointer;


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

    // useEffect(()=>{
    //     if (window.innerWidth <= 1023){
    //         setIsMobile(true)
    //     }
    //     window.addEventListener("resize", resizingHandler);
    //     return () => {
    //         window.removeEventListener("resize", resizingHandler);
    //     };
    // }, []);
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="left"><b>{username}</b>님</div>
                    <div className="right" onClick={onLogout}>로그아웃</div>
                </Wrapper>   
            </HeaderBlock>
            <Spacer />

        </>
    )
}

export default Header;