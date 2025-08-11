

export function FormDataDemo(){

 function handleSubmit(e){
          e.preventDefault();

          const data = new FormData(e.target);

          for(var item of data){
            console.log(item[1]);
            
          }

 }

 return(
    <div className="container">
           <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" placeholder="add username" name="userName"/></dd>

                <dt>mobile</dt>
                <dd><input type="text" placeholder="add mobile no" name="mobile"/></dd>
            </dl>
           <button>Submit</button>
        </form>
    </div>
 ) 
}