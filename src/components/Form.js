import { useEffect, useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comments, setComments] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (!name) {
            console.log("error for name");
            errors.push("Please enter your Name");
        }
        if (!email.includes("@")) {
            errors.push("Please provide a valid Email");
        }

        // console.log(errors);
        setValidationErrors((prev) => errors);
        // console.log(validationErrors);
    }, [name, email]);
    const onSubmit = (e) => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            phone,
            comments,
            phoneType,
            submittedOn: new Date()
        };
        console.log(contactUsInformation);

        // Reset the form state.
        setName("");
        setEmail("");
        setPhone("");
        setComments("");
        setPhoneType("");
    };
    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName((prev) => e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail((prev) => e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="number"
                        value={phone}
                        onChange={(e) => {
                            setPhone((prev) => e.target.value);
                        }}
                    />
                    <select
                        name="phoneType"
                        onChange={(e) => setPhoneType(e.target.value)}
                        value={phoneType}
                    >
                        {" "}
                        <option value="" disabled>
                            Select a phone type...
                        </option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <input type="radio" name="staff" value="Student"/>
                    <label htmlFor="student">Student</label>
                    <input type="radio" name="staff" value="Instructor"/>
                    <label htmlFor="instructor">Instructor</label>
                </div>
                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea
                        id="comments"
                        name="comments"
                        onChange={(e) => setComments(e.target.value)}
                        value={comments}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form
