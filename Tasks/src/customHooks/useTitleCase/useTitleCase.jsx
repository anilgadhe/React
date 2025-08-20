import { useTitleCase } from "./hook"



export function TitleCase(){

    const data = useTitleCase("welCome tO rEact")

    return(
        <div>
           {data}
        </div>
    )
}