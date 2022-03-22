import { useState } from "react";
import styled from "styled-components";


const Block = styled.div`
    width: 32px;
    height: 32px;
    background-color: red;
    animation: ani 1s ease-out forwards;
    background-image: url("https://img.icons8.com/ios/50/000000/delete-sign--v3.png");
    /* background-image: url("https://img.icons8.com/material-rounded/24/000000/menu--v3.png"); */
    background-repeat: no-repeat;
    cursor: pointer;
    
    .test {
        animation: ani 1s ease-out forwards;
        width: 300px;
        height: 300px;
        background-color: black;
    }
    .animated {
        transform: rotate(45deg);
        background-image: url("https://img.icons8.com/material-rounded/24/000000/menu--v3.png");
        transition: all ease 1s;

    }
`

const Test = () => {
    const [test,setTest] = useState(false)
    return (
        <>
            <Block className="test">
                <div className={test && "animated" }></div></ Block>
            <button onClick={()=>{setTest(!test)}}>테스트</button>
        </>
    )
}

export default Test;