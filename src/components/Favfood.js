import React from 'react'
import fav1 from '../image/fav1.avif'
import fav2 from '../image/fav2.avif'
import fav3 from '../image/fav3.avif'
import fav4 from '../image/fav4.avif'
import fav5 from '../image/fav5.avif'
import fav6 from '../image/fav6.avif'
import fav7 from '../image/fav7.avif'
import fav8 from '../image/fav8.avif'
import fav9 from '../image/fav9.avif'
import fav10 from '../image/fav10.avif'
import '../Styles/Favfood.css'
const Favfood = () => {
    return (
        <div className='favfood'>
            <div>
                <h1>what's food on your mind?</h1>
            </div>
            <div className='favlogo'>
                <ul >
                    <li>
                        <a href="/"><img src={fav1} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav2} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav3} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav4} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav5} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav6} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav7} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav8} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav9} alt="fav1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src={fav10} alt="fav1" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Favfood
