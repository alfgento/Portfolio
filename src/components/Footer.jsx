import'./Footer.css'

function Footer() {
  
    return (
      <>
        <div className="footMenu">
            <ul className="infoMenu"><p>Information</p>
                <li><a href=''>About me</a></li>
                <li><a href=''>Contact</a></li>
                <li><a href=''>GDPR</a></li>
            </ul>
            <ul className="socialsMenu"><p>Socials</p>
                <li><a href='https://www.facebook.com/alfgento'><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href='https://www.instagram.com/afgento'><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href='https://www.linkedin.com/in/alfgento/'><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
        </div>
      </>
    )
  }
  
  export default Footer