import { MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


export default function UiButton({ children, onClick, }: Props) {
  return (
    <button className={`font-ceraBold outline-none flex gap-2 items-center justify-center whitespace-nowrap stroke-gray-950 fill-gray-950`} onClick={onClick}>{children}</button>
  )
}