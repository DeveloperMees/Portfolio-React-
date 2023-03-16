import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitting Name ${name}, Phone ${phone}, Email ${email}, Message ${message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder={"Naam"}
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder={"Telefoonnummer"}
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder={"Email"}
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <textarea
                    id="message"
                    placeholder={"Bericht"}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button className={"button"} type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
