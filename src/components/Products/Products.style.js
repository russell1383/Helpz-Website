import styled from "styled-components";

export const ProductContainerWrap = styled.div`
  width: 63vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  position: relative;
  @media (max-width: 560px) {
    width: 95vw;
  }

  h2 {
    font-weight: 500;
    margin-top: 4%;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 4%;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  position: relative;
`;

export const LeftArrowButton = styled.div`
  height: 45px;
  width: 35px;
  background: #eeeeee;
  position: absolute;
  top: 150px;
  left: -4px;
  z-index: 20;
  display: flex;
  padding: 7px;
  align-items: center;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const RightArrowButton = styled.div`
  height: 45px;
  width: 35px;
  background: #eeeeee;
  position: absolute;
  top: 150px;
  right: -4px;
  z-index: 30;
  display: flex;
  align-items: center;
  padding: 7px;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const ProductBox = styled.div`
  width: 24%;
  height: 100%;
  position: relative;
  padding: 3% 1%;
  border: 1px solid lightgrey;

  @media (max-width: 920px) {
    width: 49%;
    margin-bottom: 1%;
  }

  small {
    font-size: 10px;
    text-align: center;
    display: block;
    padding: 2% 0;

    @media (max-width: 560px) {
      font-size: 8px;
    }
  }
`;
export const OffLabel = styled.div`
  position: absolute;
  width: 40px;
  height: 65px;
  padding-left: 8px;
  padding-top: 5px;
  font-size: 13px;
  top: 0;
  background: #44a72c;
  right: 10px;
  color: #fff;

  @media (max-width: 400px) {
    font-size: 10px;
    width: 30px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  padding-top: 15%;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;

  div {
    p {
      font-size: 1.3em;
      font-weight: 100;
      @media (max-width: 560px) {
        font-size: 13px;
      }
    }
    h3 {
      font-size: 1em;
      @media (max-width: 560px) {
        font-size: 13px;
      }
    }
    h6 {
      font-size: 12px;
      text-align: right;
      @media (max-width: 560px) {
        font-size: 10px;
      }
    }
    h5 {
      color: #44a72c;
      font-size: 15px;
      text-align: right;
      @media (max-width: 560px) {
      }
    }
  }
`;

export const ProductButtonContainer = styled.div`
  text-align: center;
  width: 100%;
  .add_to_cart_button {
    width: 70%;
    background: #44a72c;
    color: #fff;
    border: 0;
    padding: 4% 1%;
    margin-right: 1px;
  }

  .plus_button {
    width: 20%;
    background: #44a72c;
    color: #fff;
    border: 0;
    padding: 4% 1%;
    margin-left: 1px;
  }
`;
