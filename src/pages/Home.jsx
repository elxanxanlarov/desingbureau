import Navbar from "../layout/Navbar";
import HomeBgImage from "../assets/images/bg-images/home.png"
import ThreeCricle from "../components/ui/ThreeCricle";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HomeBgImage})`
      }}
    >
      <div className="w-full h-full px-16 relative">
        <ThreeCricle />

        <div className="w-full h-full flex items-center z-9">
          <div className="flex flex-col gap-16">
            <h1 className="text-white text-6xl font-bold">Leading architecture & <br />
              design studio in Baku</h1>
            <Link className="border border-white px-10 text-white  py-3 rounded-full w-fit">VIEW PROJECTS</Link>
          </div>
        </div>
        <div className=" w-full absolute bottom-16 left-0 px-16 text-2xl text-white flex items-center justify-between gap-4 z-9">
          <Link to="/projects" className="border-b-2 border-white py-3 w-full">
            Work places
          </Link>
          <Link to="/projects" className="border-b-2 border-white py-3 w-full">
            Educational
          </Link>
          <Link to="/projects" className="border-b-2 border-white py-3 w-full">
            Hospitality
          </Link>
          <Link to="/projects" className="border-b-2 border-white py-3 w-full">
            Residential
          </Link>
        </div>
      </div>
    </div>
  )
}