export interface IInitialState {
  userYears: IYear[];
  loadingYears: boolean;
}

export interface IYear {
  id: string;
  year: string;
}

export interface ICreateSavingResponse {
  id: string;
  monthName: string;
  monthNumber: number;
  weeks: IWeek[];
}

export interface IWeek {
  id: string;
  weekName: string;
  quotePrice: number;
  isCancel: boolean;
}
