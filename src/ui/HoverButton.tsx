import styled from "@emotion/styled/dist/emotion-styled.cjs";
import {Box} from "@mui/material";


interface HoverButtonProps {
    label: string;
    textColor : string;
    backgroundColor : string;
    hoverColor : string;
    width: number | string;
    height: number | string;
    fontWeight: number | string;
}

const hoverButtonStyled = styled(Box)`
   display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props:HoverButtonProps) => props.width};
    height: ${(props:HoverButtonProps) => props.height};
    padding: 10px 20px;
    border: ${(props:HoverButtonProps) => `2px solid ${props.textColor}`};
    border-radius: 5px;
    color: ${(props:HoverButtonProps) => props.textColor};
  font: normal 15px Avenir, Arial, georgia;
  font-weight: ${(props:HoverButtonProps) => props.fontWeight};
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #0B4D3B;
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`;


export const HoverButton = (props:HoverButtonProps) => {
    return (
        <></>
    );
};