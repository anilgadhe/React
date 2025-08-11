import { useFormik } from "formik"

export function FormikDemo() {

    function validateUser(user) {
        var errors = { userName: '', mobile: '', city: '' };

        if (user.userName.length === 0) {
            errors.userName = 'userName required'
        }

        if (user.mobile.length === 0) {
            errors.mobile = "mobile required"
        } else {
            if (user.mobile.match(/\+91\d{10}/)) {
                errors.mobile = ""
            } else {
                errors.mobile = "invalid mobile"
            }

        }

        if (user.city === '-1') {

            errors.city = 'Please select your city';

        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            userName: '',
            mobile: '',
            city: '-1',
        },
        validate: validateUser,
        onSubmit: (user) => {
            console.log(user);

        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>userName</dt>
                    <dd><input type="text" placeholder="add your userName" name="userName" onChange={formik.handleChange}  value={formik.values.userName} /></dd>
                    <dd className="text-danger">{formik.errors.userName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" placeholder="add mobile Number" name="mobile" onChange={formik.handleChange} value={formik.values.mobile}/></dd>
                    <dd className="text-danger">{formik.errors.mobile}</dd>

                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="city" value={formik.values.city}>
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
                <button className="bt btn-warning" type="submit" >Submit</button>
            </form>
        </div>
    )

}