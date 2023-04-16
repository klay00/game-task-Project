import { useFormik } from "formik";
import * as Yup from 'yup';
export default function LogInPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: value => {
            alert(JSON.stringify(value));
        }
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

                    <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        placeholder="password" />

                    <button type="submit">Login</button>
                </form>

            </div>

        </>
    )
}