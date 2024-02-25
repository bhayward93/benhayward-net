import { useCallback, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

/** Form spree error code to text mapping. */
const formSpreeErrorCodes: Record<string, string> = {
    'INACTIVE': 'This form has been disabled',
    'EMPTY': 'Please fill out all fields',
    'TYPE_TEXT': 'Please fill out all fields',
    'REQUIRED_FIELD_MISSING': 'Please fill out all fields',
    'REQUIRED_FIELD_EMPTY': 'Please fill out all fields',
    'TYPE_EMAIL': 'You must include a valid email'    
};

type FormSpreeSubmitHook = {
    submitFormSpreeForm: (formData: FormData) => Promise<void>;
    response: null;
    error: string;
    inProgress: boolean;
}

/**
 * Custom hook for submitting a form to FormSpree.
 * @returns { FormSpreeSubmitHook } - The form spree submit hook.
 */
export default function useFormSpreeSubmit(): FormSpreeSubmitHook {
    /** response from Formspree. */
    const [response, setResponse] = useState(null);

    /** error returned by Formspree. */
    const [error, setError] = useState('');

    /** whether a request is in progress. */
    const [inProgress, setInProgress] = useState(false);

    /**
     * Validate a given form for formspree submission.
     * @param { FormData } formData - the form data.
     * @returns { boolean } - whether the form is valid.
     */
    const validateForm = useCallback((formData: FormData): boolean => {
        if (
            !formData.get('email') ||
            !formData.get('name') ||
            !formData.get('message')
        ) {
            throw {code: 'REQUIRED_FIELD_MISSING'};
        }
        return true;
    }, []);

    /**
     * Parse a Formspree error code into a human-readable string.
     * @param { string } error - the error code.
     * @returns { string } - the human-readable error.
     */
    const parseErrorCode = useCallback((error: string): string => {
        return formSpreeErrorCodes[error] ?? 'An unknown error has occurred';
    }, []);

    /**
     * Submits a form to Formspree.
     * @param { FormData } formData - the form data.
     * @returns { Promise<void> } - awaitable.
     */
    const submitFormSpreeForm = useCallback(async(formData: FormData): Promise<void> => {
        setInProgress(true);
        setError('');
        setResponse(null);

        try {
            validateForm(formData); // throws exceptions on failure.
            const response: AxiosResponse<any> = await axios.post(
                'https://formspree.io/f/moqgenbj', 
                formData
            );
            setResponse(response.data);
        } catch(e: any) {
            console.error(e);
            setError(parseErrorCode(e?.response?.data?.errors[0]?.code ?? e?.code));
        }

        setInProgress(false);
    }, []);

    return { submitFormSpreeForm, response, error, inProgress };
};

