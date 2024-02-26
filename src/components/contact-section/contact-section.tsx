import { ReactNode } from 'react';
import { ContactForm } from './contact-form/contact-form';

/**
 * Contact section component - allows email contact.
 * @returns { ReactNode } contact section component.
 */
export default function ContactSection(): ReactNode {
    return (
        <section className="pt-16 pb-32 flex flex-col items-center" id="contact">
            <div className="flex flex-col align-center md:my-12 w-full md:w-auto px-8 sm:px16 md:px-0 text-center md:text-left justify-center md:justify-start">
                <h1 className="font-heading-bold text-primary text-4xl sm:text-6xl 4xl:text-9xl mb-4">Get in touch!</h1>
                <p className="text-black text-lg sm:text-xl 4xl:text-4xl ">Want to collaborate or just generally chat?</p>
                <ContactForm/>
            </div>
        </section>
    );
}