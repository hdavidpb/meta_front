export interface IInitialState {
  userYears: IYear[];
  loadingYears: boolean;
}

export interface IYear {
  id: string;
  year: string;
}
