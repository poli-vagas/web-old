import axios from "./api";

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
  createdAt: string,
}

export type JobInput = {
  title: string,
  description: string,
  companyId: string,
  type: string,
  tags: string[],
  courses: string[],
  contact: {
    email?: string,
    url?: string,
    linkedin?: string,
  },
  hoursPerWeek?: number | null,
  salary?: number | null,
  workspace?: string | null,
}

export const fetchJobs = (): Promise<JobData[]> => {
  return axios
    .get('/jobs')
    .then(response => response.data);
}

export const addJob = (job: JobInput): Promise<string> => {
  if (job.contact.email?.length === 0) {
    delete job.contact.email;
  }

  if (job.contact.url?.length === 0) {
    delete job.contact.url;
  }

  if (job.contact.linkedin?.length === 0) {
    delete job.contact.linkedin;
  }

  if (!job.salary) {
    delete job.salary;
  }

  if (!job.hoursPerWeek) {
    delete job.hoursPerWeek;
  }

  if (!job.workspace) {
    delete job.workspace;
  }

  return axios
    .post('/jobs', job)
    .then(response => response.data.id)
    .catch(error => { throw error.response.data.message });
}
