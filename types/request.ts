export interface Request {
  id: string
  teacherName: string
  studentName: string
  program: string
  dueDate: string
  dateRequested: string
  status?: 'red' | 'yellow' | 'green'
}

