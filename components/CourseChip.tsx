import Chip from "./Chip";
import { Tooltip } from "./Tooltip";

type Props = {
  name: string
}

const emoji = (courseName: string): string => {
  const emojiMap: Record<string, string> = {
    'Engenharia Ambiental': '🌳',
    'Engenharia Civil': '🏗',
    'Engenharia de Computação e Informação': '💻',
    'Engenharia de Controle e Automação': '🤖',
    'Engenharia Elétrica': '⚡',
    'Engenharia Eletrônica e de Computação': '📟',
    'Engenharia de Materiais': '🧱',
    'Engenharia Mecânica': '⚙️',
    'Engenharia Metalúrgica': '🔨',
    'Engenharia Naval e Oceânica': '🚢',
    'Engenharia Nuclear': '⚛',
    'Engenharia de Petróleo': '🛢',
    'Engenharia de Produção': '🏭',
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