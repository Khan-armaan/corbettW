import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [number_pass, setNumber_pass] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Create template parameters object
        const templateParams = {
            name: name,
            number: number,
            date: date,
            number_pass: number_pass
        };

        // Your EmailJS credentials
        const serviceId = 'service_91v72vd'  // Use your actual service ID
        const templateId = 'template_0nq8wq8' // Use your actual template ID
        const publicKey = 'UjsPkSvZZNxv5lNq7'  // Use your actual public key

        console.log('Sending email with params:', templateParams);

        try {
          
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            
          
            
            if (result.text === 'OK') {
                toast.success('Enquiry submitted successfully!', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                // Reset form
                setName('');
                setNumber('');
                setDate('');
                setNumber_pass('');
            }
        } catch (error) {
            console.error('Detailed error:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            toast.error(`Error submitting form: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
            <ToastContainer />
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg 
                    w-full max-w-md mx-4 md:mx-0">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 
                        text-center md:text-left text-gray-900">
                        Enquiry Form
                    </h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700 mb-2 text-sm md:text-base">
                    Date
                </label>
                <input onChange={(e) => setDate(e.target.value)}
                    type="date" 
                    name="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border rounded-md text-sm md:text-base"
                    required
                />
                {date && new Date(date) < new Date(new Date().toISOString().split('T')[0]) && (
                    <p className="text-red-500 text-sm mt-1">
                        Please select a future date
                    </p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 mb-2 text-sm md:text-base">
                    Name
                </label>
                <input 
                onChange={(e) => setName(e.target.value)}
                    type="text" 
                    name="name"
                    value={name}
                    className="w-full p-2 border rounded-md text-sm md:text-base"
                    placeholder="Enter your name"
                    minLength="4"  // Minimum length of 4 characters
                    required
                />
                {name && name.length < 4 && (
                    <p className="text-red-500 text-sm mt-1">
                        Name must be at least 4 characters long
                    </p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 mb-2">Mobile No.</label>
                <input 
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
                        if (value.length <= 10) { // Only update if length is 10 or less
                            setNumber(value);
                        }
                    }}
                    type="tel" 
                    name="mobile"
                    value={number}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"  // Enforce exactly 10 digits
                    title="Please enter exactly 10 digits"
                    maxLength="10"  // Prevent typing more than 10 characters
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-2">No. of Passengers</label>
                <input 
                onChange={(e) => setNumber_pass(e.target.value)}
                    type="number" 
                    name="passengers"
                    value={number_pass}
                    className="w-full p-2 border rounded-md"
                    min="1"
                    placeholder="Enter number of passengers"
                    required
                />
            </div>
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
            >
                {isSubmitting ? 'Submitting...' : 'Check Availability'}
            </button>
        </form>
                </div>
        </>
    )
}