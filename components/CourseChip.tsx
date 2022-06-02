import Chip from "./Chip";

type Props = {
  course: {
    id: string,
    name: string,
  }
}

const emoji = (courseName: string) => {
  const map = {
    'Engenharia Eletrônica e de Computação': '📟',
    'Engenharia Mecânica': '⚙️',
    'Engenharia Elétrica': '⚡',
  };

  return map[courseName] || '';
}

const CourseChip = ({ course }: Props) => {
  return (
    <Chip>{ emoji(course.name) }</Chip>
  )
}

export default CourseChip;