import Chip from "./Chip";

type TypeProps = {
  type: 'Estágio' | 'Trainee' | 'Emprego',
}

const JobTypeChip = (props: TypeProps) => {
  return (
    <Chip>{ props.type }</Chip>
  )
}

export default JobTypeChip;