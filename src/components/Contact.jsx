import { useState } from 'react';

function Contact() {
    const [helpType, setHelpType] = useState('');
    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:5000/api/data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ helpType, ...data }),
            });

            const result = await response.json();
            console.log("Server response:", result);
            alert("Form submitted successfully!");
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };


    return (
        <div className="container">
            <section id="main">
                <h2>Contact Us</h2>
                <p>
                    Place an order, make a reservation, submit feedback or ask a query.
                </p>

                {/* Person Details Form */}
                <div className="person">
                    <form className="form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="number">Phone No:</label>
                        <input type="tel" id="number" name="number" required />

                        <input type="submit" value="Submit" />
                    </form>
                </div>

                {/* Help Type Options */}
                <div className="helptype">
                    <h3>How Can We Help?</h3>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="reserve"
                            name="helpType"
                            value="reserve"
                            onChange={(e) => setHelpType(e.target.value)}
                        />
                        <label htmlFor="reserve">Make Reservation</label>
                    </div>

                    <div className="radio-option">
                        <input
                            type="radio"
                            id="order"
                            name="helpType"
                            value="order"
                            onChange={(e) => setHelpType(e.target.value)}
                        />
                        <label htmlFor="order">Order</label>
                    </div>

                    <div className="radio-option">
                        <input
                            type="radio"
                            id="feedback"
                            name="helpType"
                            value="feedback"
                            onChange={(e) => setHelpType(e.target.value)}
                        />
                        <label htmlFor="feedback">Query/Feedback</label>
                    </div>
                </div>

                {/* Conditional Rendering Instead of Hidden Class */}
                {helpType === 'reserve' && (
                    <form className="form">
                        <h3>Reservation Details</h3>
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" required />

                        <label htmlFor="time">Time:</label>
                        <input type="time" id="time" name="time" required />

                        <label htmlFor="guests">Guests:</label>
                        <input type="number" id="guests" name="guests" min="1" max="20" required />

                        <input type="submit" value="Book Reservation" />
                    </form>
                )}

                {helpType === 'order' && (
                    <form className="form">
                        <h3>Place an Order</h3>
                        <label htmlFor="orderMessage">Order:</label>
                        <textarea id="orderMessage" name="message" rows="4" required></textarea>
                        <input type="submit" value="Submit Order" />
                    </form>
                )}

                {helpType === 'feedback' && (
                    <form className="form">
                        <h3>Query / Feedback</h3>
                        <label htmlFor="feedbackMessage">Message:</label>
                        <textarea id="feedbackMessage" name="message" rows="4" required></textarea>
                        <input type="submit" value="Send Feedback" />
                    </form>
                )}
            </section>
        </div>
    );
}

export default Contact;