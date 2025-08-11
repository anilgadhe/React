import {DataGrid} from './dataGrid'

export function GridComponent(){

    return(
        <div className='container-fluid'>
            <h2>Employ-Details</h2>
             <DataGrid caption="Employ data updated on 15aug" headings={['First Name', 'Last Name', 'Designation', 'Salary']} items={[{"FirstName":'Anil', "LastName":'Patil', "Designation":'Manager' , "Salary":45000},{"FirstName":'Ganesh', "LastName":'Patil', "Designation":'Manager' , "Salary":50000}]} />
        </div>
    )

}