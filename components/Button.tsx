import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  url?: string,
  onClick?: () => void,
  backgroundColor?: string,
  backgroundColorHover?: string,
  target?: 'self' | 'blank',
}

const Button = (props: ButtonProps) => {
  const background = props.backgroundColor ?? '#6667AB';
  const backgroundHover = props.backgroundColorHover ?? '#523f90';

  const buttonClass = `mx-auto text-white bg-[${background}] hover:bg-[${backgroundHover}] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 my-2 focus:outline-none hover:cursor-pointer`

  const targetMap = {
    self: '_self',
    blank: '_blank',
  };

  const { target = 'self' } = props;
  const targetHtml = targetMap[target];

  return (
    <a
      className={buttonClass}
      href={props.url}
      target={targetHtml}
      onClick={props.onClick}
    >
      { props.children }
    </a>
  );
}

export default Button;
