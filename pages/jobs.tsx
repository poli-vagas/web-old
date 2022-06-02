import Job from "../components/Job"

const Jobs = () => {
  return (
    <div className="container max-w-6xl mx-auto md:px-0">
      <Job
        title="Software Engineer"
        company={{ id: 'a', name: 'Google'}}
        type="Estágio"
        tags={['PHP']}
      />
      <Job
        title="Data Engineer"
        company={{ id: 'a', name: 'Facebook'}}
        type="Trainee"
        tags={['Python']}
      />
    </div>
  )
}

export default Jobs
