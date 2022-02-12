import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../components/SideBarMenu/Sidebar";
import {
  deleteSaving,
  getAllSavingQuotesByYear,
  getAllYearsFromUser,
} from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./style";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userYears } = useSelector((store: RootState) => store.saving);
  const { isLogin } = useSelector((store: RootState) => store.user);
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

  const handleGetSavingQuoteDetail = (yearID: string) => {
    navigate(`/savingQuote/${yearID}`);
    dispatch(getAllSavingQuotesByYear(yearID));
  };
  return (
    <ViewContainer>
      <sc.HomeContainer>
        <sc.Title>
          <h6>Mis Ahorros</h6>
        </sc.Title>
        <sc.YearsCardsContainer>
          {userYears.map((saving) => (
            <sc.CardYear
              key={saving.id}
              onClick={() => handleGetSavingQuoteDetail(saving.id)}
            >
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
