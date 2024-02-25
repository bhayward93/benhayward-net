import { ReactNode } from "react";

/**
 * Circle eye component. Abstract eye in a circle for decoration.
 * @returns { ReactNode } circle eye component.
 */
export const EyeCircle = (): ReactNode => {
  return (
    <div className="flex rounded-full bg-secondary border-primary border-[50px] h-[500px] w-[500px]">
      <div className="rounded-[50%] bg-white h-[196px] w-[140px] mt-24 block">
        <div className="rounded-[50%] bg-black h-[80px] w-[60px] mt-12 ml-1"></div>
      </div>
    </div>
  )
}