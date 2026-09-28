// src/pages/AssessmentsPage.jsx
import { useState } from 'react'
import { ClipboardList, Clock, HelpCircle, Award, Play, Sparkles } from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import EmptyState from '../components/common/EmptyState'
import AssessmentRunnerModal from '../features/assessments/AssessmentRunnerModal'

export default function AssessmentsPage() {
  const { currentCompany } = useCompany()
  const [isRunnerOpen, setIsRunnerOpen] = useState(false)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — Mock Assessments
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>
            Simulate real exam conditions with timed cognitive, technical, and coding assessment rounds.
          </p>
        </div>

        <Button
          variant="primary"
          icon={Play}
          onClick={() => setIsRunnerOpen(true)}
        >
          Launch Test Simulation
        </Button>
      </div>

      {/* Simulator Banner Card */}
      <Card style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, var(--color-surface) 100%)',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div style={{ maxWidth: 540 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            <Sparkles size={14} /> Exam Engine Simulation Ready
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px', color: 'var(--color-text-primary)' }}>
            Practice with the Timed Exam Interface
          </h3>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
            Experience the real exam environment with the 5-state question palette, live countdown timer with critical warning alerts, and instant score analysis.
          </p>
        </div>
        <Button variant="outline" size="sm" icon={Play} onClick={() => setIsRunnerOpen(true)}>
          Start Simulator (15 Min)
        </Button>
      </Card>

      {/* Database Empty State */}
      <Card>
        <EmptyState
          icon={ClipboardList}
          title="No company assessments in database yet"
          message={`Full-length company assessment papers for ${currentCompany?.name} will be imported after all platform engines are tested.`}
        />
      </Card>

      {/* Interactive Assessment Modal */}
      <AssessmentRunnerModal
        isOpen={isRunnerOpen}
        onClose={() => setIsRunnerOpen(false)}
        assessmentTitle={`${currentCompany?.name} Placement Test Simulator`}
        durationMinutes={15}
      />
    </div>
  )
}
