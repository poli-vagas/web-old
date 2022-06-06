import axios from "axios";

export type JobData = {
  id: string,
  title: string,
  description: string,
  hardSkills: string,
  softSkills: string,
  companyId: string,
  contact: {
    email: string | null,
    url: string | null,
    linkedin: string | null,
  },
  type: string,
  tags: string[],
  courses: string[],
  workspace: string | null,
  hoursPerWeek: number | null,
  salary: number | null,
}

export const fetchJobs = (): Promise<JobData[]> => {
  return axios
    .get('http://localhost:3000/jobs')
    .then(response => response.data);
}
