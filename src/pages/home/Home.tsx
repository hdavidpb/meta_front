import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/SideBarMenu/Sidebar";
import {
  deleteSaving,
  getAllYearsFromUser,
} from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./style";
const Home = () => {
  const dispatch = useDispatch();
  const { userYears } = useSelector((store: RootState) => store.saving);
  useEffect(() => {
    dispatch(getAllYearsFromUser());
  }, []);

  const handleDeletSaving = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    dispatch(deleteSaving(id));
  };

  return (
    <ViewContainer>
      <sc.HomeContainer>
        <sc.Title>
          <h6>Mis Ahorros</h6>
        </sc.Title>
        <sc.YearsCardsContainer>
          {userYears.map((saving) => (
            <sc.CardYear key={saving.id} onClick={(e) => console.log("HOLA!!")}>
              <sc.DeletBtn onClick={(e) => handleDeletSaving(e, saving.id)}>
                x
              </sc.DeletBtn>
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
