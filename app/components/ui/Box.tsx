import { ReactNode } from "react";

type Props = {
	className?: string;
	children: ReactNode;
}

export const Box = ({ children, className }: Props) => {
	return (
		<div className={`w-[80vw] flex gap-2 items-center p-4 rounded-lg bg-white bg-opacity-5 mx-auto ${className}`}>
			{children}
		</div>
	)
}