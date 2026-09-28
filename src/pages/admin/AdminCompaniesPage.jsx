import { useState, useEffect } from 'react'
import { Building2, Plus, Edit2, Trash2, AlertTriangle, Shield, Layers } from 'lucide-react'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import Modal from '../../components/common/Modal'
import { useCompany } from '../../contexts/CompanyContext'
import { deleteCompany } from '../../services/companyService'
import CompanyEditorModal from '../../features/admin/CompanyEditorModal'
import toast from 'react-hot-toast'

export default function AdminCompaniesPage() {
  const { companies, reloadCompanies } = useCompany()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [companyToDelete, setCompanyToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    reloadCompanies()
  }, [reloadCompanies])

  const handleEdit = (comp) => {
    setSelectedCompany(comp)
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setSelectedCompany(null)
    setIsModalOpen(true)
  }

  const handleSaved = () => {
    reloadCompanies()
  }

  const handleDeleteClick = (comp) => {
    setCompanyToDelete(comp)
  }

  const handleConfirmDelete = async () => {
    if (!companyToDelete) return
    setIsDeleting(true)
    try {
      await deleteCompany(companyToDelete.slug)
      toast.success(`${companyToDelete.name} deleted successfully!`)
      setCompanyToDelete(null)
      reloadCompanies()
    } catch (err) {
      toast.error(`Error deleting company: ${err.message}`)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Company Directory &amp; Configuration
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Control branding colors, enabled features, and syllabus tracks for each company.
          </p>
        </div>
        <Button variant="primary" icon={Plus} onClick={handleAddNew}>
          Add Company
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {companies.map((comp) => (
          <Card key={comp.id || comp.slug}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 8,
                background: comp.branding?.primaryColor || '#2563eb', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 16
              }}>
                {comp.shortName?.charAt(0) || comp.name?.charAt(0) || 'C'}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  {comp.name}
                </h3>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>/{comp.slug}</span>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 14, lineHeight: 1.5 }}>
              {comp.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                {comp.tracks?.length || 0} tracks configured
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Button variant="ghost" size="sm" icon={Edit2} onClick={() => handleEdit(comp)}>
                  Configure
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={Trash2}
                  onClick={() => handleDeleteClick(comp)}
                  style={{ color: 'var(--color-danger)' }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!companyToDelete}
        onClose={() => setCompanyToDelete(null)}
        title={`Delete ${companyToDelete?.name}?`}
        maxWidth={460}
        footer={
          <>
            <Button variant="ghost" onClick={() => setCompanyToDelete(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              loading={isDeleting}
              onClick={handleConfirmDelete}
              style={{ background: 'var(--color-danger)', borderColor: 'var(--color-danger)' }}
            >
              Confirm Delete
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <AlertTriangle size={20} />
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Are you sure you want to delete {companyToDelete?.name}?
            </p>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              This will remove <strong>{companyToDelete?.name}</strong>, its syllabus tracks, and all associated preparation modules from student views.
            </p>
          </div>
        </div>
      </Modal>

      {/* Company Editor Modal */}
      <CompanyEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        company={selectedCompany}
        onSaved={handleSaved}
      />
    </div>
  )
}
