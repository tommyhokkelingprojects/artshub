import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (

  <main>
    <div className="w-full pt-[8px]">
      <Navbar/>
    </div>
    <div className="grid grid-cols-5 bg-blue-50 w-full h-full">
      {Array.from({ length: 5 }).map((_, divIndex) => (
        <div key={`div-${divIndex}`} className="m-[12px] p-[8px] rounded-lg bg-white">
          {Array.from({ length: 20 }).map((_, linkIndex) => (
            <a key={`link-${linkIndex}`} href="#">
              Dummy Link {linkIndex + 1}
            </a>
          ))}
        </div>
      ))}
    </div>    
  </main>
  );
}
