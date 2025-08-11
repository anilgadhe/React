import {useForm} from "react-hook-form"


export function ReactHookDemo(){
  
    const {register,handleSubmit, formState:{errors}}=useForm()

   function submit(user){
    console.log(user);
    
   }

return(
    <div className="d-flex justify-content-center align-items-center " style={{height:"90vh"}}>

        <form onSubmit={handleSubmit(submit)}>
          
          <label htmlFor="userName">UserName</label>
          <input className="form-control" id="userName"  {...register('userName',{required:"UserName is required",minLength:{value:4, message:"Minimium 4 letters"}, pattern: { value: /^[A-Za-z]{4,10}$/, message: "Only letters (4-10)" }})}/>
          <div className="text-danger">{errors.userName && errors.userName.message}</div>

          <label htmlFo>Mobile</label>
          <input className="form-control" id="mbl"  {...register("mobile",{required:"mobile required", pattern:{value:/\+91\d{10}/, message:"number should be like +91xxxxxxxxxx"} })} />
          <div className="text-danger">{errors.mobile && errors.mobile.message}</div>

          <label htmlFor="age">Age</label>
          <input className="form-control" id="age"  {...register('age',{required:"age required", min:{value:6,message:"Minimun age 6"},})}/>
          <div className="text-danger">{errors.age && errors.age.message}</div>

          <label htmlFor="City">City</label>
          <select id="City" className="form-control" {...register('City',{required:"city name is required"})}>
            <option>Select-City</option>
            <option>Nanded</option>
            <option>Hyderabad</option>
          </select>
          <div className="text-danger">{errors.City && errors.City.message}</div>

          <button className="btn btn-warning">Submit</button>
        </form>

    </div>
)


}