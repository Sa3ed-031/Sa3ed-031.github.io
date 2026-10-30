import clsx from "clsx";
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

// Hover effect (and small-phone size in the hero) per place the links appear
const variants = {
  hero: "hover:scale-103 hover:bg-indigo-brand upto-434:size-[2.1rem] upto-434:text-[2.4rem]",
  footer:
    "hover:transform-[scale(1.02)_translateY(-0.5rem)] hover:bg-indigo-brand",
};

const SocialLinks = ({ variant }) => {
  return (
    <div className="flex gap-[0.8rem] from-1537:gap-6 from-2000:gap-[1.4rem] upto-492:gap-2">
      {homeLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          // The icon takes its size from this link's font size
          className={clsx(
            "group flex size-10 items-center justify-center rounded-full border-3 border-indigo-brand text-[1.5rem] transition-all duration-400 ease-in-out hover:shadow-[0_0_20px_var(--color-indigo-brand)] from-1537:size-16 from-1537:overflow-hidden from-1537:border-none from-1537:text-[5.1rem] from-2000:size-20 upto-492:size-[2.2rem] upto-492:overflow-hidden upto-492:text-[2.6rem]",
            variants[variant],
          )}
        >
          <link.Icon
            fontSize="inherit"
            className="text-indigo-brand group-hover:text-navy"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
