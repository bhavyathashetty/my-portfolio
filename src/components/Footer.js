import BrandIcon from "./BrandIcon";
import { profile, socialLinks } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <BrandIcon name={link.icon} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
