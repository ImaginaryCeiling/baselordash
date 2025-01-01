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
              <h3 className="font-medium text-gray-500">Student Name</h3>
              <p>{request.studentName}</p>
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
            {request.status && (
              <div>
                <h3 className="font-medium text-gray-500">Status</h3>
                <div className="mt-1 flex items-center gap-2">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      request.status === 'red'
                        ? 'bg-red-500'
                        : request.status === 'yellow'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                  />
                  <span className="capitalize">{request.status}</span>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  