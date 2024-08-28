import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
}

export const PageBox = ({ className, children }: Props) => {
  return (
    <div className={`h-screen flex justify-center items-center ${className}`}>
      {children}
    </div>
  )
}