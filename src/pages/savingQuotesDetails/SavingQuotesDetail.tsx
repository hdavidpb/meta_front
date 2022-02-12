import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../components/LoaderComponent";
import { setChangeIsCancelQuote } from "../../redux/features/savings/savingSlice";
import { getAllSavingQuotesByYear } from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./styles";
const SavingQuotesDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams<"id">();
  const { loadingSavingQuotes, savingQuotesByYear, totalAbonado, totalSaving } =
    useSelector((store: RootState) => store.saving.savingQuotesByYearData);
  const [weeksIds, setWeeksIds] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getAllSavingQuotesByYear(id!));
  }, [id]);

  const handleChangeUpdateQuotes = (weekId: string) => {
    dispatch(setChangeIsCancelQuote(weekId));
    setWeeksIds([...weeksIds, weekId]);
  };
  const handleSaveChanges = () => {
    console.log(weeksIds);
  };

  return (
    <ViewContainer>
      {loadingSavingQuotes ? (
        <LoaderComponent />
      ) : (
        <>
          <sc.Description>{`${savingQuotesByYear?.description} ${savingQuotesByYear?.year}`}</sc.Description>
          <sc.SavingQuotesContainer>
            {savingQuotesByYear?.month.map((month) => (
              <sc.CardQuoteContainer key={month.id}>
                <sc.CardQuotetitle>{month.monthName}</sc.CardQuotetitle>
                <sc.ListQuotesContainer>
                  {month.weeks.map((week) => (
                    <sc.GridQuoteContainer key={week.id}>
                      <p>{week.weekName}</p>
                      <p>{`$ ${new Intl.NumberFormat("CO-co").format(
                        week.quotePrice
                      )}`}</p>
                      <sc.CheckContainer>
                        <label htmlFor="check"></label>
                        <input
                          checked={week.isCancel}
                          type="checkbox"
                          id="check"
                          onChange={() => handleChangeUpdateQuotes(week.id)}
                        />
                      </sc.CheckContainer>
                    </sc.GridQuoteContainer>
                  ))}
                </sc.ListQuotesContainer>
              </sc.CardQuoteContainer>
            ))}
          </sc.SavingQuotesContainer>
          <sc.SaveAbonoContainer>
            <button onClick={handleSaveChanges}>Guardar</button>
          </sc.SaveAbonoContainer>
          <sc.FooterContainer>
            <sc.FooterGridContainer>
              <h1>Ahorro programado</h1>
              <h1>Total Abonado</h1>
            </sc.FooterGridContainer>
            <sc.FooterGridContainer shadow={true}>
              <p>{`$ ${new Intl.NumberFormat("CO-co").format(totalSaving)}`}</p>
              <p>{`$ ${new Intl.NumberFormat("CO-co").format(
                totalAbonado
              )}`}</p>
            </sc.FooterGridContainer>
          </sc.FooterContainer>
        </>
      )}
    </ViewContainer>
  );
};

export default SavingQuotesDetail;
