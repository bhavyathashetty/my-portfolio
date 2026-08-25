import PageTitle from "../components/PageTitle";
import BrandIcon from "../components/BrandIcon";
import { profile, socialLinks } from "../data/portfolioData";

const Contact = () => {
  return (
    <div>
      <PageTitle title="contact.">
        <p className="lead-copy">
          I'm always open to new opportunities and collaborations. Let's
          connect!
        </p>
      </PageTitle>

      <section className="contact-layout">
        <div className="contact-card">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>{profile.email}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>

          <div className="contact-socials">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon name={link.icon} />
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;
