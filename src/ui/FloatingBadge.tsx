import {Box} from "@mui/material";
import styled from "@emotion/styled";


const FloatingBadgeBox = styled(Box)`
    display: flex;
  position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 20%;
    right: 5%;
  
`;
export const FloatingBadge = () => {
    return (
        <FloatingBadgeBox>
            <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/gq5gfg_20230407112627089.png"
                 alt="PLCC 스타벅스 현대카드 4월 프로모션" className="pc-badge"/>
            <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/Mn0ecH_20220711153123340.png"
                 alt="B2B 기업 구매 페이지" className="pc-badge"/>

        </FloatingBadgeBox>
    );
};