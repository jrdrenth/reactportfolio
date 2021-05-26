import React from "react";
import Project from "../components/Project";


function Portfolio() {

  const projects = [{
      image: '/assets/images/pawsperity.png',
      github: 'https://github.com/jrdrenth/pawsperity',
      website: 'https://infinite-lowlands-76487.herokuapp.com/',
      description: 'Pawsperity'
    },
    {
      image: '/assets/images/lifeCruiser.png',
      github: 'https://github.com/jrdrenth/LifeCruiser',
      website: 'https://jrdrenth.github.io/LifeCruiser/',
      description: 'Life Cruiser'
    },
    {
      image: '/assets/images/employeeDirectory.png',
      github: 'https://github.com/jrdrenth/employeedirectory',
      website: 'https://jrdrenth.github.io/employeedirectory/',
      description: 'Employee Directory'
    },    
    {
      image: '/assets/images/weatherDashboard.png',
      github: 'https://github.com/jrdrenth/WeatherDashboard',
      website: 'https://jrdrenth.github.io/WeatherDashboard/',
      description: 'Weather Dashboard'
    },
    {
      image: '/assets/images/techBlog.png',
      github: 'https://github.com/jrdrenth/TechBlog',
      website: 'https://murmuring-oasis-66556.herokuapp.com/',
      description: 'Tech Blog'
    },
    {
      image: '/assets/images/dailyPlanner.png',
      github: 'https://github.com/jrdrenth/DailyPlanner',
      website: 'https://jrdrenth.github.io/DailyPlanner/',
      description: 'Daily Planner'
    },
    {
      image: '/assets/images/noteTaker.png',
      github: 'https://github.com/jrdrenth/NoteTaker',
      website: 'https://dry-reef-38751.herokuapp.com/',
      description: 'Note Taker'
    },
    {
      image: '/assets/images/workoutTracker.png',
      github: 'https://github.com/jrdrenth/WorkoutTracker',
      website: 'https://immense-brook-60528.herokuapp.com/',
      description: 'Workout Tracker'
    }    
  ];

  return (
    // <div>
    //   <h1 className="text-center">Projects</h1>

    //   {/* <Portfolio image={} handleBtnClick={handleBtnClick} /> */}
    //   <Project />
    // </div>
  <div>
    <main className='mt-5'>
      <table
        className='table table-striped table-hover table-condensed'
      >
        <thead>
          <tr>
            <th>View</th>
            <th>Name</th>
            <th>Website</th>
            <th>Github</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ image, github, website, description }) => {
            return (
              <Project key={image} view={image} github={github} website={website} description={description}/>
            );
          })}
        </tbody>
      </table>
    </main>
  </div>
  );

}

export default Portfolio;
