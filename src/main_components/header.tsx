import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { User } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Image src="/placeholder.svg" alt="PC Logo" width={48} height={48} className="h-12 w-12" />
      <Avatar>
        <AvatarFallback>
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    </header>
  )
}

