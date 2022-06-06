import axios from "axios";

export type CompanyData = {
  id: string,
  name: string,
};

export const fetchCompanies = (): Promise<CompanyData[]> => {
  return axios
    .get('http://localhost:3000/companies')
    .then(response => response.data);
}
