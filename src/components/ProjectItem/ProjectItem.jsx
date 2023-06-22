import  './ProjectItem.css'

import ActionButton from '../ActionButton/ActionButton'

export default function ProjectItem(props) {
    return (
        <div className='project-item'>
            <a href={props.goToVideo} target='_blank' className='projectItem-card'>
                <img src={props.imageUrl} alt='' className='projectItem-image-card'/>
            </a>

            <div className='project-description-container'>
                <h3 className='subtitle' > {props.subtitle} </h3>
                <p className='project-description'> {props.description} </p>

                <div className='project-buttons'>
                    <ActionButton 
                        goTo={props.goToGithub} 
                        target='_blank' 
                        buttonLabel='Github'
                        className='projects-action-btn'
                        disabled={props.disabledGithub}
                    />
                    <ActionButton 
                        goTo={props.goToVideo} 
                        target='_blank' 
                        buttonLabel='Vídeo demo'
                        className='projects-action-btn'
                        disabled={props.disabledVideo}
                    />
                </div>
            </div>
        </div>
    )
}
