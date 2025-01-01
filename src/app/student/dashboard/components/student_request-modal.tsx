import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog'
  import type { Request } from '../../../../../types/request'
  
  interface RequestModalProps {
    request: Request | null
    open: boolean
    onClose: () => void
  }
  
  export function RequestModal({ request, open, onClose }: RequestModalProps) {
    if (!request) return null
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div>
              <h3 className="font-medium text-gray-500">Teacher Name</h3>
              <p>{request.teacherName}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Program</h3>
              <p>{request.program}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Due Date</h3>
              <p>{request.dueDate}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Date Requested</h3>
              <p>{request.dateRequested}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  