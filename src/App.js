import TypewriterComponent from "typewriter-effect";
import "./App.css"

function App() {
  return (
    <div className=" bg-[#1a1b26] font-mono h-screen bg-cover">
      <div className="p-2">
      <div className="flex">
      <span className=" text-[#bb9af7] md:text-5xl text-md font-bold">youHaveMe@roshan:$</span>
      <span className=" text-[#a9b1d6] md:text-5xl text-md font-bold mx-3" >
        <TypewriterComponent
        onInit={(typewriter)=> {
          typewriter
          .typeString(" Welcome to my profile")
          .pauseFor(300)
          .deleteChars(7)
          .typeString('<strong>WEBSITE</strong>')
          .pauseFor(800)
          .deleteAll()
          .typeString(" nothing interesting here")
          .start();
          }}/>
          </span>
          </div>
          <p className=" md:text-2xl text-md absolute md:top-24 top-18">
         
          <span className=" text-[#bb9af7]">┬─[youHaveMe@roshan ~/ ]  </span>
          <br></br>
          <span className="text-[#bb9af7]">╰──&gt; λ </span>
          <span className="text-[#a9b1d6]">cat about.txt
          </span>
          <p className="text-[#f3f4fa] mt-5">Roshan Kumar</p>
          <p className="text-[#f3f4fa] ">CSE(AI $ ML)</p>
          <p className="text-[#f3f4fa]">Heritage Institute of technology Kolkata</p>
          <p className="text-[#f3f4fa] mb-10">1st Year</p>


          <span className=" text-[#bb9af7]">┬─[youHaveMe@roshan ~/ ]  </span>
          <br></br>
          <span className="text-[#bb9af7]">╰──&gt; λ </span>
          <span className="text-[#a9b1d6]">cat iCanNotProgram.txt
          </span>
          <p className="text-[#f3f4fa] mt-5">
            Javascript</p>
          <p className="text-[#f3f4fa] ">Python</p>
          <p className="text-[#f3f4fa]">C++</p>
          <p className="text-[#f3f4fa]">Dart</p>
          <p className="text-[#f3f4fa]">Java</p>
          <p className="text-[#f3f4fa]">Bash Scripting*</p>
          <p className="text-[#f3f4fa] mb-10">(wants to use logo of these languages but i hate them.. so no)</p>

          <span className=" text-[#bb9af7]">┬─[youHaveMe@roshan ~/ ]  </span>
          <br></br>
          <span className="text-[#bb9af7]">╰──&gt; λ </span>
          <span className="text-[#a9b1d6]">cat thingsIhate.txt
          </span>
          <p className="text-[#f3f4fa] mt-5">
            Javascript</p>
          <p className="text-[#f3f4fa] ">Machine Learning (because its too complex)</p>
          <p className="text-[#f3f4fa]">CyberSecurity (hate a lot for no reason)</p>
          <p className="text-[#f3f4fa]">Linux (piece of shit)</p>
          <p className="text-[#f3f4fa]">CTF's are for waste of time</p>
          <p className="text-[#f3f4fa] mb-12">Open source (sucks)</p>
          <p className="text-center text-[#a9b1d6] text-5xl font-bold mb-10">i CANNOT be:</p>
          <div className="w-[100%] mx-auto">
            <p className="text-[#f3f4fa] text-3xl">.productive</p>
            <p className="text-[#f3f4fa] text-3xl">.useful</p>
            <p className="text-[#f3f4fa] text-3xl">.creative</p>
            <p className="text-[#f3f4fa] text-3xl">.helpful</p>
           <p className="text-[#f3f4fa] text-3xl">.dot operator, Unicode number: U+22C5</p>
           <p className="text-[#f3f4fa] text-3xl mb-14">(idk how to align it to center)</p>
          </div>

          <p className="text-center text-[#a9b1d6] text-5xl font-bold mb-10">more about ME:</p>
          <div className="w-[100%] mx-auto">
            <p className="text-[#f3f4fa] text-3xl">bored of my life</p>
            <p className="text-[#f3f4fa] text-3xl">can't reveal my age (sorry)</p>
            <p className="text-[#f3f4fa] text-3xl">useless developer</p>
            <p className="text-[#f3f4fa] text-3xl">big fan of <a href="https://www.youtube.com/watch?v=vjW8wmF5VWc"><span className=" underline text-blue-700">marvel</span></a> </p>
           <p className="text-[#f3f4fa] text-3xl">and yes, I use arch btw....</p>
           <p className="text-[#f3f4fa] text-3xl mb-14">uwufetch &gt;&gt;&gt;&gt; neofetch</p>
          </div>
          
          <p className="text-[#9aa3d8] text-3xl">©copyright something i forgor fogret whatever......</p>
          
          </p>
          
          </div>

          

          
    </div>
  );
}

export default App;
