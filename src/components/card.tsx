import { ReactNode } from "react"

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className='rounded-xl bg-slate-300 bg-opacity-15 w-[20rem] relative md:w-[30rem] lg:w-[20rem]'>
            {children}
        </div>
    )
}

export default Card