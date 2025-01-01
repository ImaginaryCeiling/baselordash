import { Header } from '@/components/header'
import { WelcomeSection } from '@/components/welcome-section'
import { RequestList } from './components/student_request-list'
import { studentInProgressRequests, studentSentRequests } from '@/lib/data'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WelcomeSection 
          sentRequestsCount={studentSentRequests.length} 
          inProgressCount={studentInProgressRequests.length} 
        />
        <div className="space-y-8 p-6 pt-0">
          <RequestList 
            title="In Progress Requests" 
            requests={studentInProgressRequests}
            showAddButton 
          />
          <RequestList 
            title="Sent Requests" 
            requests={studentSentRequests} 
          />
        </div>
      </main>
    </div>
  )
}

