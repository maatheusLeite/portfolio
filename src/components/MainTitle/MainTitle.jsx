import './MainTitle.css'

export default function MainTitle(props) {
    return (
        <h1 className='main-title-card'>
            <div className='main-title'>
                <span className='main-title color-light-gradient'> {props.title} </span>
                <span className='main-title highlight'> {props.titleHighlight} </span>
            </div>
            <span className='main-subtitle color-light-gradient'> {props.subtitle}  </span>
        </h1>
    )
}
