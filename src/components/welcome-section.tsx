import { StatusCard } from './status-card'

interface WelcomeSectionProps {
  sentRequestsCount: number
  inProgressCount: number
}

export function WelcomeSection({ sentRequestsCount, inProgressCount }: WelcomeSectionProps) {
  return (
    <div className="flex items-center justify-between p-6">
      <h1 className="text-4xl font-bold">Hello, [firstName]</h1>
      <div className="flex gap-4">
        <StatusCard title="Sent Requests" count={sentRequestsCount} />
        <StatusCard title="In Progress Requests" count={inProgressCount} />
      </div>
    </div>
  )
}

