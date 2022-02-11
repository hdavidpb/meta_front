import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/SideBarMenu/Sidebar";
import { getAllYearsFromUser } from "../../redux/features/savings/services";
import { ViewContainer } from "../../style";
import * as sc from "./style";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllYearsFromUser());
  }, []);

  return (
    <ViewContainer>
      <sc.HomeContainer>
        <sc.Title>
          <h6>Mis Años</h6>
        </sc.Title>
        <sc.YearsCardsContainer>
          <sc.CardYear>
            <img />
            <sc.FooterCard>
              <h6>Viaje a mexico</h6>
              <p>2021</p>
            </sc.FooterCard>
          </sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
          <sc.CardYear></sc.CardYear>
        </sc.YearsCardsContainer>
      </sc.HomeContainer>
    </ViewContainer>
  );
};

export default Home;
