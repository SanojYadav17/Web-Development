import {useState} from "react";
export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const submitHandle = (e) => {
        e.preventDefault();

        if (formData.name === "" || formData.email === "") {
            alert("Please enter your name and email");
            return;
        }
        // if (formData.email === "") {
        //     alert("Please enter your email");
        //     return;
        // }
        // if (formData.message === "") {
        //     alert("Please enter your message");
        //     return;
        // }

        console.log(formData);
        alert("Form submitted successfully!");
    }
}
