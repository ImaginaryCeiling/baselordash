import { Request } from '../types/request'

export const teacherNewRequests: Request[] = [
  {
    id: '1',
    studentName: 'Arnav Chauhan',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/29/24',
  },
]

export const teacherActiveRequests: Request[] = [
  {
    id: '2',
    studentName: 'Arnav Chauhan',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
    status: 'green',
  },
  {
    id: '3',
    studentName: 'Arnav Chauhan',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
    status: 'yellow',
  },
  {
    id: '4',
    studentName: 'Arnav Chauhan',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
    status: 'red',
  },
]

export const studentInProgressRequests: Request[] = [
  {
    id: '1',
    teacherName: 'Sharee Garner',
    studentName: 'John Doe',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/29/24',
  },
  {
    id: '2',
    teacherName: 'Sharee Garner',
    studentName: 'John Doe',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/29/24',
  },
]

export const studentSentRequests: Request[] = [
  {
    id: '2',
    teacherName: 'Sharee Garner',
    studentName: 'John Doe',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
  },
  {
    id: '3',
    teacherName: 'Sharee Garner',
    studentName: 'John Doe',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
  },
  {
    id: '4',
    teacherName: 'Sharee Garner',
    studentName: 'John Doe',
    program: 'BofA Student Leaders Program',
    dueDate: '1/16/25',
    dateRequested: '12/20/24',
  },
]

