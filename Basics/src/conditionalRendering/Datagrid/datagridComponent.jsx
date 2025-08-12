import { useState } from "react"
import {DatagridComp} from './datagrid'

export function DataGridDemo(){
  const [layoutName ,setLayoutName]=useState('grid');

   function handleChange(e){
    setLayoutName(e.target.value)
   }
    return(
        <div>
            <h2>Employ-Details

                <select className="mx-2" onChange={handleChange}>
                    <option>select-view</option>
                    <option value='grid'>Grid</option>
                    <option value='card'>Card</option>
                </select>
            </h2>

           <DatagridComp layout={layoutName} caption='Employee Data - Update Aug 2025' headings={['First Name', 'Last Name', 'Designation', 'Salary']} items={[{FirstName:'Raj', LastName:'Kumar', Designation:'Clerk', Salary:45000},{FirstName:'Kiran', LastName:'Kumar', Designation:'Manager', Salary:75000}]}/>

           <h2>Product Details</h2>
           
           <DatagridComp  layout="card" caption='Employee Data - Update Aug 2025' headings={['First Name', 'Last Name', 'Designation', 'Salary']} items={[{FirstName:'Ganesh', LastName:'Kumar', Designation:'Clerk', Salary:50000},{FirstName:'Kiran', LastName:'Kumar', Designation:'Manager', Salary:75000}]}/>
        </div>
    )
}