import styled from "styled-components";

import bgHome from "../../assets/images/bg-home.jpg";

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  /* background: url(${bgHome}); */
`;

export const Title = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 10px;
  color: black;
  font-weight: 600;
  top: -12%;
  right: -7%;
  border-radius: 15px;
  transform: rotate(-21deg);
  background: purple;
  color: #ffffff;
  box-shadow: 0 0 2px 2px #00000047;
  & h6 {
    position: absolute;
    left: 6%;
    bottom: 41px;
    font-size: 1.8rem;
    transform: rotate(20deg);
  }
`;

export const YearsCardsContainer = styled.div`
  margin-top: 8rem;
  width: 100%;
  max-height: 66vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  overflow-y: scroll;
  gap: 1.2rem;
  padding: 6px;
`;

export const CardYear = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  height: 100px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 2px 2px 2px #38042e54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 50%;
    width: 100%;
    background: white;
    border-radius: 12px 12px 0 0;
    background: purple;
    background: url(${bgHome});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(5px);
  }
`;

export const FooterCard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 6px;

  & h6 {
    width: 100%;
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    word-wrap: break-word;
  }

  & p {
    width: 100%;
    text-align: right;
    font-size: 13px;
  }
`;
