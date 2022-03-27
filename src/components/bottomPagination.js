import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomPagination() {
    let location = useLocation();
    const projectPathList = [
        "/wedding-project",
        "/mentor-project",
        "/metal-n-clay-logo-project",
        "/kathas-entertainment-logo-project",
        "/trident-logo-project",
      ];
      
      const getCurrProjectIndex = () => {
        const pathArr = location.pathname;
        const currProject = pathArr[pathArr.length - 1];
        const currProjectIndex = projectPathList.indexOf(currProject);
        return currProjectIndex;
      };
      
      const handlePrevProject = () => {
        let prevProjectIndex = getCurrProjectIndex() - 1;
        if (prevProjectIndex < 0) prevProjectIndex = projectPathList.length - 1;
        return `${projectPathList[prevProjectIndex]}`;
      };
      
      const handleNextProject = () => {
        let nextProjectIndex = getCurrProjectIndex() + 1;
        if (nextProjectIndex > projectPathList.length - 1) nextProjectIndex = 0;
        return `${projectPathList[nextProjectIndex]}`;
      };

    return (
        <div className="flex items-center justify-between w-full mt-10">
            <button className="flex items-center py-2 group circle-button" onclick="handlePrevProject()">
                <div className="relative flex items-center justify-center w-10 h-10">
                    <svg className="absolute top-0 left-0" version="1.1"
                        x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40"
                    >
                        <circle transform="rotate(-90 20 20)" className="circle" cx="20" cy="20" r="18" fill="transparent"
                            stroke="rgb(124, 58, 237)" stroke-width="2" />
                    </svg>
                    <svg className="transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    >
                        <path d="M13 19L20 12L13 5M4 12L20 12L4 12Z" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="transition-all group-hover:stroke-violet-600 stroke-gray-700" />
                    </svg>
                </div>
                <Link to={handlePrevProject()} className="ml-2 transition-all group-hover:text-violet-600 p-0.5">Previous Project</Link>
            </button>
            <button className="flex items-center py-2 group circle-button" onclick="handlePrevProject()">
                <Link to={handleNextProject()} className="ml-2 transition-all group-hover:text-violet-600 p-0.5">Next Project</Link>
                <div className="relative flex items-center justify-center w-10 h-10">
                    <svg className="absolute top-0 left-0" version="1.1"
                        x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40"
                    >
                        <circle transform="rotate(-90 20 20)" className="circle" cx="20" cy="20" r="18" fill="transparent"
                            stroke="rgb(124, 58, 237)" stroke-width="2" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    >
                        <path d="M13 19L20 12L13 5M4 12L20 12L4 12Z" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="transition-all group-hover:stroke-violet-600 stroke-gray-700" />
                    </svg>
                </div>
            </button>
        </div>
    )
}