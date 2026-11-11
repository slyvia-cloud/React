import {LayoutDashboard,StretchVertical,Search,Bell,Megaphone,CircleQuestionMark,Circle} from "lucide-react"

export default function Navbar(){
    return(
    
        <div className="flex gap-50 pt-4">
            <div className="flex gap-2">
            
           <LayoutDashboard/>  
           <StretchVertical/> 
            
         </div>
         <div className="flex gap-90 ">
            <Search/>
            
            
         </div>
        </div>
       

    
    )
}