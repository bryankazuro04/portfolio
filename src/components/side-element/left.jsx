import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./style.module.scss";

export default function SideElementLeft() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (event, username) => {
    if (username) {
      event.preventDefault();
      navigator.clipboard.writeText(username).then(() => {
        setCopied(username);
        setTimeout(() => setCopied(null), 1500);
      });
    }
  };

  const socialMedias = [
    { link: "https://linkedin.com/in/muhammad-alana-fauzan", label: "LinkedIn", icon: faLinkedin },
    { link: "https://github.com/bryankazuro04", label: "Github", icon: faGithub },
    { link: "https://instagram.com/bryan.kazuro", label: "Instagram", icon: faInstagram },
    { link: "https://facebook.com/bryankazuro04", label: "Facebook", icon: faFacebook },
    { link: "https://discord.com/", label: "Discord", icon: faDiscord, username: "@bryankazuro" },
  ];

  return (
    <>
      <aside className={`${styles["side__element--left"]} lg:fixed left-12 bottom-0`}>
        <ul
          className={`${styles["side__element--left-social-media"]} flex lg:flex-col max-lg:mx-8 items-center max-lg:justify-evenly gap-9 lg:gap-3 relative`}
        >
          {socialMedias?.map((socialMedia, index) => (
            <li key={index}>
              <a
                href={`${socialMedia.link}`}
                className={`${styles["social-media"]} text-lg inline-block relative`}
                aria-label={`${socialMedia.label}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => copyToClipboard(e, socialMedia.username)}
              >
                <FontAwesomeIcon icon={socialMedia.icon} />
              </a>
              {copied === socialMedia.username && (
                <span className="ml-4 -mt-1 py-1 px-2 rounded-md border border-green-500 text-green-300 bg-green-400/20 absolute">Copied</span>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
