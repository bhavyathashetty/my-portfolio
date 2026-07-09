import { Link, NavLink } from "react-router-dom";
import BrandIcon from "./BrandIcon";
import { navItems, profile, socialLinks } from "../data/portfolioData";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-mark" aria-label={`${profile.name} home`}>
          {profile.initials}
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.slice(1).map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <BrandIcon name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
