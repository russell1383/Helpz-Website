import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background-color: #44a72c;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 60;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100px;
    @media (max-width: 1024px) {
      width: 90px;
    }
  }
`;

export const SearchBox = styled.div`
  width: 60%;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 38px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15px;
  }
  div {
    width: 45px;
    background: #f1f1f1;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  align-items: center;
  color: #fff;
`;

{
  /* --------------------------Mobileview-------------------------- */
}

export const MdNavbarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    background-color: #44a72c;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 30;
    padding: 0 5%;
  }
`;

export const MdTopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 20px;
`;

export const MdSearchBox = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
  }
  div {
    width: 45px;
    background: #f1f1f1;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MdLogoImg = styled.img`
  width: 85px;
  margin-left: -15px;

  @media (max-width: 400px){
    width: 70px;
  }
`;

export const MdShoppingCart = styled.div`
  display: flex;
  color: #fff;
  align-items: center;

  h4 {
    font-size: 16px;
    padding-left: 5px;
  }
`;

export const HamburgerMenuIcon = styled.img`
  width: 70px;
  height: 20px;
`;

// -----------------Sidebar on Medium Device-----------------//

export const MdSidebar = styled.div`

display: none;

@media (max-width: 768px){
  display: ${({ sidebarOpen }) => (sidebarOpen ? "block" : "none")};
  position: fixed;
  height: 75vh;
  width: 30vh;
  background: #44A72C;
  z-index: 40;
  position:absolute;
  top: 90px;
  right: 8px;
  padding-top: 5%;
  padding-left: 3%;
`;

export const MdSidebarItems = styled.h6`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 5%;
`;

// -----------------CategoryBar on Medium Device-----------------//

export const MdCategoryBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ openCatergory }) => (openCatergory ? "block" : "none")};
    position: fixed;
    height: 60vh;
    width: 30vh;
    background: #44a72c;
    z-index: 40;
    position: absolute;
    top: 90%;
    left: 13px;
    padding: 2% 3%;

  }
`;

export const MdCategoryIcon = styled.img`
display: none;

@media (max-width: 768px){
  display: block;
  width: 80px;
  position: fixed;
  left: 1%;
  bottom: 20px;
  z-index: 100;
}
  
  
`;

export const MdCategoryItems = styled.h6`

color: #fff;
font-size: 12px;
font-weight: 500;
padding: 5%;
`
