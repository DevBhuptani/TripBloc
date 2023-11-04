import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faInstitution } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <div className="fListColumn">
          <h2 class="fListHeader">Our Services</h2>
          <ul className="fList">
            <li className="fListItem">Hotels</li>
            <li className="fListItem">Flights</li>
            <li className="fListItem">Media Coverage</li>
          </ul>
        </div>
        <div className="fListColumn">
          <h2 class="fListHeader">About XcelTrip</h2>
          <ul className="fList">
            <li className="fListItem">About Us</li>
            <li className="fListItem">Contact Us</li>
            <li className="fListItem">Terms of service</li>
            <li className="fListItem">Privacy Policy</li>
          </ul>
        </div>
        <div className="fListColumn">
          <h2 class="fListHeader">Partner with XcelTrip</h2>
          <ul className="fList">
            <li className="fListItem">List Your Token</li>
          </ul>
        </div>
        <div className="fListColumn">
          <h2 class="fListHeader">Connect with us</h2>
          <ul className="socialFList">
            <li className="socialFListItem">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="socialIcon" />
              </a>
            </li>
            <li className="socialFListItem">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="socialIcon" />
              </a>
            </li>
            <li className="socialFListItem">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
              </a>
            </li>
            <li className="socialFListItem">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fText">
        Copyright © {new Date().getFullYear()} TripBloc
      </div>
    </div>
  );
};

export default Footer;
