import { useState } from "react"
import ProjectsBg1 from "../assets/images/bg-images/project-img1.png"
import ProjectsBg2 from "../assets/images/bg-images/project-img2.png"
import ProjectsBg3 from "../assets/images/bg-images/project-img3.png"
import ProjectsBg4 from "../assets/images/bg-images/project-img4.png"
import ThreeCricle from "../components/ui/ThreeCricle"

const projectsData = [
    {
        id: 1,
        title: "Concept development",
        description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
        bgImage: ProjectsBg1
    },
    {
        id: 2,
        title: "Design development",
        description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
        bgImage: ProjectsBg2
    },
    {
        id: 3,
        title: "Design consultancy",
        description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
        bgImage: ProjectsBg3
    },
    {
        id: 4,
        title: "Author control services",
        description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
        bgImage: ProjectsBg4
    }
]

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null)
    const currentBg = hoveredProject
        ? projectsData.find(p => p.id === hoveredProject)?.bgImage
        : ProjectsBg1

    return (
        <div className="w-screen h-screen bg-cover bg-center transition-all duration-500 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentBg})`
            }}>
            <ThreeCricle />
            <div className="w-full h-full relative flex items-center text-white">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${index !== projectsData.length - 1 ? 'border-r-2 border-white' : ''} w-full h-full flex items-end cursor-pointer transition-all duration-300 hover:bg-black/20`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="px-10 pb-10 flex flex-col gap-5">
                            <h2 className="text-xl font-bold">{project.title}</h2>
                            <p className={`transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
