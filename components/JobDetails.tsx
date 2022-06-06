import Button from "./Button";
import Chip from "./Chip";

type JobDetailsProps = {
  description: string,
  hardSkills: string | null,
  softSkills: string | null,
  tags: string[],
  contact: {
    email: string | null,
    url: string | null,
    linkedin: string | null,
  }
  company: {
    id: string,
    name: string,
  },
}

const JobDetails = (props: JobDetailsProps) => {
  return (
  <div className="flex flex-col md:flex-row py-2">
    <div className="md:w-1/3 flex flex-col border-2 rounded-lg justify-center">
      <h2 className="text-lg font-bold text-center pt-2">{props.company.name}</h2>

      { props.contact.email &&
        <a href={`mailto:${props.contact.email}`} className="text-center">{props.contact.email}</a>
      }

      { props.contact.url &&
        <Button
          url={props.contact.url}
          target="blank"
        >
          🔗 Candidate-se
        </Button>
      }

      { props.contact.linkedin &&
        <Button
          url={props.contact.linkedin}
          target="blank"
        >
          <span>
            <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="align-middle"> Candidate-se</span>
          </span>
        </Button>
      }

      {/* Linkedin Logo */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#0072b1" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        <p>aa</p>
      </svg> */}
      <hr className="my-2" />
      <h3 className="text-center">Tags</h3>
      <div className="flex flex-wrap justify-center p-3 gap-2">
        { props.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </div>
    <div className="md:w-2/3 md:ml-5">
      { props.description && (
        <div>
          <h1 className="text-lg font-bold">Descrição</h1>
          <p>{props.description}</p>
        </div>
      )}
      { props.hardSkills && (
        <div>
          <h1 className="text-lg font-bold">Hard Skills</h1>
          <p>{props.hardSkills}</p>
        </div>
      )}
      { props.softSkills && (
        <div>
          <h1 className="text-lg font-bold">Soft Skills</h1>
          <p>{props.softSkills}</p>
        </div>
      )}
    </div>
  </div>
  )
}

export default JobDetails;