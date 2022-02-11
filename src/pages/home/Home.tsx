import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/SideBarMenu/Sidebar";
import { getAllYearsFromUser } from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./style";
const Home = () => {
  const dispatch = useDispatch();
  const { userYears } = useSelector((store: RootState) => store.saving);
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
          {userYears.map((saving) => (
            <sc.CardYear key={saving.id}>
              <img />
              <sc.FooterCard>
                <h6>{saving.description}</h6>
                <p>{saving.year}</p>
              </sc.FooterCard>
            </sc.CardYear>
          ))}
        </sc.YearsCardsContainer>
      </sc.HomeContainer>
    </ViewContainer>
  );
};

export default Home;
