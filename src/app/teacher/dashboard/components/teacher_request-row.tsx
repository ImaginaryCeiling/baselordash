'use client'

import { Request } from '@/types/request'
import { TeacherStatusIndicator } from './teacher_status-indicator'

interface RequestRowProps {
  request: Request
  onClick?: () => void
}

export function TeacherRequestRow({ request, onClick }: RequestRowProps) {
  return (
    <div
      onClick={onClick}
      className="grid cursor-pointer grid-cols-4 items-center gap-4 rounded-lg bg-gray-100 p-4 hover:bg-gray-200"
    >
      <div>{request.studentName}</div>
      <div>{request.program}</div>
      <div className="text-center">{request.dueDate}</div>
      <div className="flex items-center justify-between">
        <span className="flex-grow text-center">{request.dateRequested}</span>
        {request.status && (
          <TeacherStatusIndicator initialStatus={request.status} />
        )}
      </div>
    </div>
  )
}

