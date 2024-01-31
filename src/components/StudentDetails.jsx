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
}



