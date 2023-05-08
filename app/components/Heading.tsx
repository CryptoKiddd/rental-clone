'use client'
 interface HeadingProps{
    title:string,
    subtitle?:string,
    center?:Boolean,
 }


const Heading:React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
  return (
    <div className={center?"text-center":'text-start'}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="font-light text-neural-500 mt-3">
            {subtitle}
        </div>

    </div>
  )
}

export default Heading