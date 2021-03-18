import React from 'react';

const JobBoardComponent = ({job ,  handleTagClick}) => {
    const tags = [job.role, job.level];

    if (job.tools) {
        tags.push(...job.tools);
    }

    if (job.languages) {
        tags.push(...job.languages)
    }

    return (
    <div key="{key}" className={`flex flex-col bg-white shadow-md my-16 mx-10 p-4 rounded
        ${ job.featured && 'border-l-4 border-black border-blue-400 border-solid'} sm:flex-row sm:my-4`}>
        <div className='sm:my-auto'>
            <img className='-mt-14 mb-4  w-20  sm:mt-0 sm:mr-4' src={job.logo} alt={job.company}></img>
        </div>
        <div className='flex flex-col justify-between  p-2 pb-6'>
            <h3 className='font-bold mb-2 text-blue-400'>
                {job.company}
                {job.new && 
                (<span className='text-white text-sm bg-blue-400 font-bold m-2 ml-4 py-1 px-2 rounded-full'>NEW</span>)
                }
                {job.featured && 
                (<span className='text-white text-sm bg-gray-800 font-bold m-2 py-1 px-2 rounded-full'>FEATURED</span>)
                }
            </h3>
            <h2 className='font-bold mb-2 text-xl'>{job.position}</h2>
            <p className='text-gray-500'>{job.postedAt} · {job.contract} · {job.location}</p>
        </div>
        <div className='flex flex-wrap items-center  pt-4 border-t-2 border-gray-200 border-solid 
                        sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
            {tags.map((tag, i) => 
            <span key={i} onClick={() => handleTagClick(tag)} className='text-blue-400 bg-blue-200 font-bold cursor-pointer m-2 p-2 rounded'>{tag}</span>)} 
            
        </div>
    </div>
    )}


export default JobBoardComponent;