import styled from "styled-components";
import {Box, Collapse, Container, Divider, InputBase, Link, List, ListItem, Paper, Slide, Slider} from "@mui/material";
import {MouseEventHandler, useCallback, useEffect, useState} from "react";

const StyledHeader = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #F6F5EF;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 120px;
  }
`;

const HeaderWrap = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 1100px;
    height: 100%;
    padding-top: 20px;
    padding-left: 15px;
  }
`;

const Logo = styled.img`
  padding-top: 10px;
`;

const HeaderMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const HeaderTopMenu = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
`;

const HeaderBottomMenu = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderTopMenuSec = styled(List)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const HeaderBottomMenuSec = styled(List)`
  && {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
  }    `;


const HeaderTopMenuSecList = styled(ListItem)`
  && {
    padding: 0;
  }
`;

const HeaderBottomMenuSecList = styled(ListItem)`
  && {
    display: flex;
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 8px;
    padding-right: 8px;
    height: 100%;

    & :hover {
      background-color: #2C2A29;
      cursor: pointer;

      > a {
        text-decoration: underline;
        color: #669900;
      }
    }
  }
`;

const HeaderTopMenuSecListLink = styled(Link)`
  && {
    display: inline-block;
    white-space: nowrap;
    padding: 0px 15px;
    width: 100%;
    height: 100%;
    color: #666;
    text-decoration: none;
    font: normal 13px Avenir, Arial, georgia;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

`;

const HeaderTopMenuDivider = styled(Divider)`
  background-color: #E9E9E3;
  width: 0.5px;
`;

const SearchBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #E1E0DE;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;


const HeaderBottomMenuSecListLink = styled(Link)`
  && {
    display: inline-block;
    white-space: nowrap;
    padding: 0px 15px;
    width: 100%;
    height: 100%;
    color: #666;
    text-decoration: none;
    font: normal 13px Avenir, Arial, georgia;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

`;

const HeaderSubMenuBox = styled(Collapse)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 100%;
    background-color: #2C2A29;
    width: 100%;
    z-index: 100;

`;


const HeaderSubMenuListSec = styled(List)`
  && {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 1080px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const HeaderSubMenuListSecList = styled(ListItem)`
  && {
    display: flex;
    width:20%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    gap: 5px;
  }
`;

const HeaderSubMenuListSecListLink = styled(Link)`
  && {
    display: inline-block;
    white-space: nowrap;
    color: #fff;
    text-decoration: none;
    font: normal 15px Avenir, Arial, georgia;
    font-weight: 500;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const HeaderSubMenuListSecListSubMenuLink = styled(Link)`
  && {
    display: inline-block;
    white-space: nowrap;
    color: #999;
    text-decoration: none;
    font: normal 12px Avenir, Arial, georgia;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const headerTopMenuList: { name: string, link: string }[]
    = [
    {name: "Sign In", link: "#"},
    {name: "My Starbucks", link: "#"},
    {name: "Customer Service & Ideas", link: "#"},
    {name: "Find a Store", link: "#"},
];

const headerBottomMenuList: { name: string, link: string }[] = [
    {name: "COFFEE", link: "#"},
    {name: "MENU", link: "#"},
    {name: "STORE", link: "#"},
    {name: "RESPONSIBILITY", link: "#"},
    {name: "STARBUCKS REWARDS", link: "#"},
    {name: "CORPORATE SALES", link: "#"},
    {name: "WHAT'S NEW", link: "#"},
];

const headerSubMenuList: { name: string, content: { name: string, link: string, subMenu?: { name: string, link: string }[] }[] }[] = [
    {
        name: "COFFEE",
        content: [
            {
                name: "커피", link: "#",
                subMenu: [{name: "스타벅스 원두", link: "#"},
                    {name: "스타벅스 비아", link: "#"},
                    {name: "스타벅스앳홉 by 캡슐", link: "#"},
                    {name: "나와 어울리는 커피", link: "#"},
                ]
            },
            {
                name: "커피 이야기", link: "#", subMenu: [{name: "농장에서 우리의 손으로", link: "#"},
                    {name: "최상의 아라비카 원두", link: "#"},
                    {name: "스타벅스 로스트 스팩트럼", link: "#"},
                    {name: "스타벅스 디카페인", link: "#"},
                ]
            },
            {
                name: "스타벅스 리저브", link: "#", subMenu: [{name: "RESERVE MAGAZINE", link: "#"}
                ]
            },
            {
                name: "에스프레소 음료", link: "#", subMenu: [{name: "도피오", link: "#"},
                    {name: "에스프레소 마키아토", link: "#"},
                    {name: "아메리카노", link: "#"},
                    {name: "마키아토", link: "#"},
                    {name: "카푸치노", link: "#"},
                    {name: "라떼", link: "#"},
                    {name: "모카", link: "#"},
                ]
            },
            {name: "최상의 커피를 즐기는법", link: "#",   subMenu: [{name: "커피 프레스", link: "#"},
                    {name: "푸어 오버", link: "#"},
                    {name: "아이스 푸어 오버", link: "#"},
                    {name: "커피 메이커", link: "#"},
                ]
            }]
    }, {
        name: "MENU",
        content: [
            {name: "음료", link: "#",subMenu: [{name: "콜드 브루", link: "#"},
                    {name: "브루드 커피", link: "#"},
                    {name: "에스프레소", link: "#"},
                    {name: "프라푸치노", link: "#"},
                    {name: "블렌디드", link: "#"},
                    {name: "스타벅스 리프레셔", link: "#"},
                    {name: "스타벅스 피지오", link: "#"},
                    {name: "티(티바나)", link: "#"},
                    {name: "기타 제조 음료", link: "#"},
                    {name: "스타벅스 주스(병음료)", link: "#"},
                ]},
            {name: "푸드", link: "#"},
            {name: "상품", link: "#"},
            {name: "카드", link: "#"},
            {name: "메뉴이야기", link: "#"}]
    },{
        name: "STORE",
        content: [
            {name: "매장 찾기", link: "#"},
            {name: "드라이브 스루 매장", link: "#"},
            {name: "스타벅스 리저브 매장", link: "#"},
            {name: "커뮤니티 스토어 매장", link: "#"}]
    },
    {
        name: "RESPONSIBILITY",
        content: [
            {name: "사획공헌 캠페인 소개", link: "#"},
            {name: "지역 사회 참여 활동", link: "#"},
            {name: "환경보호 활동", link: "#"},
            {name: "윤리 구매", link: "#"},
            {name: "글로벌 사회 공헌", link: "#"}]
    },
    {
        name: "STARBUCKS REWARDS",
        content: [
            {name: "스타벅스 리워드", link: "#"},
            {name: "스타벅스 카드", link: "#"},
            {name: "스타벅스 e-Gift Card", link: "#"}]
    }];


export const Header = () => {
    const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
    const [menuIndex, setMenuIndex] = useState<string>("");
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const handleOpenSearchBar = useCallback(() => {
        setOpenSearchBar(true);
    }, []);
    const onHeaderBottomMenuSecListMouseUp = useCallback((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setOpenMenu(true);
        setMenuIndex(e.currentTarget.id as string);
        console.log(e.currentTarget.id);
    }, []);

    const onHeaderSubMenuMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setOpenMenu(true);
        const button = document.getElementById(menuIndex);
        if (button) {
            button.style.backgroundColor = "#2C2A29";
            button.getElementsByTagName("a")[0].style.color = "#669900";
        }
    };


    const onHeaderSubMenuMouseDown = () => {
        setOpenMenu(false);
        const button = document.getElementById(menuIndex);
        if (button) {
            button.style.removeProperty("background-color");
            button.getElementsByTagName("a")[0].style.removeProperty("color");
        }
    };



    const onHeaderBottomMenuSecListMouseDown = useCallback(() => {
        setOpenMenu(false);
    }, []);


    return (
        <StyledHeader id="header" maxWidth={"xl"} component={"header"}>
            <HeaderWrap>
                <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" alt="LOGO" width={75} height={75}/>
                <HeaderMenu>
                    <HeaderTopMenu>
                        <HeaderTopMenuSec sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            padding: "0",
                            margin: "0",
                        }}>
                            {headerTopMenuList.map((item, index) => (
                                <HeaderTopMenuSecList key={index}>
                                    <HeaderTopMenuSecListLink href={item.link}
                                                              >{item.name}</HeaderTopMenuSecListLink>
                                    {index !== headerTopMenuList.length - 1 &&
                                        <HeaderTopMenuDivider orientation="vertical" flexItem light sx={{
                                            height: "12px", marginTop: "3px"
                                        }}/>}
                                </HeaderTopMenuSecList>
                            ))}
                            <SearchBox onClick={handleOpenSearchBar}>
                                <Collapse in={openSearchBar} mountOnEnter unmountOnExit orientation={"horizontal"}
                                          timeout={600}>
                                    <InputBase placeholder="통합검색" sx={{
                                        padding: 0,
                                        fontSize: "0.75rem",
                                        width: "150px",
                                        fontWeight: "bold",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        "> input": {
                                            padding: "0px", paddingLeft: "4px"
                                        }
                                    }}/>
                                </Collapse>
                                <img alt="통합검색"
                                     src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"/>
                            </SearchBox>
                        </HeaderTopMenuSec>
                    </HeaderTopMenu>
                    <HeaderBottomMenu>
                        <HeaderBottomMenuSec>
                            <HeaderBottomMenuSecList>
                                {headerBottomMenuList.map((item, index) => (
                                    <HeaderBottomMenuSecList onMouseEnter={onHeaderBottomMenuSecListMouseUp}
                                                             onMouseLeave={onHeaderBottomMenuSecListMouseDown}
                                                             id={item.name}
                                                             key={index}>
                                        <HeaderBottomMenuSecListLink href={item.link}
                                                                     >{item.name}</HeaderBottomMenuSecListLink>
                                    </HeaderBottomMenuSecList>
                                ))}
                            </HeaderBottomMenuSecList>
                        </HeaderBottomMenuSec>
                    </HeaderBottomMenu>
                </HeaderMenu>
            </HeaderWrap>
            <HeaderSubMenuBox in={openMenu} orientation={"vertical"} onMouseEnter={onHeaderSubMenuMouseUp}
                              onMouseLeave={onHeaderSubMenuMouseDown}
                              >
                <HeaderSubMenuListSec>
                    {
                        headerSubMenuList.filter((item) => item.name === menuIndex)[0]?.content.map((item, index) => (
                            <HeaderSubMenuListSecList key={index}>
                                <HeaderSubMenuListSecListLink href={item.link}
                                                              >{item.name}</HeaderSubMenuListSecListLink>
                                {item.subMenu?.map((subItem, subIndex) => (
                                    <HeaderSubMenuListSecList>
                                    <HeaderSubMenuListSecListSubMenuLink key={subIndex}>
                                        {subItem.name}
                                    </HeaderSubMenuListSecListSubMenuLink>
                                    </HeaderSubMenuListSecList>
                                ))}
                            </HeaderSubMenuListSecList>
                        ))
                    }
                </HeaderSubMenuListSec>
            </HeaderSubMenuBox>

        </StyledHeader>
    );
};