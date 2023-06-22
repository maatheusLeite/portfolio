import './SocialMedia.css'

import email2 from '../../assets/images/email2.png'

import HeaderItem from '../HeaderItem/HeaderItem'

export default function SocialMedia(props) {
    return (
        <div className='social-media-container'>
            <div className='social-media-item social-media-svg'>
                <svg viewBox="0 8 72 75" strokeWidth={1.5}>
                    <g stroke-width="2"></g><g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g> 
                        <g data-name="Layer 2" id="Layer_2"> 
                            <rect class="cls-1" height="42.33" rx="4.61" ry="4.61" width="62" x="1" y="10.67"></rect> 
                            <polyline class="cls-2" points="5 16 32 32 59 16"></polyline> 
                            <line class="cls-2" x1="24.91" x2="5" y1="27.8" y2="44"></line> 
                            <line class="cls-2" x1="39.09" x2="59" y1="27.8" y2="45"></line> 
                        </g> 
                    </g>
                </svg>

                <span className='social-media-text-1'> {props.matheusLeiteEmail} </span>
            </div>            

            <div className='social-media-item'>
                <HeaderItem
                    className="github"
                    goTo="https://github.com/maatheusLeite/"
                    target="_blank"
                    width="50px" 
                    height="50px" 
                    viewBox="-2 1 43 40.8" 
                    path1="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772
                    0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989
                    0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74
                    1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0
                    0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068
                    4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296
                    7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093
                    10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                />

                <span className='social-media-text'> github.com/maatheusLeite </span>
            </div>
            
            <div className='social-media-item'>
                <HeaderItem
                    className="linkedin"
                    goTo="https://www.linkedin.com/in/matheus--leite/"
                    target="_blank"
                    width="50px" 
                    height="50px" 
                    viewBox="-10 -10 680 680" 
                    strokeWidth="15px"
                    path1="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
                    C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
                    c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
                    c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z" 
                />

                <span className='social-media-text'> linkedin.com/in/matheus--leite </span>
            </div>
        </div>
    )
}
