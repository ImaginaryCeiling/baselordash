import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Image src="/pc-logo.png" alt="PC Logo" width={48} height={48} className="h-12 w-12" />
      <Avatar>
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
    </header>
  )
}

