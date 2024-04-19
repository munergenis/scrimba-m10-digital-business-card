import twitterIcon from "../assets/twitter-icon.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"
import githubIcon from "../assets/github-icon.png"

export default function Footer() {
  return (
    <div className="w-full bg-stone-900">
      <div className="w-3/4 mx-auto mt-10 py-6 flex justify-around">
        <a href="#">
          <img className="w-7" src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="#">
          <img className="w-7" src={facebookIcon} alt="Facebook icon" />
        </a>
        <a href="#">
          <img className="w-7" src={instagramIcon} alt="Instagram icon" />
        </a>
        <a href="#">
          <img className="w-7" src={linkedinIcon} alt="LinkedIn icon" />
        </a>
        <a href="#">
          <img className="w-7" src={githubIcon} alt="Github icon" />
        </a>
      </div>
    </div>
  )
}
