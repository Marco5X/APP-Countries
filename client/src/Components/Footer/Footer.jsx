import React from 'react'
import style from './Footer.module.css'


const Footer = () => {
    return (
            <div className={style.links}>
                <button>
                    <a href='https://github.com/Marco5X'>    
                       <img src={'https://raw.githubusercontent.com/seasonfif/github/master/icon/icon_192.png'} alt="" width='40px' />
                    </a>
                </button>
                <button>
                    <a href='https://www.linkedin.com/in/marcos-cruz-32b342209//'>                
                        <img src={'https://images.macrumors.com/t/GtCmSCZbDSyXr8rI8MAt-fM0Px0=/400x400/smart/article-new/2013/04/linkedinlogo.jpg'} alt="" width='40px' />
                    </a>
                </button>
            </div>
    )
}

export default Footer;