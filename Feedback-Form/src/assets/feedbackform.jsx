import { useState } from "react";
import "./style.css";
const FeedbackForm=()=>{
    const [formData,SetFormData]=useState({
        name:'',
        email:'',
        feedback:''
    });
    const handleChange=(event)=>{
        const {name,value}=event.target;
        SetFormData({
            ...formData,
            [name]:value
        })
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const confirmMessage=`
            Name:${formData.name}
            Email:${formData.email}
            Feedback:${formData.feedback}
        `;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmMessage}`);
             if (isConfirmed) {
               console.log('Submitting feedback:', formData);
               SetFormData({
                 name: '',
                 email: '',
                 feedback: ''
                });
               alert('Thank you for your valuable feedback!');
            }
        };
        return(
            <>
                <nav>
                    Tell us what you think
                </nav>
                <form onSubmit={handleSubmit}
                className="form-submit">
                    <h2>We'd Love to Hear From You!</h2>
                    <p>Please share your feedback with us.</p>
                    <input type="text" name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange} />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <textarea name="feedback" 
                    placeholder="Your Feedback"
                    value={formData.feedback}
                    onChange={handleChange}></textarea>
                    <button type="submit">Submit Button</button>

                </form>
            </>
        )

}
export default FeedbackForm;



