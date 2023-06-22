import './Contact.css'

import email from '../../assets/images/email.png'

import ActionButton from '../ActionButton/ActionButton'
import SocialMedia from '../SocialMedia/SocialMedia'


export default function ContactMe() {
    const matheusLeiteEmail = 'matheusleite1027@gmail.com'

    return (
        <div className='contact' id='contact'>
            <h2 className='title'> Entre em <span className='highlight'> contato </span> </h2>

            <div className='contact-content-container'>
                <div className='contact-left-container'>
                    <span className='subtitle'> Envie um email </span>
                    
                    <img src={email} alt='' className='contact-email-image'/>
                    
                    <ActionButton 
                        goTo={'mailto:' + matheusLeiteEmail} 
                        buttonLabel='Enviar Email'
                        className='contact-action-btn-outlined'
                    />
                </div>
                
                <div className='contact-right-container'>
                    <SocialMedia matheusLeiteEmail={matheusLeiteEmail}/>
                </div>
            </div>
        </div>
    )
}
