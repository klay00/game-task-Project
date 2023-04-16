import { useFormik } from "formik";
import * as Yup from 'yup';

const useSchema=Yup.object().shape({
    email: Yup.string().email().max(20,'most be large then 20 charecter').min(6,'most be less then 6 charecter').required(),
    password:Yup.string().max(20,'most be large then 20 charecter').min(6,'most be less then 6 charecter').required(),
})

export default function LogInPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: value => {
            alert(JSON.stringify(value));
           
        },validationSchema:useSchema,
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