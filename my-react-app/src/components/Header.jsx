
import {Download, Sparkle, SquarePen} from 'lucide-react'

function Header () {


    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div className='ml-auto flex gap-2 mr-4 mt-4'>
                <button className='flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white font-semibold gap-2 px-4 py-2 rounded-full'>
                    <Download size={15}/>
                    <span>Get app</span>              
                </button>

                <button className='flex items-center bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-full'>
                    <Sparkle className='w-6 h-6 '/>
                    <span>Upgrade</span>
                </button>
                <button className='p-4 rounded-full bg-gray-800 bg- text-white'>
                    <SquarePen size={15}/>
                </button>
            </div>
        </div>
    )


}
export default Header;