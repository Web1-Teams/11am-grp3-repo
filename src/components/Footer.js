import './Footer.css';

function Footer() {
return (
        <footer className="Footer">
        <div className="Footer-content"> 
        <div className="social-links">
        <a
            href="https://facebook.com"
            target="_blank"
            rel= "noopener noreferrer"
            className="social-icon facebook" >
            
            Facebook
            </a>
            

            <a 
            href="https://instagram.com"
            target="_blank"
            rel= "noopener noreferrer"
            className="social-icon instagram">
            Instagram
            </a>

            
            <a
            href="mailto:diabete@gmail.com"
            className="social-icon email">
            Email
            </a>
            
        </div>

        <div className="number">
        <p> Call Us: 123456789 </p>
        </div>
        </div>
        </footer>
        
);
}


export default Footer;