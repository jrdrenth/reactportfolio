import React from "react";
import Project from "../components/Project";


function Portfolio() {

  const projects = [    {
      image: '../assets/images/pawsperity.png',
      github: 'https://github.com/jrdrenth/pawsperity',
      website: 'https://infinite-lowlands-76487.herokuapp.com/',
      description: 'Pawsperity'
    },
    {
      image: '../assets/images/lifeCruiser.png',
      github: 'https://github.com/jrdrenth/LifeCruiser',
      website: 'https://jrdrenth.github.io/LifeCruiser/',
      description: 'Life Cruiser'
    },
    {
      image: '../assets/images/employeeDirectory.png',
      github: 'https://github.com/jrdrenth/employeedirectory',
      website: 'https://jrdrenth.github.io/employeedirectory/',
      description: 'Employee Directory'
    },    
    {
      image: '../assets/images/weatherDashboard.png',
      github: 'https://github.com/jrdrenth/WeatherDashboard',
      website: 'https://jrdrenth.github.io/WeatherDashboard/',
      description: 'Weather Dashboard'
    },
    {
      image: '../assets/images/techBlog.png',
      github: 'https://github.com/jrdrenth/TechBlog',
      website: 'https://murmuring-oasis-66556.herokuapp.com/',
      description: 'Tech Blog'
    },
    {
      image: '../assets/images/dailyPlanner.png',
      github: 'https://github.com/jrdrenth/DailyPlanner',
      website: 'https://jrdrenth.github.io/DailyPlanner/',
      description: 'Daily Planner'
    },
    {
      image: '../assets/images/noteTaker.png',
      github: 'https://github.com/jrdrenth/NoteTaker',
      website: 'https://dry-reef-38751.herokuapp.com/',
      description: 'Note Taker'
    },
    {
      image: '../assets/images/workoutTracker.png',
      github: 'https://github.com/jrdrenth/WorkoutTracker',
      website: 'https://immense-brook-60528.herokuapp.com/',
      description: 'Workout Tracker'
    }    
    
  ];

  // function handleProjectClick (event) {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextDog();
  // };


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
          {projects.map(({ view, github, website, description }) => {
            return (
              <Project view={view} github={github} website={website} description={description}/>
            );
          })}
        </tbody>
      </table>
    </main>
  </div>
  );

}

export default Portfolio;
