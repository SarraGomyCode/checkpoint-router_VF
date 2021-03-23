import React from 'react'
import '../Footer/Footer.css'
import image from '../../assets/logo_f_footer.png'


const Footer = () => {
    return (
        <div className='footer'>
        <footer className="blockquote-footer">
        © GoMyCode 2021 <cite title="Source Title"> Mohamed lahmer</cite>
        </footer>
        
        <p><img src={image} alt='logo' width='30px'/> <img src='logo_movie_night.jpg' alt='logo mn' width='37px'/></p>       
        
        </div>
    )
}

export default Footer
