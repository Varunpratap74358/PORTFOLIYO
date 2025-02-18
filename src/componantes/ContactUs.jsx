import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:"",
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading,setLoading] =useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.send(
            'service_yr3yi8o', 
            'template_r8i6vgo', 
            formData, 
            '5lr6UpNU7hDZhG9Dz'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSubmitted(true);
            setError('');
            setFormData({ name: '', email: '', message: '' });
            setLoading(false)
        }).catch((err) => {
            console.error('FAILED...', err);
            setError('Failed to send message. Please try again later.');
            setLoading(false)
        });
    };

    return (
        <div name="Contact Us" className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">Feel free to reach out for any questions or inquiries!</p>

            {isSubmitted ? (
                <div className="text-center text-green-600">
                    Thank you! Your message has been sent successfully.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 min-h-[150px] max-h-[150px]"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            { loading ? "Sending..." : "Send Message" }
                        </button>
                    </div>
                    {error && <div className="text-center text-red-500 mt-4">{error}</div>}
                </form>
            )}
        </div>
    );
};

export default ContactUs;
