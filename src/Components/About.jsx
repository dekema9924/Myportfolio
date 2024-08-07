
import mypic from '../assets/images/mypic 2.png'
const About = () => {
  return (
    <>
      <div className="pt-20 bg[#062c4f] sm:w-full sm:pl-0  pl-10 gap-7  text-gray-300 flex sm:flex-col-reverse ">
        <div className=" flex flex-col pl-5  sm:items-center ">
          <h1 className="text-3xl font-bold w-96 sm:w-[370px] text-white" style={{fontFamily: "Play"}}>My name is Daniel Ekema, and i Live in Georgia.</h1>
          <p className=" w-[700px] sm:w-[350px] mt-5 mb-2 leading-6 ">I am a senior at Kennesaw State University pursuing a bachelors degree
            in <span className="text-blue-400">Information Technology</span> with a concentration in <span className="text-blue-400" >CyberSecurity. </span>
            My aptitude lies in building responsive and interactive web applications from client side to server side.
            I primarly work with technologies such as <span className="text-blue-400">JavaScript, React, NodeJs and Mongodb</span> to build upscale projects.
          </p>

          <p className=" mb-4 sm:w-[340px] w-[600px]">Beyond learning, I also enjoy playing soccer ⚽️, reading webnovels or engage myself in multiplayer games such as Apex Legends and FIFA.</p>

          <blockquote>
              
          </blockquote>


          <h1 className="text-3xl font-bold mr-80 sm:mr-0 w-40 text-white mb-3" style={{fontFamily: "Play"}}>Soft Skills</h1>
          <p className="mb-4">Over the Years, I have built up some valuable skills I believe to be useful.</p>

          <ol className="flex flex-col gap-3 list-disc sm:list-none ">
            <li className="w-[400px] sm:w-[350px]"><span className="text-white font-bold">Time Management:</span> from working under pressure, and having to balance time for work, school and projects, I learnt to manage my time efficiently. </li>
            <li><span className="text-white font-bold">Communication:</span> I've picked up the abilty to communicate my thoughts effectively.  </li>
            <li><span className="text-white font-bold">Attention to details:</span> I take pleasure in making sure my projects are precise and accurate. </li>
          </ol>
        </div>
        <div className="flex flex-col items-center justify-center  mt-5 mb-5 sm:relative absolute right-10 sm:right-0  ">
          <img className="rounded-lg w-[600px] h-[470px] object-cover " src={mypic} alt="pfp-img" />
          <a href="https://docs.google.com/document/d/12ga3PcT8_9GfbxTzZy_f0NUrF7mdzz-I/edit?usp=sharing&ouid=113761548471156375971&rtpof=true&sd=true">
          <button class="bg-yellow-500 w-40 mt-5 m-auto hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span className='text-center pl-2'>Resume</span>
          </button>
           </a>

        </div>

      </div>
    </>
  )
}

export default About


