import { ChatBubbleBottomCenterIcon, HomeIcon,UserIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon, IdentificationIcon, } from '@heroicons/react/24/solid'
export const sidebarItems = [
    {
        title: "Home", icon: <HomeIcon className="w-6 h-6 text-white" />
    },
    {
        title: "Dashboard", icon: <ChatBubbleBottomCenterIcon className="w-6 h-6 text-white" />
    },
    {
        title: "Members", icon: <UserIcon className="w-6 h-6 text-white" />
    },
    {
        title: "Home", icon: <HomeIcon className="w-6 h-6 text-white" />
    },
    {
        title: "Dashboard", icon: <ChatBubbleBottomCenterIcon className="w-6 h-6 text-white" />
    },
    {
        title: "Members", icon: <UserIcon className="w-6 h-6 text-white" />
    }
]
const iconClassName = "w-5 h-5 text-white"
export const profileItems = [
    {title:'Profile', icon:<UserIcon className={iconClassName}/>},
    {title:'Details', icon:<IdentificationIcon className={iconClassName}/>},
    {title:'Logout', icon:<ArrowLeftOnRectangleIcon className={iconClassName}/>},
]