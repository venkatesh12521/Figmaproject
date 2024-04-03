"use client"
import React,{useState} from "react";
import SecondPage from "./secondpage";

// pages/index.tsx
const HomePage = () => {
  const [showSecondPage,setShowsecondPage]=useState(false);


  const togglePage=()=>{
  setShowsecondPage(!showSecondPage)}


  return (

  <div>
    {showSecondPage ? (
    <SecondPage togglePage={togglePage} />
    ) : (<div>
    <div className="bg-zinc-900">
      <header className="ml-8 pt-6">
        <h1 className="text-2xl font-bold underline  decoration-blue-500">Sports</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
            {/* Repeat this block for each team */}
            <div className="bg-zinc-700 p-3  shadow-lg transform hover:scale-105 transition duration-300 ml-3">
              <img src="https://timesofindia.indiatimes.com/photo/104569839/104569839.jpg" className=" " alt="" />
              <h3 className="text-xl font-semibold mb-2 mt-2">India</h3>
              <div className="bg-zinc-800">
                <table className="ml-2"><tr className="table-auto"><td className="px-0 py-0 text-sm">Total Events</td>
                <td className="px-8 py-0 text-sm">Sport</td></tr>
                <tr><td className="px-0 py-0">28 Events</td>
                <td className="px-8 py-0">Cricket</td></tr></table></div>
            </div>


            <div className="bg-zinc-700 p-3  shadow-lg transform hover:scale-105 transition duration-300 ml-3">
              <img src="https://timesofindia.indiatimes.com/photo/104569839/104569839.jpg" alt="" />
            <h3 className="text-xl font-semibold mb-2 mt-2"> India</h3>
              <div className="bg-zinc-800">
                <table className="ml-2"><tr className="table-auto"><td className="px-0 py-0 text-sm">Total Events</td>
                <td className="px-8 py-0 text-sm">Sport</td></tr>
                <tr><td className="px-0 py-0">28 Events</td>
                <td className="px-8 py-0">Cricket</td></tr></table></div></div>


              <div className="bg-zinc-700 p-3  shadow-lg transform hover:scale-105 transition duration-300 ml-3">
              <img src="https://static.toiimg.com/photo/104349841.cms" alt="" />
            <h3 className="text-xl font-semibold mb-2 mt-2">India</h3>
            <div className="bg-zinc-800">
                <table className="ml-2"><tr className="table-auto"><td className="px-0 py-0 text-sm">Total Events</td>
                <td className="px-8 py-0 text-sm">Sport</td></tr>
                <tr><td className="px-0 py-0">28 Events</td>
                <td className="px-8 py-0">Cricket</td></tr></table></div></div>


              <div className="bg-zinc-700 p-3  shadow-lg transform hover:scale-105 transition duration-300 ml-3" >
              <img src="https://static.toiimg.com/photo/104349841.cms" alt="" />
            <h3 className="text-xl font-semibold mb-2 mt-2">India</h3>
            <div className="bg-zinc-800">
                <table className="ml-2"><tr className="table-auto"><td className="px-0 py-0 text-sm">Total Events</td>
                <td className="px-8 py-0 text-sm">Sport</td></tr>
                <tr><td className="px-0 py-0">28 Events</td>
                <td className="px-8 py-0">Cricket</td></tr></table></div></div>
              <div className="bg-zinc-700 p-3  shadow-lg transform hover:scale-105 transition duration-300 mr-5 ml-3">
              <img src="https://th.bing.com/th/id/OIP.g6MD5-WhdKC6XhwJ-j73BQHaEK?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"className="h-700" alt="" />
            <h3 className="text-2xl mt-4 font-semibold mb-2">Advertisement title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam sequi, sit hic dolor velit corporis fuga voluptatum blanditiis optio harum, expedita adipisci dolorum. Nesciunt vitae neque illo doloremque inventore.</p></div>




            
          </div>
        </section>
        <div className="flex justify-center items-center">
        <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4" onClick={togglePage}>Light Mode</button>
          <button className="p-2 pl-4 pr-4 mb-4 bg-blue-700 rounded-lg flex justify-center text-sm">See More</button></div>
  
        
        <section className="bg-gradient-to-b from-emerald-900 to-fuchsia-900 ml-16 mr-16 h-150 pb-28 mb-10">
          <h2 className="text-5xl pt-10 font-semibold flex justify-center">Collection Spotlight</h2>
          <p className="flex justify-center ">Discover extraordinary moments with our spotlight collection metatickets-executive access to premium events for an unforgattable </p>
          <p className="flex justify-center mb-4">experience.Grab yours today!</p>
          <div className=" flex justify-center space-x-6 ...">
            <button className=" border border-sky-300 border-solid border-2  h-10 p-1 mt-40 mr-3 transform transition-transform duration=300 ease-in-out text-sky-300">&lt;</button>
            {/* Repeat this block for each collectible card */}
            <div className=" bg-gray-800 p-4 pr-2 shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe30kzLQ6LZ5Ro_-rV-iI1ekiixboSR1jLWQ&s" className="pr-1" alt="" />
              <div className="border-b-2 border-dotted border-gray-300 mt-3 mb-3 mr-1 border-dotted-long"></div>
              <h3 className="text-sm font-semibold mb-2 flex justify-center">Las Vegas Aviators</h3>
              <div className="flex justify-center text-xs flex items-center space-x-2">
              <span>OCT 15</span><div className="w-0.5 bg-white h-4"></div><span>SUN</span><div className="w-0.5 bg-white h-4"></div><span>4:30</span>
              </div>
              <p className="flex justify-center text-xs">Las Vegas Ballpark,Las vegas</p>
              <p className="flex justify-center text-sm">Nevada</p>
              <p className="flex justify-center bg-black text-white text-sm mr-2 mt-3 p-2">Orange Collection</p>
            </div>



            <div className=" bg-gray-800 p-4 pr-2 shadow-lg shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nFPZr3k8ax0m4FUUVgvGIq23w7waBIbNsFeUK7Y6cx4SdR5uDFF7WLdwtyb112_6zTk&usqp=CAU" className="pr-1" alt="" />
              <div className="border-b-2 border-dotted border-gray-300 mt-3 mb-3 mr-1 border-dotted-long"></div>
              <h3 className="text-sm font-semibold mb-2 flex justify-center">Las Vegas Aviators</h3>
              <div className="flex justify-center text-xs flex items-center space-x-2">
              <span>OCT 15</span><div className="w-0.5 bg-white h-4"></div><span>SUN</span><div className="w-0.5 bg-white h-4"></div><span>4:30</span>
              </div>
              <p className="flex justify-center text-xs">Las Vegas Ballpark,Las vegas</p>
              <p className="flex justify-center text-sm">Nevada</p>
              <p className="flex justify-center bg-black text-white text-sm mr-2 mt-3 p-2">Orange Collection</p>
            </div>




           

            
            <div className=" bg-gray-800 p-4 pr-2 shadow-lg shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe30kzLQ6LZ5Ro_-rV-iI1ekiixboSR1jLWQ&s" className="pr-1" alt="" />
              <div className="border-b-2 border-dotted border-gray-300 mt-3 mb-3 mr-1 border-dotted-long"></div>
              <h3 className="text-sm font-semibold mb-2 flex justify-center">Las Vegas Aviators</h3>
              <div className="flex justify-center text-xs flex items-center space-x-2">
              <span>OCT 15</span><div className="w-0.5 bg-white h-4"></div><span>SUN</span><div className="w-0.5 bg-white h-4"></div><span>4:30</span>
              </div>
              <p className="flex justify-center text-xs">Las Vegas Ballpark,Las vegas</p>
              <p className="flex justify-center text-sm">Nevada</p>
              <p className="flex justify-center bg-black text-white text-sm mr-2 mt-3 p-2">Orange Collection</p>
            </div>
            <button className="   border border-sky-300 border-solid border-2  h-10 p-1 mt-40 ml-2  transform transition-transform duration=300 ease-in-out text-sky-300 ">&gt;</button>
          </div>
        </section>
      </main>
      
    </div></div>)
}



    </div>
  );
};

export default HomePage;
