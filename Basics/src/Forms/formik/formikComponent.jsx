import { Formik, Form,ErrorMessage, Field } from "formik"
import * as yup from "yup"


export function FormikComponent() {


    return (
        <div className="container-fluid">

            <h2>Register User</h2>

            <Formik initialValues={{ userName: '', mobile: '', }} validationSchema={yup.object({
                userName: yup.string().required("User name is required").min(4, 'username too short'), mobile: yup.string().required('mobile is required').matches(/\+91\d{10}/, 'inValid mobile')
            })} onSubmit={(values) => { console.log(values) }
            } >
                {
                    form =>
                        <Form>
                            <dl>
                                <dt>UserName</dt>
                                <dd><Field type="text" name="userName" /></dd>
                                <dd className="text-danger"><ErrorMessage name="userName" /></dd>

                                <dt>Mobile</dt>
                                <dd><Field type="text" name="mobile" /></dd>
                                <dd className="text-danger"><ErrorMessage name="mobile" /></dd>
                            </dl>

                            <button disabled={(form.isValid) ?false: true} type="submit" >Submit</button>

                            <div className="mt-4 text-danger" style={{ display:(form.isValid) ?'none' :'block' }}>
                                <h4>Please check the following errors</h4>

                                <ul>
                                    {
                                        Object.keys(form.errors).map(key =>

                                            <li key={key}> {form.errors[key]} </li>

                                        )
                                    }
                                </ul>
                            </div>

                        </Form>
                }
            </Formik>



        </div>
    )
}