import '../footer.css';
const Footer = () =>{
    return <footer>
        <div className='footer'>
            <div className='footer-left'>
                <ul>
                    <li><img src={require('../images/footer-logo.png')} alt=''/></li>
                    <li>Plot no. 1-24 Vihan Nagar, Alwal <br /> Hyderabad - Telangana Sate <br /> 500010</li>
                </ul>
            </div>
            <div className='footer-right'>
                    <div className='f-items'>
                        <ul>
                            <li>Home</li>
                            <li>Knowledge Centre</li>
                            <li>Our Mission</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className='f-items'>
                        <ul>
                            <li>Gallery</li>
                            <li>Value Satement</li>
                            <li>Ask a Legal Expert</li>
                        </ul>
                    </div>
                    <div className='f-items'>
                        <ul>
                            <li>Documents</li>
                            <li>FAQs</li>
                            <li>Registration</li>
                        </ul>
                    </div>
            </div>
        </div>
        <p className='c-right'>© 2022 Land Docs, India - Hyno Technologies</p>
    </footer>
}

export default Footer;