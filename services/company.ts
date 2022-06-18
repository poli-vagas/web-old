import axios from "axios";
import host from "./host";

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
    .get(`${host}/companies`)
    .then(response => response.data);
}

export const addCompany = (company: CompanyInput): Promise<string> => {
  if (company.website?.length === 0) {
    delete company.website;
  }

  return axios
    .post(`${host}/companies`, company)
    .then(response => response.data.id)
    .catch(error => { throw error.response.data.message; });
}
