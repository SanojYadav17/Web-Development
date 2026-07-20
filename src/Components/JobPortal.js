import{ useState} from "react";
export default function JobPortal() {
    const [jobData, setJobData] = useState({
        employeeId: "",
        department_name: "",
        jobTitle: "",
        name: "",
        salary: ""
    });
    const submitHandle = (e) => {
        e.preventDefault();
        if (jobData.employeeId === "" || jobData.department_name === "" || jobData.jobTitle === "" || jobData.name === "" || jobData.salary === "") {
            alert("Please fill all the fields");
            return;
        }
        console.log(jobData);
        alert("Job data submitted successfully!");
    }
}