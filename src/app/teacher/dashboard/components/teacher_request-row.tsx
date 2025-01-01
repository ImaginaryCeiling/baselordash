'use client'

import type { Request } from '../../../../../types/request'
import { StatusIndicator } from './status-indicator'

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
      <div>{request.studentName}</div>
      <div>{request.program}</div>
      <div>{request.dueDate}</div>
      <div className="flex items-center justify-between">
        <span>{request.dateRequested}</span>
        {request.status && (
          <StatusIndicator initialStatus={request.status} />
        )}
      </div>
    </div>
  )
}
