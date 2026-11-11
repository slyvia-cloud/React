import logo from "../assets/Gemini.svg";
import {
    Search, PanelLeft,
    SquarePen,
    LayoutGrid,
    Clock,
    Images,
    Plus,
    Bolt,
    Clapperboard
} from "lucide-react"

function Sidebar(){

  const nav=[
    {
      name:"New chat",image:SquarePen,status:true
    },
    {name:"Library",image:LayoutGrid

    },
    {
      name:"Images",image:Images
    },
    {
      name:"Scheduled",image:Clock
    },
    {
      name:"Customize", image:Bolt
    },
    {
      name:"Videos", image:Clapperboard
    }

  ]

  return (
    <div className="h-screen w-75 text-white flex flex-col bg-[#1f1f1f] px-5 ">
        <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-2 ">
             <img src={logo}className="w-8 " />
             <span>Gemini</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Search/>
              <PanelLeft/>  
            </div>
        </div>
        <div className="flex flex-col mt-2">
          {nav.map((item)=>{
            const Image=item.image
            return (<button key={item.name} className={`flex gap-2 items-center pl-2 py-2 ${item.status?"bg-[#171717] text-white rounded-full":"hover:bg-[#2a2a2a] text-[#dedede] rounded-full"}`}>
           <Image size={20}/>
           {item.name}
            </button>)
          })}
        </div>
        <div className="mt-4">
          <p className="text-[#999] font-medium ">
            Notebooks
          </p>
          <p className="flex gap-3 mt-3 hover:bg-[#2a2a2a] text-[#dedede] p-2 rounded-full">
            <Plus/>
            New notebook
          </p>
        </div>

    </div>
  )  

}
export default Sidebar