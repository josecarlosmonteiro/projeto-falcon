import { ReactNode } from "react";
import { Row } from "./Row";

type Props = {
  icon: ReactNode;
  children: ReactNode;
}

export function ServiceWithIcon({ icon, children }: Props) {
  return (
    <Row className="flex items-center">
      <div className="p-8 bg-yellow-400 text-black rounded-full">
        {icon}
      </div>

      <div className="w-20 border-b-2 border-yellow-400" />

      <div className="h-full w-72 flex justify-center items-center font-medium p-8 bg-yellow-400 text-black rounded-full">
        {children}
      </div>
    </Row>
  )
}