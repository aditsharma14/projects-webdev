import Footer from "./footer";
import React from "react";
import "./style.css";
const Eventplanner=()=>{
    return(
        <div className="event-planner-container">
    <header>
        <h1>Welcome to event planner</h1>
        <section className="description">
            <p>Plan and organize your events effortlessly with Event Planner. From
        birthdays to corporate meetings, we've got you covered.</p>
        <button className="start-button">Let's get started</button>
        </section>
        <section className="event-categories">
             <ul>
            <h2>Social Events:</h2>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
        </ul>
        <ul>
            <h2>Entertainment Events:</h2>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
        </ul>
        <ul>
            <h2>Community Events:</h2>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
        </ul>
        </section>
        <section className="features">
            <h2>Features</h2>
            <ul>
            <li>Easy event creation and management</li>
            <li>Customizable event templates</li>
            <li>Guest list management</li>
            <li>Real-time collaboration</li>
            <li>Reminders and notifications</li>
        </ul>
        </section>
        <section className="testimonials">
            <h2>Testimonial</h2>
            <div className="testimonial">
            <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
            <p className="author">- Emily Johnson</p>
            </div>
            <div className="testimonial">
            <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
            <p className="author">- John Smith</p>
            </div>
        </section>
        <section className="contact">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" name="Email" />
                <input type="text" name="Message" />
                <button className="submit-form">Submit</button>
            </form>
        </section>
    </header>
</div>
    )
}
export default Eventplanner;