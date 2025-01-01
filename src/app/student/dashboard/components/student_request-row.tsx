import type { Request } from '../../../../../types/request'

interface RequestRowProps {
  request: Request
  onClick?: () => void
}

export function RequestRow({ request, onClick }: RequestRowProps) {
  return (
    <div
      onClick={onClick}
      className="grid cursor-pointer grid-cols-4 items-center gap-4 rounded-lg bg-gray-100 p-4 hover:bg-gray-200"
    >
      <div>{request.teacherName}</div>
      <div>{request.program}</div>
      <div>{request.dueDate}</div>
      <div>{request.dateRequested}</div>
    </div>
  )
}

