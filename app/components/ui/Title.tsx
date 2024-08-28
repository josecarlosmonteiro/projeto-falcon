import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Title = ({ children }: Props) => (
  <h1 className="text-3xl font-semibold">{children}</h1>
)