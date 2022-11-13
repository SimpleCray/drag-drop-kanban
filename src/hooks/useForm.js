import { useCallback, useState } from 'react';

function useForm(initialState, onSubmit) {
    const [form, setForm] = useState(initialState);

    const handleChange = useCallback((event) => {
        event.persist();
        setForm((form) => ({
            ...form,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        }));
    }, []);

    const resetForm = useCallback(() => {
        setForm(initialState);
    }, [initialState]);

    const handleSubmit = useCallback(
        (event) => {
            if (event) {
                event.preventDefault();
            }
            if (onSubmit) {
                onSubmit();
            }
        },
        [onSubmit]
    );

    return {
        form,
        handleChange,
        handleSubmit,
        resetForm,
        setForm,
    };
}

export default useForm;
