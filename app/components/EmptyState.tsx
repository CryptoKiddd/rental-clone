'use client'

import { useRouter } from "next/navigation"
import Heading from "./Heading"
import Button from "./Button"

interface EmptyStateProps{
    title?:string,
    subTitle?:string,
    showReset?:boolean,
}

const EmptyState:React.FC<EmptyStateProps> = ({
    title = "No exact Matches",
subTitle = "Try Changing or removing some of your filters",
showReset
})=>{
    const router= useRouter()
    return(
       <div className="
       h-[60vh]
       flex
       flex-col
       gap-2
       justify-center
       items-center
       ">
        <Heading 
        center
        title={title}
        subtitle={subTitle}
        />
        <div className="w-48 mt-4  ">

            {
                showReset &&(
                    <Button outlined label="Remove All filters" onClick={()=>router.push('/')} />
                )
            }
        </div>

       </div>
    )
}

export default EmptyState