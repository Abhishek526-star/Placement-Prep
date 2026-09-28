// src/contexts/CompanyContext.jsx
// Manages current company context and injects dynamic branding colors

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { COMPANIES, getCompanyBySlug as getStaticCompanyBySlug } from '../config/companies'
import { fetchCompanies } from '../services/companyService'

const CompanyContext = createContext(null)

export function CompanyProvider({ children }) {
  const [activeSlug, setActiveSlug] = useState('accenture')
  const [companies, setCompanies] = useState(COMPANIES)
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(false)

  // Dynamically load all active companies (including any newly listed by Admin)
  const loadCompanies = useCallback(async () => {
    setIsLoadingCompanies(true)
    try {
      const { data, error } = await fetchCompanies()
      if (!error && data && data.length > 0) {
        setCompanies(data)
      }
    } catch (err) {
      console.warn('[CompanyContext] Error fetching dynamic companies:', err)
    } finally {
      setIsLoadingCompanies(false)
    }
  }, [])

  useEffect(() => {
    loadCompanies()

    const handleCatalogUpdate = (e) => {
      loadCompanies()
      const deletedSlug = e?.detail?.deletedSlug
      if (deletedSlug && activeSlug?.toLowerCase() === deletedSlug.toLowerCase()) {
        const fallback = companies.find((c) => c.slug.toLowerCase() !== deletedSlug.toLowerCase())
        if (fallback) {
          setActiveSlug(fallback.slug)
        }
      }
    }

    window.addEventListener('company-catalog-updated', handleCatalogUpdate)
    window.addEventListener('storage', handleCatalogUpdate)

    return () => {
      window.removeEventListener('company-catalog-updated', handleCatalogUpdate)
      window.removeEventListener('storage', handleCatalogUpdate)
    }
  }, [loadCompanies, activeSlug, companies])

  // Resolve current company from dynamic list with static fallback
  const currentCompany = companies.find(
    (c) => c.slug?.toLowerCase() === activeSlug?.toLowerCase()
  ) || getStaticCompanyBySlug(activeSlug) || companies[0] || COMPANIES[0]

  // Inject company branding colors dynamically
  useEffect(() => {
    if (currentCompany?.branding?.primaryColor) {
      document.documentElement.style.setProperty(
        '--color-primary',
        currentCompany.branding.primaryColor
      )
    }
    if (currentCompany?.branding?.primaryHover) {
      document.documentElement.style.setProperty(
        '--color-primary-hover',
        currentCompany.branding.primaryHover
      )
    }
  }, [currentCompany])

  const setCompanyBySlug = (slug) => {
    const found = companies.find(
      (c) => c.slug?.toLowerCase() === slug?.toLowerCase()
    ) || getStaticCompanyBySlug(slug)
    if (found) {
      setActiveSlug(found.slug)
    }
  }

  const getCompany = (slug) => {
    return companies.find(
      (c) => c.slug?.toLowerCase() === slug?.toLowerCase()
    ) || getStaticCompanyBySlug(slug)
  }

  const value = {
    currentCompany,
    companies,
    activeSlug,
    setCompanyBySlug,
    getCompanyBySlug: getCompany,
    reloadCompanies: loadCompanies,
    isLoadingCompanies,
    tracks: currentCompany?.tracks || [],
  }

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCompany() {
  const context = useContext(CompanyContext)
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider')
  }
  return context
}
