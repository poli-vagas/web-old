import Chip from "./Chip";

type Props = {
  name: string
}

const emoji = (courseName: string): string => {
  const emojiMap: Record<string, string> = {
    'Remoto': '🏠',
    'Presencial': '🏢',
    'Híbrido': '✳',
  }

  return emojiMap[courseName] ?? '';
}

const WorkspaceChip = ({ name }: Props) => {
  return <Chip>{ `${emoji(name)} ${name}`}</Chip>
}

export default WorkspaceChip;