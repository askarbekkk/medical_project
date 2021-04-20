import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className='w-1/3 px-3'>
            <div className='mb-3'>
                <img className='w-full'
                     src="https://mtqua.org/wp-content/uploads/2018/04/Zulekha-Dubai-1024x439.jpg" alt=""/>
                <h5>{project.title}</h5>
                <ul>
                    <li> {project.dateStart} - {project.dateEnd}</li>
                    <li>{project.manager}</li>
                    <li>{project.administrator}</li>
                </ul>
            </div>
        </div>

    );
};

export default ProjectCard;