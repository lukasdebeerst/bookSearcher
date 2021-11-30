import {FC} from "react";
import {useFormik} from "formik";

const Searchbar: FC<{query: string, setQuery: any}> = ({query, setQuery}) => {

    const formik = useFormik({
        initialValues: {
            query,
        },
        onSubmit: values => {
            setQuery(values.query)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input 
                id="query"
                name="query"
                type="text"
                onChange={e => {
                    formik.handleChange(e);
                    setQuery(e.currentTarget.value)
                }}
                value={formik.values.query}
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default Searchbar;