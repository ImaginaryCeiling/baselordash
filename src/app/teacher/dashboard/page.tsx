import { Header } from '@/components/header'
import { TeacherWelcomeSection } from './components/teacher_welcome-section'
import { TeacherRequestList } from './components/teacher_request-list'
import { teacherNewRequests, teacherActiveRequests } from '@/lib/data'

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeacherWelcomeSection 
          newRequestsCount={teacherNewRequests.length} 
          activeRequestsCount={teacherActiveRequests.length} 
        />
        <div className="space-y-8 p-6 pt-0">
          <TeacherRequestList 
            title="New Requests" 
            requests={teacherNewRequests} 
          />
          <TeacherRequestList 
            title="Active Requests" 
            requests={teacherActiveRequests}
            showAddButton 
          />
        </div>
      </main>
    </div>
  )
}

