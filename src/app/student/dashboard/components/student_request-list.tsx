'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, Plus } from 'lucide-react'
import { StudentRequestRow } from './student_request-row'
import { StudentRequestModal } from './student_request-modal'
import type { Request } from '@/types/request'

interface RequestListProps {
  title: string
  requests: Request[]
  showAddButton?: boolean
}

export function StudentRequestList({ title, requests, showAddButton }: RequestListProps) {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        {showAddButton && (
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Request
          </Button>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 text-sm font-medium text-gray-500">
        <Button variant="ghost" className="flex items-center gap-2 p-0">
          Teacher Name
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 p-0">
          Program
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 p-0">
          Due Date
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="flex items-center gap-2 p-0">
          Date Requested
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-2">
        {requests.map((request) => (
          <StudentRequestRow
            key={request.id}
            request={request}
            onClick={() => setSelectedRequest(request)}
          />
        ))}
      </div>
      <StudentRequestModal
        request={selectedRequest}
        open={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
      />
    </div>
  )
}

