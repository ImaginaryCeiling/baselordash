'use client'

import { Book, Presentation } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="mb-8">
        <Image src="/pc-logo.png" alt="PC Logo" width={200} height={200} />
      </div>
      <h1 className="mb-12 text-center text-4xl font-bold">
        Panther Creek
        <br />
        Letter of Rec
        <br />
        Portal
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold">Choose your role to continue:</h2>
        <button
          onClick={() => router.push('/student/dashboard')}
          className="flex w-64 items-center justify-center gap-2 rounded-lg bg-gray-100 p-4 text-lg hover:bg-gray-200"
        >
          <Book className="h-6 w-6" />
          Student
        </button>
        <span className="text-gray-500">or</span>
        <button
          onClick={() => router.push('/teacher/dashboard')}
          className="flex w-64 items-center justify-center gap-2 rounded-lg bg-gray-100 p-4 text-lg hover:bg-gray-200"
        >
          <Presentation className="h-6 w-6" />
          Teacher
        </button>
      </div>
    </div>
  )
}

