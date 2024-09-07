import { PropsWithChildren } from "react";

export default function FIeldErrorMessage({children} : PropsWithChildren) {
  return (
    <p className="text-xs text-red-500">{children}</p>
  )
}
