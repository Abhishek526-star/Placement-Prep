// src/pages/admin/AdminAssessmentsPage.jsx
import { useState } from 'react'
import { ClipboardList, Plus, Clock, Award, CheckCircle2, Building2 } from 'lucide-react'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import EmptyState from '../../components/common/EmptyState'
import AssessmentBuilderModal from '../../features/admin/AssessmentBuilderModal'

export default function AdminAssessmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [assessments, setAssessments] = useState([])

  const handleAssessmentCreated = (newAssessment) => {
    setAssessments((prev) => [newAssessment, ...prev])
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Assessment Configuration
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Configure timed tests, passing scores, and section rules per company.
          </p>
        </div>
        <Button variant="primary" icon={Plus} onClick={() => setIsModalOpen(true)}>
          New Assessment
        </Button>
      </div>

      {assessments.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {assessments.map((item) => (
            <Card key={item.id}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                    color: 'var(--color-primary)', background: 'rgba(37,99,235,0.08)',
                    padding: '2px 8px', borderRadius: 'var(--radius-pill)', marginBottom: 6
                  }}>
                    <Building2 size={12} /> {item.companySlug}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14, fontSize: 13, color: 'var(--color-text-secondary)', margin: '14px 0', borderTop: '1px solid var(--color-border)', paddingTop: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Clock size={15} color="var(--color-text-muted)" />
                  <span>{item.durationMinutes} Mins</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Award size={15} color="var(--color-text-muted)" />
                  <span>Pass: {item.passingPercentage}%</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outline" size="sm">
                  Edit Questions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <EmptyState
            icon={ClipboardList}
            title="No assessments configured"
            message="Use the assessment builder to create timed mock test papers."
            actionText="Build First Assessment"
            onAction={() => setIsModalOpen(true)}
          />
        </Card>
      )}

      {/* Assessment Builder Modal */}
      <AssessmentBuilderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreated={handleAssessmentCreated}
      />
    </div>
  )
}
