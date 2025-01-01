import { Header } from '@/components/header'
import { WelcomeSection } from '@/components/welcome-section'
import { RequestList } from './components/teacher_request-list'
import { teacherNewRequests, teacherActiveRequests } from '@/lib/data'

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WelcomeSection 
          newRequestsCount={teacherNewRequests.length} 
          activeRequestsCount={teacherActiveRequests.length} 
        />
        <div className="space-y-8 p-6 pt-0">
          <RequestList 
            title="New Requests" 
            requests={teacherNewRequests} 
          />
          <RequestList 
            title="Active Requests" 
            requests={teacherActiveRequests}
            showAddButton 
          />
        </div>
      </main>
    </div>
  )
}

