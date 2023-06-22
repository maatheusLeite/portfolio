import './ActionButton.css'

export default function ActionButton(props) {

    let disabled = props.disabled 

    function showButton() {
        if(!disabled) {
            return (
                <a href={props.goTo} target={props.target} className={props.className}> {props.buttonLabel} </a>
            )
        }
    }

    return (
        showButton()
    )
}
