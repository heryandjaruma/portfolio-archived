import ArrowRight from "./ArrowRight";

export default function ListArrow ({ title } : {title:string}) {
   return (
      <>
         <a href="" className="flex items-center group">
            {title}
            &nbsp;
            <div className="group-hover:block hidden">
               <ArrowRight />
            </div>
         </a>
      </>
   )
}