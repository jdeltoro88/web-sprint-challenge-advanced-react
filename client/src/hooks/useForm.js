// write your custom hook here to control your checkout form
import {useState} from 'react'




export const useForm = (initialValue) => {
 // inputs - handleChange, state (dynamically manage any number of inputs)
    const [values, setValues] = useState (initialValue)

    const handlechanges = e => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })
    }


return [values, handlechanges]

}
