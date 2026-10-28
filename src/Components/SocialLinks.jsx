import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const homeLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sa3ed-al-haj-hussein/",
    Icon: LinkedInIcon,
  },
  { name: "GitHub", url: "https://github.com/Sa3ed-031", Icon: GitHubIcon },
  {
    name: "Facebook",
    url: "https://www.facebook.com/saed.alhajhosen",
    Icon: FacebookIcon,
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links flex gap-[0.8rem]">
      {homeLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          className="icon-btn flex items-center justify-center w-10 h-10 rounded-full"
        >
          <link.Icon className="icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
