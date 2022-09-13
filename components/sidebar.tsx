import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    ListBulletIcon,
    EnvelopeIcon,
    HomeIcon,
    UserIcon,
    EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'
import SidebarRow from './sidebarRow'
import {signIn, signOut, useSession} from 'next-auth/react'

function Sidebar() {
  const {data:session} = useSession();


  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
        <img className="m-3 h-10 w-10" src="https://i.imgur.com/zrWz4fP.png" alt="gwitter-icon" />
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={EnvelopeIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={ListBulletIcon} title="Lists" />
        <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out': "Sign In"} />
        <SidebarRow Icon={EllipsisHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar