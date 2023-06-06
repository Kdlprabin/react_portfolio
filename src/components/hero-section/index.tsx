import './style.css'
import Cloud5 from '../../assets/cloud_5.svg';
import Cloud4 from '../../assets/cloud_4.svg';
import Cloud3 from '../../assets/cloud_3.svg';
import Cloud2 from '../../assets/cloud_2.svg';
import Cloud1 from '../../assets/cloud_1.svg';
import CloudBig from '../../assets/cloud_big.svg';
import CloudMid from '../../assets/cloud_mid.svg';
import CloudSmall from '../../assets/cloud_small.svg';
import Sun from '../../assets/sun.svg';
import Mountain1 from '../../assets/mountain1.svg';
import Mountain2 from '../../assets/mountain2.svg';
import Mountain3 from '../../assets/mountain3.svg';
import Mountain4 from '../../assets/mountain4.svg';
import Mountain5 from '../../assets/mountain5.svg';
import Train from '../../assets/train.svg';

function index() {
    return (
        <div className='hero-section'>
            <div className="clouds">
                <img src={CloudBig} alt="cloud" className="cloud-big" />
                <img src={CloudMid} alt="cloud" className="cloud-mid" />
                <img src={CloudSmall} alt="cloud" className="cloud-small" />
                <img src={Cloud5} alt="cloud" className="cloud1" />
                <img src={Cloud4} alt="cloud" className="cloud2" />
                <img src={Cloud3} alt="cloud" className="cloud3" />
                <img src={Cloud2} alt="cloud" className="cloud4" />
                <img src={Cloud1} alt="cloud" className="cloud5" />
            </div>
            <img src={Sun} alt="sun" className="sun" />
            <div className="mountains">
                <img src={Mountain1} alt="mountain" className="mountain1" />
                <img src={Mountain2} alt="mountain" className="mountain2" />
                <img src={Mountain3} alt="mountain" className="mountain3" />
                <img src={Mountain4} alt="mountain" className="mountain4" />
                <img src={Train} alt="train" className="train" />
                <img src={Mountain5} alt="mountain" className="mountain5" />
            </div>
            <div className="quote">
                "Code, React, Repeat. Fueling portfolio greatness, one line at a time."
            </div>
        </div>
    )
}

export default index
