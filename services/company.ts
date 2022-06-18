import axios from "axios";

export type CompanyData = {
  id: string,
  name: string,
  website: string|null,
};

export type CompanyInput = {
  name: string,
  website?: string
};

export const fetchCompanies = (): Promise<CompanyData[]> => {
  return axios
    .get('http://localhost:3000/companies')
    .then(response => response.data);
}

export const addCompany = (company: CompanyInput): Promise<string> => {
  return axios
    .post('http://localhost:3000/companies', company)
    .then(response => response.data.id)
    .catch(error => { throw error.response.data.message; });
}
