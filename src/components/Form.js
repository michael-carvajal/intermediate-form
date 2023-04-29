import { useEffect, useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneType, setPhoneType] = useState("Select a phone type...");
    const [bio, setBio] = useState("");
    const [affiliation, setAffiliation] = useState("")
    const [emailCheck, setEmailCheck] = useState()
    const [validationErrors, setValidationErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            bio,
            affiliation,
            emailCheck,
            submittedOn: new Date()
        };
        console.log(contactUsInformation);

        // Reset the form state.
        setName("");
        setEmail("");
        setPhone("");
        setBio("");
        setPhoneType("");
        setAffiliation("")
        setEmailCheck();
    };
    useEffect(() => {
        const errors = {};
        if (name.length < 3) {
            errors.name = "Name must be greater than 3 characters"
        }
        if (name.length > 15) {
            errors.name = "Name must be less than 15 characters"
        }
        if (!email.includes("@")) {
            errors.email = "Must be a valid email address"
        }
        if (phone.length < 10) {
            errors.phone = "Must be a valid phone number"
        }
        if (phoneType === "Select a phone type...") {
            errors.phoneType = "Must select a type of phone number"
        }
        if (!affiliation) errors.affiliation = "Must be affiliated with company"
        if (!bio) errors.bio = "Bio must not be empty"
        setValidationErrors(errors)
    }, [name, email, phone, phoneType, affiliation, bio])
    // console.log(affiliation);
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
                    {validationErrors.name && <p className="errors">{validationErrors.name}</p>}
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
                    {validationErrors.email && <p className="errors">{validationErrors.email}</p>}
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
                        <option value="Select a phone type..." disabled>
                            Select a phone type...
                        </option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                    {validationErrors.phone && <p className="errors">{validationErrors.phone}</p>}
                    {validationErrors.phoneType && <p className="errors">{validationErrors.phoneType}</p>}
                </div>
                <div>
                    <label htmlFor="student">Student</label>
                    <input type="radio" name="staff" value="Student" checked={affiliation === "Student"} onChange={() => setAffiliation("Student")} />
                    <label htmlFor="instructor">Instructor</label>
                    <input type="radio" name="staff" value="Instructor" checked={affiliation === "Instructor"} onChange={() => setAffiliation("Instructor")} />
                    {validationErrors.affiliation && <p className="errors">{validationErrors.affiliation}</p>}

                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />
                    {validationErrors.bio && <p className="errors">{validationErrors.bio}</p>}
                </div>
                <div>
                    <label htmlFor="notifications">Sign up for email notifications:</label>
                    <input type="checkbox" htmlFor="notifications" checked={emailCheck === true} onChange={() => setEmailCheck(!emailCheck)} />
                </div>
                <button disabled={Object.keys(validationErrors).length < 1 ? false : true}>Submit</button>
            </form>
        </div>
    );
}

export default Form
