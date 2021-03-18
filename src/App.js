import React, {useState, useEffect} from "react";
import JobBoardComponent from './compnents/JobBoardComponent';
import data from './assets/data.json';



function App() {
   const [jobs, setJobs] = useState([]);
   const [filters, setFilters] = useState([]);

   useEffect(() => { 
      setJobs(data);  
   }, [])

   

   

   const filterFunction = ({role, level, tools, languages}) => {
    const tags = [role, level];


    if (filters.length === 0) {
      return true;
    }

    if (tools) {
        tags.push(...tools);
    }

    if (languages) {
        tags.push(...languages)
    }
    
    return tags.some(tag => filters.includes(tag));
   };

   const handleTagClick = (tag) => {
     // Avoid re adding the tag
     if (filters.includes(tag)) return;

      setFilters([...filters, tag]);
   }

   const handleFilterClick = (passedFilter) => {
      setFilters(filters.filter((f) => f !== passedFilter))
   }

   const clearFilters = () => {
     setFilters([]);
   }

   const filteredJobs = jobs.filter(filterFunction);


  return (
    <div className="App">
      <header className='bg-blue-200 mb-12'>
        <img src='/images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      <div className='container m-auto'>
        {
          filters.length > 0 && (
          <div className='flex flex-wrap bg-white shadow-md my-16 mx-10 p-4 rounded
         sm:flex-row'>
          {filters.map((filter, i) => (
            <div key={i} className='m-2 my-4' >
              <span 
              className='text-blue-400 bg-blue-200 font-bold pl-2 py-2 rounded'>
              {filter}
              <span className=' p-2 text-white  bg-blue-400 cursor-pointer ml-2 mr-0 rounded-r' onClick={() => 
              handleFilterClick(filter)}>×</span>
              </span>  
            </div> 
          ))}
          <button className='font-bold text-gray-300 m-2' onClick={clearFilters}>Clear</button>
          </div>
          )}
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map(job => (
            <JobBoardComponent 
              job={job}  
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )
      }
      </div>
    </div>
  );
}

export default App;

// TODOs
// 1. Study the design & json *
// 2. Create the Job board component *
// 3. Get the data from json *
// 4. Pass down data to JBC *
// 5. Style it *
// 5.b. Style mobile 
// 6. Filter component
// 7. Filter data
