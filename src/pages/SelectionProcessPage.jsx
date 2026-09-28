// src/pages/SelectionProcessPage.jsx
// Company-Specific Selection Process & Recruitment Architecture

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Workflow, CheckCircle2, Clock, AlertTriangle, ArrowRight,
  Brain, FileCode, Headphones, Users, CheckSquare, Sparkles,
  ShieldCheck, Award, Briefcase, ChevronRight, HelpCircle,
  FileCheck, AlertCircle, Info, Target, Zap, ArrowDown,
  Globe, Database, Layers, Flame, Trophy
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { SELECTION_DATA_BY_COMPANY } from '../config/selectionProcesses'

export default function SelectionProcessPage() {
  const { currentCompany } = useCompany()
  const { companySlug } = useParams()
  const slug = companySlug || currentCompany?.slug || 'accenture'

  const companyData = SELECTION_DATA_BY_COMPANY[slug] || SELECTION_DATA_BY_COMPANY.accenture
  const [selectedSection, setSelectedSection] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, var(--color-surface) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        padding: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20
      }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              <Workflow size={13} /> {companyData.name} Recruitment Architecture
            </span>
            <Badge variant="danger">{companyData.ruleBadge}</Badge>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            {companyData.name} Selection Process & Rounds
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
            {companyData.ruleDescription}
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: 16,
          background: 'var(--color-surface)',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div>
            <div style={{ fontSize: 11, color: '#ef4444', textTransform: 'uppercase', fontWeight: 800 }}>Rule</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#ef4444' }}>{companyData.ruleBadge}</div>
          </div>
          <div style={{ width: 1, background: 'var(--color-border)' }} />
          <div>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Top Offer</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#10b981' }}>{companyData.topOffer}</div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.03) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.35)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: '#ef4444',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <AlertTriangle size={24} />
        </div>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            ⚠️ {companyData.ruleTitle}
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.55, marginTop: 2 }}>
            {companyData.ruleDescription}
          </div>
        </div>
      </div>

      {/* Recruitment Flowchart / Pipeline */}
      <Card style={{ padding: '28px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
              {companyData.name} Recruitment Pipeline & Stages
            </h2>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
              Official round progression, eligibility rules, and sectional breakdown for {companyData.updatedDate}.
            </p>
          </div>
          <Badge variant="primary">{companyData.updatedDate}</Badge>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {companyData.stages.map((stage, sIdx) => {
            const IconComponent = stage.icon || Layers
            const isSelected = selectedSection === stage.id

            return (
              <div
                key={stage.id}
                style={{
                  border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  background: isSelected ? 'rgba(37, 99, 235, 0.02)' : 'var(--color-bg)',
                  padding: '20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'all 0.15s ease'
                }}
              >
                {/* Stage Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: stage.iconBg || 'rgba(37, 99, 235, 0.1)',
                      color: stage.iconColor || 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: stage.iconColor || 'var(--color-primary)', textTransform: 'uppercase' }}>
                          {stage.badge}
                        </span>
                        <span style={{
                          fontSize: 10,
                          fontWeight: 800,
                          padding: '1px 6px',
                          borderRadius: 3,
                          background: stage.statusColor === '#10b981' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                          color: stage.statusColor || '#ef4444'
                        }}>
                          {stage.status}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--color-text-primary)', margin: '2px 0 0' }}>
                        {stage.title}
                      </h3>
                      <div style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 2 }}>
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>

                  {stage.link && (
                    <Link to={`/${slug}/${stage.link}`} style={{ textDecoration: 'none' }}>
                      <Button variant="outline" size="sm" style={{ gap: 6 }}>
                        {stage.linkText || 'Practice Now'} <ArrowRight size={13} />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Stage Summary */}
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {stage.summary}
                </p>

                {/* Sub-Rounds if Container Stage */}
                {stage.subRounds && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginTop: 4 }}>
                    {stage.subRounds.map((sub, subIdx) => {
                      const SubIcon = sub.icon || CheckSquare
                      return (
                        <div
                          key={subIdx}
                          style={{
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 12
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                              <div style={{
                                width: 28,
                                height: 28,
                                borderRadius: 6,
                                background: sub.iconBg || 'rgba(5, 150, 105, 0.1)',
                                color: sub.iconColor || '#059669',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <SubIcon size={16} />
                              </div>
                              <div>
                                <span style={{ fontSize: 10.5, fontWeight: 700, color: sub.iconColor || '#059669', textTransform: 'uppercase' }}>
                                  {sub.roundNumber}
                                </span>
                                <h4 style={{ fontSize: 14, fontWeight: 800, margin: 0, color: 'var(--color-text-primary)' }}>
                                  {sub.title}
                                </h4>
                              </div>
                            </div>

                            <div style={{ fontSize: 11.5, color: 'var(--color-text-muted)', marginBottom: 10 }}>
                              {sub.desc}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 10 }}>
                              {sub.modules.map((m, mIdx) => (
                                <div key={mIdx} style={{ fontSize: 12, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                                  <span style={{ color: sub.iconColor || 'var(--color-primary)', marginTop: 1 }}>•</span>
                                  <span>{m}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 600, marginBottom: 10 }}>
                              {sub.keyNote}
                            </div>
                            {sub.link && (
                              <Link to={`/${slug}/${sub.link}`} style={{ textDecoration: 'none' }}>
                                <Button size="sm" variant="outline" style={{ width: '100%', justifyContent: 'center', gap: 6 }}>
                                  {sub.linkText} <ArrowRight size={13} />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Specific Details list */}
                {stage.details && (
                  <div style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                      Key Evaluation Criteria & Guidelines:
                    </div>
                    {stage.details.map((d, dIdx) => (
                      <div key={dIdx} style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span style={{ color: stage.iconColor || 'var(--color-primary)', fontWeight: 800 }}>✓</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Roles rollout cards */}
                {stage.roles && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                    {stage.roles.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, var(--color-surface) 100%)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: 'var(--radius-md)',
                          padding: '14px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 6
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                          {r.title}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 900, color: '#10b981' }}>
                          {r.ctc}
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--color-text-muted)', marginTop: 4 }}>
                          {r.benchmark}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* Role & CTC Comparison Table */}
      <Card style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <Briefcase size={20} color="var(--color-primary)" />
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              {companyData.name} Roles & Compensation Breakdown
            </h2>
            <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: 0 }}>
              Performance across online assessment and coding determines your final package bracket.
            </p>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '10px 14px' }}>Role Profile</th>
                <th style={{ padding: '10px 14px' }}>Annual Package (CTC)</th>
                <th style={{ padding: '10px 14px' }}>Benchmark Required</th>
                <th style={{ padding: '10px 14px' }}>Key Responsibilities</th>
              </tr>
            </thead>
            <tbody>
              {companyData.rolesComparison.map((rc, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {rc.role}
                  </td>
                  <td style={{ padding: '14px', fontWeight: 800, color: '#10b981' }}>
                    {rc.ctc}
                  </td>
                  <td style={{ padding: '14px' }}>
                    <span style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(37, 99, 235, 0.08)', color: 'var(--color-primary)', fontSize: 12, fontWeight: 600 }}>
                      {rc.benchmark}
                    </span>
                  </td>
                  <td style={{ padding: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    {rc.responsibilities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Launch Buttons */}
      <Card style={{ padding: '24px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 14 }}>
          Start Practicing for {companyData.name} Selection Rounds
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12 }}>
          {companyData.quickLinks.map((link, idx) => {
            const LinkIcon = link.icon || CheckSquare
            return (
              <Link key={idx} to={`/${slug}/${link.path}`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="outline"
                  wrap
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: 46,
                    padding: '10px 14px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                  }}
                >
                  <LinkIcon size={16} color={link.color || 'var(--color-primary)'} style={{ flexShrink: 0, marginRight: 10 }} />
                  <span style={{ flex: 1, wordBreak: 'break-word', lineHeight: 1.35 }}>
                    {link.title}
                  </span>
                  <ArrowRight size={14} color="var(--color-text-muted)" style={{ flexShrink: 0, marginLeft: 6 }} />
                </Button>
              </Link>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
