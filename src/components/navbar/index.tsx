import './style.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function index() {
    const handleSocialLink = (platform: string) => {
        if (platform === 'linkedIn') {
            window.open('https://www.linkedin.com/in/prabin-kandel-762279238/', '_blank');
            return;
        }
        window.open('https://github.com/Kdlprabin', '_blank');
        return;
    }
    return (
        <div className='main'>
            <div className="logo">
                Prabin <span className='logo-tail'>Kandel</span>
            </div>
            <div className="social-links">
                <div onClick={() => handleSocialLink('linkedIn')} className='social-link'>
                    <AiFillLinkedin style={{ color: 'white', marginRight: '10px', fontSize: '24px' }} />
                    LinkedIn</div>
                <div onClick={() => handleSocialLink('github')} className='social-link'>
                    <AiFillGithub style={{ color: 'white', marginRight: '10px', fontSize: '24px' }} />
                    GitHub</div>
            </div>
        </div>
    )
}

export default index
