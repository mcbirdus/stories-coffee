
import emailjs from '@emailjs/browser';

// Initialize EmailJS with the public key
emailjs.init("lpxBJ7uDB86v8Fl5J");

interface EmailParams {
    name: string;
    email: string;
    message: string;
    [key: string]: string | number | boolean;
}

/**
 * Send an email using EmailJS
 * @param templateParams - Parameters to be sent to the email template
 * @returns Promise with the response from EmailJS
 */
export const sendEmail = async (templateParams: EmailParams) => {
    try {
        const response = await emailjs.send(
            "stories-coffiee", // Service ID
            "stories-coffee-id", // Template ID
            templateParams
        );
        
        return {
            success: true,
            response
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            error
        };
    }
};
