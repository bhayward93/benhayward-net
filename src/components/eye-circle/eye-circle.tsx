import { ReactNode } from "react";

/**
 * Circle eye component. Abstract eye in a circle for decoration.
 * @returns { ReactNode } circle eye component.
 */
export const EyeCircle = (): ReactNode => {
  return (
    <div className="flex rounded-full bg-secondary border-primary border-[50px] h-[500px] w-[500px] 4xl:h-[800px] 4xl:w-[800px]">
      <div className="rounded-[50%] bg-white h-[196px] w-[140px] 4xl:h-[260px] 4xl:w-[220px] mt-24 4xl:mt-36 4xl:ml-4 block">
        <div className="rounded-[50%] bg-black h-[80px] w-[60px] 4xl:h-[120px] 4xl:w-[100px] mt-12 4xl:mt-18 ml-1"></div>
      </div>
    </div>
  )
}