export interface IInitialState {
  userYears: IYear[];
  loadingYears: boolean;
  loadingCreate: boolean;
}

export interface IYear {
  description: string;
  id: string;
  year: string;
}

export interface ISavingResponse {
  years: IYear[];
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
