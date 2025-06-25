import Image from "next/image";
import Menu from "../components/menu";

export default function Home() {
  return (
    <div className="main-content ">
    
      <p className="text-[2em] font-bold">About me</p>
      <p className="text-[1.2em] mt-[1em]">Hi, I'm <span className="font-bold">Nam</span>, a researcher and developer passionate about Human-Computer Interaction, Artificial Intelligence, and immersive technologies like Virtual and Augmented Reality. My work focuses on designing novel interaction techniques that enhance user experience and bridge the gap between humans and intelligent systems. Welcome to my personal site, feel free to explore my projects, publications, and ongoing research.</p>
      
      <div className="mt-[2em]">
        <p className="text-[1.2em] font-bold">Education</p>
        <div className="mt-[1em] space-y-[1.5em]">
        
          
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.3em] font-semibold">Master of Science in Computer Science</p>
            <p className="text-[1.1em] text-gray-600">University of Science, VNU-HCM</p>
            <p className="text-[0.9em] text-gray-500">2023 - Now</p>
           
          </div>
          
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.3em] font-semibold">Bachelor of Science in Information Technology</p>
            <p className="text-[1.1em] text-gray-600">University of Science, VNU-HCM</p>
            <p className="text-[0.9em] text-gray-500">2018 - 2022</p>
            <p className="text-[1em] mt-[0.5em] ">GPA: 3.96/4.0</p>
            <p className="text-[1em] mt-[0.5em] italic">Thesis: "Design and Development of An Immersive Collaborative Virtual Environment
            for Tour Guiding Training"</p>
            <p className="text-[1em] mt-[0.5em] italic">Advisors:  Khanh-Duy Le, Minh-Triet Tran</p>
          </div>
        </div>
      </div>

      <div className="mt-[2em]">
        <p className="text-[1.2em] font-bold">Experience</p>
        <div className="mt-[1em] space-y-[1.5em]">
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.3em] font-semibold">Researcher</p>
            <p className="text-[1.1em] text-gray-600">SELAB, University of Science, VNU-HCM</p>
            <p className="text-[0.9em] text-gray-500">2021 - Now</p>
            <p className="text-[1em] mt-[0.5em] text-gray-700">Conducting research on Human-Computer Interaction, XR technologies, and AI-enabled interaction.</p>
          </div>

          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.3em] font-semibold">Teaching Assistant</p>
            <p className="text-[1.1em] text-gray-600">University of Science, VNU-HCM</p>
            <p className="text-[0.9em] text-gray-500">2022 - Now</p>
            <p className="text-[1em] mt-[0.5em] text-gray-700">Intro2HCI, OOP, Web Development, Game/3D Application Development, Mobile Development, etc.</p>
          </div>
        </div>
      </div>

      <div className="mt-[2em]">
        <p className="text-[1.2em] font-bold">Skills</p>
        <div className="mt-[1em] space-y-[1.5em]">
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.2em] font-semibold ">Technical Skills</p>
            <div className="mt-[0.5em] flex flex-wrap gap-[0.5em]">
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">AR/VR/MR Development</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">Web Development</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">Mobile Development</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">ML Model Deployment</span>
            </div>
          </div>
          
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.2em] font-semibold ">Programming Languages & Frameworks</p>
            <div className="mt-[0.5em] flex flex-wrap gap-[0.5em]">
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">Unity</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">React.js</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">C#</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">Python</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">SQL</span>
            </div>
          </div>
          
          <div className="border-l-4 border-[#395a94] pl-[1em]">
            <p className="text-[1.2em] font-semibold ">Others</p>
            <div className="mt-[0.5em] flex flex-wrap gap-[0.5em]">
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">System Design</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">UX Design</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">User Study Design (sufficient)</span>
              <span className="bg-gray-100 px-[0.5em] py-[0.25em] rounded text-[0.9em]">Statistical Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
