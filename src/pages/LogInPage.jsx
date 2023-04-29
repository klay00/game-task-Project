import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useSchema } from '../components/ValedationLogIn'

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
            <div className="login-page">

                <form onSubmit={formik.handleSubmit}>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="text"
                        name="email"
                        placeholder="email" />
                    {formik.errors.email ? formik.errors.email : ""}

                    <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        placeholder="password" />
                    {formik.errors.password ? formik.errors.password : ""}

                    <button type="submit">
                        
                        Log in
                    </button>
                </form>

            </div>

        </>
    )
}