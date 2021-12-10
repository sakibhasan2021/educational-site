import React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router';
import './CourseDetails.css';
import Data from './../data';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const {id}=useParams();
    const [course,setCourse]=useState([]);
    useEffect(()=>{
   const courseInfo=Data.find(course=>course.id===parseInt(id))
    setCourse(courseInfo);

    },[]);
    return (
        <div className="course-container">
            <Card className="text-center">
  <Card.Header className="text-center">{course.courseTitle}</Card.Header>
  <Card.Body>
    <Card.Title>{course.courseDetails}</Card.Title>
     <Card.Img variant="top" src={course.img} />
    <Card.Text>
     {course.courseOutline}
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted mt-5">{course.discount}% discount available</Card.Footer>
  <Link to='/product'>  <Button variant="success" className="mt-5 mb-3">back Courses</Button></Link>
  
</Card>
   
          
           
        </div>
    );
};

export default CourseDetails;


//    <div className="image-container">
//                 <img src={course.img} alt="img"/>
//             </div>
//            <div className="course-information">
//                  <h1>{course.courseTitle}</h1>
//                  <h3>{course.courseDetails}</h3>
//            </div>