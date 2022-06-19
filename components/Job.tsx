import { useState } from "react";
import { timeSince } from "../services/time-since";
import Chip from "./Chip";
import CourseChip from "./CourseChip";
import HoursPerWeekChip from "./HoursPerWeekChip";
import JobDetails from "./JobDetails";
import SalaryChip from "./SalaryChip";
import WorkspaceChip from "./WorkspaceChip";

type JobProps = {
  title: string,
  description: string,
  hardSkills: string,
  softSkills: string,
  contact: {
    email: string | null,
    url: string | null,
    linkedin: string | null,
  },
  type: string,
  workspace: string | null,
  hoursPerWeek: number | null,
  salary: number | null,
  tags: string[],
  courses: string[],
  company: {
    id: string,
    name: string,
  },
  createdAt: Date,
};

const Job = (props: JobProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => { setOpen(!open); };

  const cardClasses = open ? 'md:rounded-t-xl bg-gray-300' : 'md:rounded-xl bg-white'

  return (
    <>
    <div
      className={`flex flex-row border-2 px-4 py-1 mt-2 hover:bg-gray-300 hover:cursor-pointer ${cardClasses}`}
      onClick={toggleOpen}
    >
      <div className="w-6/12 md:w-3/12 flex flex-col mr-2">
        <div className="font-light truncate">{ props.company.name }</div>
        <div className="font-bold truncate">{ props.title }</div>
        <p>
          { props.type }
        </p>
      </div>
      <div className="w-4/12 md:w-2/12 flex flex-wrap mx-auto my-auto justify-center gap-1">

        { props.workspace &&
          <div className="mx-auto">
            <WorkspaceChip name={props.workspace} />
          </div>
        }

        { props.hoursPerWeek &&
          <div className="mx-auto">
            <HoursPerWeekChip hours={props.hoursPerWeek} />
          </div>
        }

        { props.salary &&
          <div className="mx-auto">
            <SalaryChip salary={props.salary} />
          </div>
        }

      </div>
      <div className="hidden md:visible md:w-2/12 md:flex flex-wrap my-auto mx-4 justify-center">
        { props.courses.map((course) => (
          <div className="mx-1" key={`course-${course}`}>
            <CourseChip name={course}/>
          </div>
        ))}
      </div>
      <div className="hidden md:visible md:w-3/12 md:flex flex-nowrap overflow-x-hidden my-auto mx-4">
        { props.tags.map((tag) => (
          <div className="mx-1" key={tag}>
            <Chip>{tag}</Chip>
          </div>
        ))}
      </div>
      <div className="w-2/12 md:w-1/12 my-auto text-right font-thin text-sm mr-4">
        { timeSince(props.createdAt) }
      </div>
    </div>
    { open &&
      <div className="bg-white border-2 border-t-0 md:rounded-b-xl px-4 py-1">
        <JobDetails
          description={props.description}
          softSkills={props.softSkills}
          hardSkills={props.hardSkills}
          contact={props.contact}
          tags={props.tags}
          company={props.company}
        />
      </div>
    }
    </>
  )
}

export default Job;