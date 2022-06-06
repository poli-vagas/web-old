import Chip from "./Chip";
import { Tooltip } from "./Tooltip";

type Props = {
  name: string
}

const emoji = (courseName: string): string => {
  const emojiMap: Record<string, string> = {
    'Engenharia Eletrônica e de Computação': '📟',
    'Engenharia Mecânica': '⚙️',
    'Engenharia Elétrica': '⚡',
  }

  return emojiMap[courseName] ?? '❓';
}

const CourseChip = ({ name }: Props) => {
  return (
    <Tooltip message={name}>
      <Chip>{ emoji(name) }</Chip>
    </Tooltip>
  )
}

export default CourseChip;