import { useFormik } from "formik";
import {useSchema} from '../components/ValedationLogIn'

export default function LogInPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: value => {
            alert(JSON.stringify(value));

        }, validationSchema: useSchema,
    })
    return (
        <>
            <div>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="text"
                        name="email"
                        placeholder="emil" />
                    {formik.errors.email ? formik.errors.email : ""}

                    <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        placeholder="password" />
                    {formik.errors.password ? formik.errors.password : ""}


                    <button type="submit">Login</button>
                </form>

            </div>

        </>
    )
}