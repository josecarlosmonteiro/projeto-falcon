import { ReactNode } from "react";

export function Row({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    )
}