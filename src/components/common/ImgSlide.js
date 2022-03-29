import styled from "styled-components";
import Responsive from "./Responsive";
import palatte from "../../lib/style/palatte";
import { useState } from "react";

const ImgSlideBlock = styled.div`
    width: 100%;
    background-color: ${palatte.orange[3]};
`

const Wrapper = styled(Responsive)`
    background-color: ${palatte.orange[6]};
    height: 20rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const SlideWrapper = styled.div`
    width: 80%;
    height: 80%;
    background-color: ${palatte.orange[3]};
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const SlideButton = styled.div`
    font-size: 3rem;
    color: ${palatte.orange[4]};
    cursor: pointer;
    &:hover {
        color: ${palatte.orange[9]};
    }
`

const ImgSlide = () => {
    var tempData = [
        "https://via.placeholder.com/300.jpg",
        "https://via.placeholder.com/400.jpg",
        "https://via.placeholder.com/500.jpg"
    ]
    const [slideCount,setSlideCount] = useState(0)
    const leftClicked = () => {
        if(slideCount == 0){
            setSlideCount(tempData.length - 1)
        } else {
        setSlideCount((slideCount-1)%tempData.length)
        }
    };
    const rightClicked = () => {
        setSlideCount((slideCount+1)%tempData.length)
    }
    return(
        <>
            <ImgSlideBlock>
                <Wrapper>
                    <SlideButton onClick={leftClicked}>◀</SlideButton>
                    <SlideWrapper url={tempData[slideCount]}></SlideWrapper>
                    <SlideButton onClick={rightClicked}>▶</SlideButton>
                </Wrapper>


            </ ImgSlideBlock>
        </>
    )
}

export default ImgSlide;