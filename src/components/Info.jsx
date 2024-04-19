import profilePicture from "../assets/profile-picture.png"
import emailIcon from "../assets/email-icon.png"

export default function Info() {
  return (
    <>
      <img
        className="profile-picture -mt-4"
        src={profilePicture}
        alt="Genís Muner profile picture"
      />
      <div className="w-4/5 m-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-6">Genís Muner</h1>
        <h2 className="text-sm text-orange-300">Frontend Developer</h2>
        <a className="text-xs mt-3 mb-4 underline" href="#">
          munergenis.website
        </a>
        <button className="flex items-center justify-center gap-x-2 bg-gray-100 text-gray-700 w-full py-1.5 rounded-md">
          <img className="w-3" src={emailIcon} alt="Email icon" />
          Email
        </button>
      </div>
    </>
  )
}
