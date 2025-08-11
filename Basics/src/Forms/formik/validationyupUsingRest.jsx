import { useFormik } from "formik"
import *as yup from "yup"

export function FormikYupRest() {


    const formik = useFormik({
        initialValues: {
            userName: '',
            mobile: '',
            city: '-1',
        },
        validationSchema:yup.object({
           userName:yup.string().required("username is required"),
           mobile:yup.string().required('mobile required').matches(/\+91\d{10}/, 'invalid mobile')
        }),
        onSubmit: (user) => {
            console.log(user);

        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>userName</dt>
                    <dd><input type="text" placeholder="add your userName" name="userName" {...formik.getFieldProps("userName")}  value={formik.values.userName} /></dd>
                    <dd className="text-danger">{formik.errors.userName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" placeholder="add mobile Number" name="mobile" {...formik.getFieldProps("mobile")} value={formik.values.mobile}/></dd>
                    <dd className="text-danger">{formik.errors.mobile}</dd>

                    <dt>City</dt>
                    <dd>
                        <select {...formik.getFieldProps("city")} name="city" value={formik.values.city}>
                            <optgroup label="select-City">
                                <option value="-1">select-City</option>
                                <option>Hyd</option>
                                <option>Pune</option>
                                <option>Bengluru</option>
                                <option>Nanded</option>
                            </optgroup>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.city}</dd>
                </dl>
                <button className="btn btn-warning mx-2" disabled={(formik.isValid)?false:true} type="submit" >Submit</button>
                <button className={(formik.dirty)?'d-inline':'d-none'} disabled={(formik.dirty)?false:true}  type="submit">Save</button>
            </form>
        </div>
    )

}