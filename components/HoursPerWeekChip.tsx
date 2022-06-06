import Chip from "./Chip";

type Props = {
  hours: number
}

const HoursPerWeekChip = ({ hours }: Props) => {
  return <Chip>{ `⌚ ${hours}h/semana` }</Chip>
}

export default HoursPerWeekChip;
