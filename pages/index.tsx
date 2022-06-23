import { useEffect, useState } from "react"
import Job from "../components/Job"
import { CompanyData, fetchCompanies } from "../services/company";
import { fetchJobs, JobData } from "../services/job";

const Home = () => {
  const [jobs, setJobs] = useState<JobData[]|null>(null);
  const [companies, setCompanies] = useState<CompanyData[]|null>(null);

  useEffect(() => {
    fetchJobs().then(j => { setJobs(j); });
    fetchCompanies().then(c => { setCompanies(c); });
  }, []);

  if (!jobs || !companies) {
    return (
      <p className="text-center">
        Carregando...
      </p>
    );
  }

  if (jobs.length === 0) {
    return (
      <p className="text-center">
        Ainda não há vagas registradas.
      </p>
    )
  }

  return (
    <>
    <div className="container max-w-6xl mx-auto md:px-0">
      { jobs.map((job) => {
        const company = companies.find(c => c.id === job.companyId);

        if (company === undefined) {
          throw new Error("Company not found");
        }

        return <Job
          key={job.id}
          title={job.title}
          description={job.description}
          hardSkills={job.hardSkills}
          softSkills={job.softSkills}
          contact={job.contact}
          type={job.type}
          tags={job.tags}
          courses={job.courses}
          workspace={job.workspace}
          hoursPerWeek={job.hoursPerWeek}
          salary={job.salary}
          company={company}
          createdAt={new Date(job.createdAt)}
        />
      })}
    </div>
    </>
  )
}

export default Home;
