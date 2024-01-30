import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}.json`)
      .then(response => {
        console.log("loading student information");
        setStudent(response.data);
      });
  }, [id]);

  if (!student){
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{student.first_name} {student.last_name}</h1>
      {/* <p> image </p> */}
      <h2>{student.email} | {student.phone_number} | etc...</h2>
      <h3>Bio</h3>
      <p>{student.bio}</p>
      <h3>Skills</h3>
      <p>{student.skills}</p>
      <h3>etc...</h3>
      <p>etc... placeholder</p>
    </div>
  );
}
