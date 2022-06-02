import Chip from "./Chip";
import CourseChip from "./CourseChip";
import JobTypeChip from "./JobTypeChip";

type JobProps = {
  title: string,
  company: {
    id: string,
    name: string,
  }
  type: 'Estágio' | 'Trainee' | 'Emprego',
  tags: string[],
}

const Job = (props: JobProps) => {
  return (
    <div className="flex flex-row border-2 md:rounded-xl px-4 py-1 my-2">
      <div className="w-4/12 flex flex-col mr-2">
        <div className="font-light truncate">{ props.company.name }</div>
        <div className="font-bold truncate">{ props.title }</div>
        <div className="flex">
          <JobTypeChip type={ props.type }/>
        </div>
      </div>
      <div className="w-2/12 flex flex-wrap my-auto mx-4">
        <div className="mx-1">
          <CourseChip course={{ id: 'a', name: 'Engenharia Eletrônica e de Computação'}}/>
        </div>
        <div className="mx-1">
          <CourseChip course={{ id: 'a', name: 'Engenharia Mecânica'}}/>
        </div>
        <div className="mx-1">
          <CourseChip course={{ id: 'a', name: 'Engenharia Elétrica'}}/>
        </div>
      </div>
      <div className="w-4/12 flex flex-nowrap overflow-x-hidden my-auto mx-4">
        { props.tags.map((tag) => (
          <div className="mx-1" key={tag}>
            <Chip>{tag}</Chip>
          </div>
        ))}
      </div>
      <div className="w-1/12 my-auto text-right font-thin text-sm ml-2">
        2h
      </div>
    </div>
  )
}

export default Job;