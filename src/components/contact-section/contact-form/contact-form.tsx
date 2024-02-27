"use client"

import { ChangeEvent, ReactNode, useCallback, useRef, useState } from 'react';
import { clsx } from 'clsx';
import useFormSpreeSubmit from '../../../hooks/use-formspree-submit-hook';

/**
 * Contact form component for email submission.
 * @returns { ReactNode } contact form component.
 */
export const ContactForm = (): ReactNode => {
    /** whether name field is in focus. */
    const [isNameFocused, setIsNameFocused] = useState(false);
    /** whether email field is in focus. */
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    /** whether message field is in focus. */
    const [isMessageFocused, setIsMessageFocused] = useState(false);
    /** variables from form submission hook. */
    const { submitFormSpreeForm, response, error, inProgress } = useFormSpreeSubmit();
    /** message text area ref. */
    const messageTextarea = useRef<HTMLTextAreaElement>(null);
        
    /**
     * Handles message input key up events, dynamically resizing the text area.
     * @param { ChangeEvent<HTMLTextAreaElement> } e - the event object.
     * @returns { void }
     */
    const onMessageInputKeyUp = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        if (!messageTextarea?.current) return
        messageTextarea.current.style.height = "inherit";
        messageTextarea.current.style.height = `${messageTextarea.current.scrollHeight}px`;
    }

    /**
     * Handles form submission.
     * @param { any } event - the event object.
     * @returns { void }
     */
    const handleSubmit = useCallback((event: any): void => {
        event.preventDefault();
        submitFormSpreeForm(
            new FormData(event.target)
        );
    }, [submitFormSpreeForm])

    // if there is a response (on success). Return success message component.
    if (response) {
        return <ContactSuccessMessage/>
    }

    return (
        <form className="flex flex-col justify-center gap-12 align-center text-start mt-12 4xl:mt-20 4xl:w-[1000px] 4xl:gap-16" onSubmit={handleSubmit}>
            <div className="flex gap-12 flex-col lg:flex-row w-full">
                <div className="flex flex-col flex-1">
                    <label className={`${clsx({
                        'text-primary opacity-100': isNameFocused,
                        'text-black opacity-60': !isNameFocused
                    })} 4xl:text-xl`} htmlFor="name">Full Name</label>
                    <input
                        className={`bg-white text-black border-b-2 text-xl 4xl:text-2xl py-2 outline-none focus:border-b-primary focus:text-primary`}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="false"
                        data-1pignore="true"
                        placeholder="Enter your name"
                        onBlur={() => setIsNameFocused(false)}
                        onFocus={() => setIsNameFocused(true)}
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className={`${clsx({
                        'text-primary opacity-100': isEmailFocused,
                        'text-black opacity-60': !isEmailFocused
                    })} 4xl:text-xl`} htmlFor="email">Email Address</label>
                    <input
                        className={`bg-white text-black border-b-2 text-xl 4xl:text-2xl py-2 outline-none focus:border-b-primary focus:text-primary`}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        data-1pignore="true"
                        placeholder="Enter your email address"
                        onBlur={() => setIsEmailFocused(false)}
                        onFocus={() => setIsEmailFocused(true)}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className={`${clsx({
                    'text-primary opacity-100': isMessageFocused,
                    'text-black opacity-60': !isMessageFocused
                })} 4xl:text-xl`} htmlFor="message">Message</label>
                <textarea
                    ref={messageTextarea}
                    className={`bg-white text-black border-b-2 text-xl 4xl:text-2xl py-2 outline-none focus:border-b-primary focus:text-primary min-h-[100px] max-h-[500px]`}
                    name="message"
                    id="message"
                    autoComplete="off"
                    data-1pignore="true"
                    placeholder="Enter your message"
                    onBlur={() => setIsMessageFocused(false)}
                    onFocus={() => setIsMessageFocused(true)}
                    onChange={onMessageInputKeyUp}
                    rows={2}
                />
            </div>
            <div className="flex flex-col items-center w-full">
                <button
                    className="btn bg-white text-2xl 4xl:text-3xl text-black h-[50px] 4xl:h-[75px] px-16 w-[200px] 4xl:w-[250px] hover:bg-primary hover:text-white text-xl disabled:bg-white disabled:border-black"
                    type="submit"
                    disabled={inProgress}
                >
                    {!inProgress ?
                        <span>Submit</span> : 
                        <span className="loading loading-spinner loading-md text-primary"></span>
                    }
                </button>
                {error &&
                    <p className="mt-4 text-red-500">{error}</p>
                }
            </div>
        </form>
    )
}

/**
 * Success message component for contact form.
 * @returns { ReactNode } success message component.
 */
const ContactSuccessMessage = (): ReactNode => {
    return (
        <p className="text-black text-md mt-4 4xl:mt-8 4xl:text-2xl mb-96">Thanks! I'll get back to you as soon as possible. ❤️</p>
    )
}