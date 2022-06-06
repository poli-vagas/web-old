import Chip from "./Chip";

type Props = {
  salary: number
}

const SalaryChip = ({ salary }: Props) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return <Chip>{ `🤑 ${formatter.format(salary / 100)}` }</Chip>
}

export default SalaryChip;
