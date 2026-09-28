// src/pages/HomePage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, ArrowRight, BookOpen, Code2, ClipboardList, Sparkles } from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useAuth } from '../contexts/AuthContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import SearchInput from '../components/forms/SearchInput'

export default function HomePage() {
  const { companies, setCompanyBySlug } = useCompany()
  const { profile, user } = useAuth()
  const [search, setSearch] = useState('')

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.tagline.toLowerCase().includes(search.toLowerCase())
  )

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Student'

  return (
    <div>
      {/* Hero Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(161, 0, 255, 0.08) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        padding: '32px 28px',
        marginBottom: 32,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Sparkles size={18} color="var(--color-primary)" />
          <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)' }}>
            Placement Preparation Hub
          </span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 8 }}>
          Welcome back, {displayName}!
        </h1>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', maxWidth: 640, lineHeight: 1.6 }}>
          Choose your target company to start practice rounds, mock assessments, and company-specific coding tracks.
        </p>
      </div>

      {/* Companies Search & Grid */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Target Companies
          </h2>
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
            Select a company to launch its tailored preparation modules
          </p>
        </div>
        <div style={{ width: 260 }}>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search company..."
          />
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
      }}>
        {filteredCompanies.map((c) => (
          <Link
            key={c.id}
            to={`/${c.slug}`}
            onClick={() => setCompanyBySlug(c.slug)}
            style={{ textDecoration: 'none' }}
          >
            <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 'var(--radius-md)',
                  background: c.branding.primaryColor, color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 18, flexShrink: 0
                }}>
                  {c.shortName.charAt(0)}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                    {c.name}
                  </h3>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    {c.tagline}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.5, flex: 1, marginBottom: 16 }}>
                {c.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--color-border)',
                paddingTop: 12,
              }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  {c.tracks.length} Syllabus Tracks
                </span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: 13, fontWeight: 700, color: c.branding.primaryColor
                }}>
                  Enter Hub <ArrowRight size={14} />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
