import {Box, Fade} from "@mui/material";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";

const MainVisualBox = styled(Box)`
    height: 32vw;
    background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_promotion_bg_1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const MainVIsualWrap = styled(Box)`
  display: flex;
      position: relative;
        width: 80%;
          height: 100%;
              margin: 0 auto; 
  `;

const LoveUsBox = styled(Box)`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  position: absolute;
  z-index: 10;
  top: 38%;
  left: 5%;
  gap : 20px;
  width:23%;
  `;

const LoveUs = styled.img`
    max-width: 100%;
`;

const LoveUsDetailBtn = styled(Box)`
   display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 15px;
    padding: 10px 20px;
    border: 2px solid #0B4D3B;
    border-radius: 5px;
    color: #0B4D3B;
  font: normal 15px Avenir, Arial, georgia;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #0B4D3B;
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`;

const ImageBox = styled(Box)`
    display: flex;
  flex-direction: row;
  position: relative;
    width: 100%;
`;

const ImageWrap = styled(Box)`
  `;

const FirstImage = styled.img`
    max-width: 100%;
  vertical-align: top;
`;

const SecondImage = styled.img`
    max-width: 100%;
    vertical-align: top;
`;

const ThirdImage = styled.img`
    max-width: 100%;
    vertical-align: top;
`;

export const MainVisual = () => {
    const [firstIconDisplay, setFirstIconDisplay] = useState<boolean>(false);
    const [secondIconDisplay, setSecondIconDisplay] = useState<boolean>(false);
    const [thirdIconDisplay, setThirdIconDisplay] = useState<boolean>(false);
    const [fourthIconDisplay, setFourthIconDisplay] = useState<boolean>(false);
    const [fifthIconDisplay, setFifthIconDisplay] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstIconDisplay(true);
        }, 50);
        setTimeout(() => {
            setSecondIconDisplay(true);
        }, 450);
        setTimeout(() => {
            setThirdIconDisplay(true);
        }, 850);
        setTimeout(() => {
            setFourthIconDisplay(true);
        }, 1250);
        setTimeout(() => {
            setFifthIconDisplay(true);
        }, 1650);
    }, []);

    return (
        <MainVisualBox>
            <MainVIsualWrap>
                <LoveUsBox>
                    <Fade in={firstIconDisplay} timeout={1000}>
                    <LoveUs src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
                            alt="LOVE ME" className="pc-slogan"/>
                    </Fade>
                    <Fade in={fifthIconDisplay} timeout={1000}>
                    <LoveUsDetailBtn >
                        자세히 보기
                    </LoveUsDetailBtn>
                    </Fade>
                </LoveUsBox>
                <ImageBox>
                    <Fade in={thirdIconDisplay} timeout={1000}>
                    <ImageWrap sx={{
                        width: "23%",
                        position: "absolute",
                        top: "12%",
                        right: "46%",
                    }}>
                        <SecondImage src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink2.png"
                                     alt="라일락 블라썸 티" className="pc-drink"/>
                    </ImageWrap>
                    </Fade>
                    <Fade in={secondIconDisplay} timeout={1000}>
                    <ImageWrap sx={{
                        width: "20%",
                        position: "absolute",
                        top: "10%",
                        right: "30%",
                    }}>
                    <FirstImage src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink1.png"
                         alt="봄 딸기 라떼" className="pc-drink"/>
                    </ImageWrap>
                    </Fade>
                    <Fade in={fourthIconDisplay} timeout={1000}>
                    <ImageWrap sx={{
                        width: "23%",
                        position: "absolute",
                        top: "15%",
                        right: "13%",
                    }}>
                    <ThirdImage src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink3.png"
                         alt="브라운 슈가 오트 쉐이큰 에스프레소" className="pc-drink"/>
                    </ImageWrap>
                    </Fade>
                </ImageBox>
            </MainVIsualWrap>
        </MainVisualBox>
    );
};