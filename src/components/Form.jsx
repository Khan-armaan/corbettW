import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
        const serviceId = 'service_4im48v7'  // Use your actual service ID
        const templateId = 'template_dy7sksa' // Use your actual template ID
        const publicKey = 'RScNxoVnVvCSs2fNk'  // Use your actual public key

        console.log('Sending email with params:', templateParams);

        try {
            console.log('Attempting to send email...');
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            
            console.log('Email sent successfully:', result);
            
            if (result.text === 'OK') {
                alert('Enquiry submitted successfully!');
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
            alert(`Error submitting form: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
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
                    className="w-full p-2 border rounded-md text-sm md:text-base"
                    required
                />
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
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-2">Mobile No.</label>
                <input 
                onChange={(e) => setNumber(e.target.value)}
                    type="tel" 
                    name="mobile"
                    value={number}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your mobile number"
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