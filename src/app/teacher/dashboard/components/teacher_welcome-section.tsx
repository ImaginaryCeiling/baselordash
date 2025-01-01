import { StatusCard } from './teacher_status-card'

interface WelcomeSectionProps {
  newRequestsCount: number
  activeRequestsCount: number
}

export function TeacherWelcomeSection({ newRequestsCount, activeRequestsCount }: WelcomeSectionProps) {
  return (
    <div className="flex items-center justify-between p-6">
      <h1 className="text-4xl font-bold">Hello, [teacherFirstName]</h1>
      <div className="flex gap-4">
        <StatusCard title="New Requests" count={newRequestsCount} />
        <StatusCard title="Active Requests" count={activeRequestsCount} />
      </div>
    </div>
  )
}

