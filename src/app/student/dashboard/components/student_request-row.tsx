import type { Request } from '@/types/request'

interface RequestRowProps {
  request: Request
  onClick?: () => void
}

export function StudentRequestRow({ request, onClick }: RequestRowProps) {
  return (
    <div
      onClick={onClick}
      className="grid cursor-pointer grid-cols-4 items-center gap-4 rounded-lg bg-gray-100 p-4 hover:bg-gray-200"
    >
      <div>{request.teacherName}</div>
      <div>{request.program}</div>
      <div className="text-center">{request.dueDate}</div>
      <div className="text-center">{request.dateRequested}</div>
    </div>
  )
}

