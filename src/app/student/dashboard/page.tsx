import { Header } from '@/components/header'
import { StudentWelcomeSection } from './components/student_welcome-section'
import { StudentRequestList } from './components/student_request-list'
import { studentInProgressRequests, studentSentRequests } from '@/lib/data'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <StudentWelcomeSection 
          sentRequestsCount={studentSentRequests.length} 
          inProgressCount={studentInProgressRequests.length} 
        />
        <div className="space-y-8 p-6 pt-0">
          <StudentRequestList 
            title="In Progress Requests" 
            requests={studentInProgressRequests}
            showAddButton 
          />
          <StudentRequestList 
            title="Sent Requests" 
            requests={studentSentRequests} 
          />
        </div>
      </main>
    </div>
  )
}

