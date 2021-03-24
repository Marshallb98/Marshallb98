import React from "react";
import Project from "../components/Project"
function ProjectDisplay() {
  const projectDemos = [
    { 
       id: "0", 
       name: "Budget-Tracker",
       repo:"https://github.com/Marshallb98/On-Offline-Budget",
       live:"https://ancient-lake-69270.herokuapp.com/",
       img: process.env.PUBLIC_URL + '/assets/pics/Budget.png',
     },
     {
         id: "1", 
         name:  "Weather-DashBoard",
       repo:"https://github.com/Marshallb98/WeatherDashboard",
       live:"https://marshallb98.github.io/WeatherDashboard/",
       img: process.env.PUBLIC_URL + '/assets/pics/Weather.png',
     },
     { 
         id: "2", 
         name: "Employee-Directory",
       repo:"https://github.com/Marshallb98/Employee-Directory",
       live:"https://marshallb98.github.io/Employee-Directory/",
       img: process.env.PUBLIC_URL + '/assets/pics/EmployeeD.png',
     },
     { 
         id: "3", 
         name: "RnRSearch",
       repo:"https://github.com/Marshallb98/RnRSearch",
       live:"https://marshallb98.github.io/RnRSearch/",
       img: process.env.PUBLIC_URL + '/assets/pics/RnR.png',
     },
    { 
     id: "4",    
     name: "Stay In",
       repo:"https://github.com/CalebTheCreative/Project-2",
       live:"https://stayingin.herokuapp.com/",
       img: process.env.PUBLIC_URL + '/assets/pics/StayIn.png',
     },
     {
         id: "5", 
         name: "Workout-Tracker",
       repo:"https://github.com/Marshallb98/Workout-Tracker",
       live:"https://infinite-wildwood-94019.herokuapp.com/",
       img: process.env.PUBLIC_URL + '/assets/pics/Workout.png',
     },
 ]
  return (
    <div>
<Project projectDemos={projectDemos}/>
    </div>
  );
}

export default ProjectDisplay;
