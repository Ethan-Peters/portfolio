import React from 'react'

import './Welcome.css'
import Headshot from '../../assets/images/headshot.PNG'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element} className='welcome--content'>
                        <div className='welcome--content-item'>
                            <img src={Headshot} alt='logo' className='welcome--logo' />
                        </div>
                        <div className='welcome--content-item'>
                            <h1>Jonathan Peters</h1>
                            <h2>Smart Contract Engineer</h2>
                            <button className='welcome__cta-primary'>
                                Contact
                            </button>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Welcome