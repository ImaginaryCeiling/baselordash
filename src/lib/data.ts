import { Request } from '../types/request'

export const teacherNewRequests: Request[] = [
  {
    id: '1',
    studentName: 'Liam Smith',
    teacherName: 'Olivia Brown',
    program: 'NASA High School Internship',
    dueDate: '2/10/25',
    dateRequested: '1/5/25',
  },
]

export const teacherActiveRequests: Request[] = [
  {
    id: '2',
    studentName: 'Liam Smith',
    teacherName: 'Olivia Brown',
    program: 'NASA High School Internship',
    dueDate: '2/10/25',
    dateRequested: '1/1/25',
    status: 'green',
  },
  {
    id: '3',
    studentName: 'Emma Johnson',
    teacherName: 'Olivia Brown',
    program: 'Summer Science Academy',
    dueDate: '2/15/25',
    dateRequested: '12/28/24',
    status: 'yellow',
  },
  {
    id: '4',
    studentName: 'Noah Williams',
    teacherName: 'Olivia Brown',
    program: 'Global Leadership Summit',
    dueDate: '3/1/25',
    dateRequested: '12/20/24',
    status: 'red',
  },
]

export const studentInProgressRequests: Request[] = [
  {
    id: '1',
    teacherName: 'Olivia Brown',
    studentName: 'Sophia Miller',
    program: 'National Art Fellowship',
    dueDate: '2/18/25',
    dateRequested: '1/2/25',
  },
  {
    id: '2',
    teacherName: 'Olivia Brown',
    studentName: 'James Wilson',
    program: 'Engineering Excellence Program',
    dueDate: '2/25/25',
    dateRequested: '1/3/25',
  },
]

export const studentSentRequests: Request[] = [
  {
    id: '2',
    teacherName: 'Olivia Brown',
    studentName: 'Sophia Miller',
    program: 'National Art Fellowship',
    dueDate: '2/18/25',
    dateRequested: '12/30/24',
  },
  {
    id: '3',
    teacherName: 'Olivia Brown',
    studentName: 'James Wilson',
    program: 'Engineering Excellence Program',
    dueDate: '2/25/25',
    dateRequested: '12/28/24',
  },
  {
    id: '4',
    teacherName: 'Olivia Brown',
    studentName: 'Mia Taylor',
    program: 'Civic Engagement Program',
    dueDate: '3/5/25',
    dateRequested: '12/25/24',
  },
]

