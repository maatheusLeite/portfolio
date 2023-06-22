import './HeaderItem.css'

export default function HeaderItem(props) {
    return (
        <a className={props.className} href={props.goTo} target={props.target}>
            <svg 
                width={props.width} 
                height={props.height} 
                viewBox={props.viewBox} 
                fill={props.fill}
                strokeWidth={props.strokeWidth}
            > 
                <g>
                    <path d={props.path1} />
                    if (props.path2) {
                        <path d={props.path2} />
                    }
                </g>
            </svg>
        </a>
    )
}
