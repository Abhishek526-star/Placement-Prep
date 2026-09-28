// src/app/router.jsx
// Application router — all routes defined here.

import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/common/ProtectedRoute'
import LoginPage from '../features/auth/LoginPage'
import AuthCallbackPage from '../features/auth/AuthCallbackPage'

// Student App Pages
import AppLayout from '../components/layout/AppLayout'
import HomePage from '../pages/HomePage'
import CompanyPage from '../pages/CompanyPage'
import DSAPage from '../pages/DSAPage'
import SQLPage from '../pages/SQLPage'
import AssessmentsPage from '../pages/AssessmentsPage'
import StudyMaterialsPage from '../pages/StudyMaterialsPage'
import InterviewPage from '../pages/InterviewPage'
import ProgressPage from '../pages/ProgressPage'
import FrontendCodingPage from '../pages/FrontendCodingPage'
import ProfilePage from '../pages/ProfilePage'
import SelectionProcessPage from '../pages/SelectionProcessPage'
import SyllabusPage from '../pages/SyllabusPage'
import CognitivePage from '../pages/CognitivePage'
import MathBubblePage from '../pages/MathBubblePage'
import MemoryMazePage from '../pages/MemoryMazePage'
import PathFinderPage from '../pages/PathFinderPage'
import FullCognitiveMock from '../pages/FullCognitiveMock'
import CognitiveResults from '../pages/CognitiveResults'
import TechnicalMCQPage from '../pages/TechnicalMCQPage'
import PYQPage from '../pages/PYQPage'
import NotFoundPage from '../pages/NotFoundPage'

// Admin Pages
import AdminLayout from '../components/layout/AdminLayout'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminQuestionsPage from '../pages/admin/AdminQuestionsPage'
import AdminAssessmentsPage from '../pages/admin/AdminAssessmentsPage'
import AdminCompaniesPage from '../pages/admin/AdminCompaniesPage'
import AdminStudyMaterialsPage from '../pages/admin/AdminStudyMaterialsPage'

export const router = createBrowserRouter([
  // ── Public routes ────────────────────────────────────────────────
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/callback',
    element: <AuthCallbackPage />,
  },

  // ── Protected student routes ─────────────────────────────────────
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },

      // Global cognitive direct routes (defaults to Accenture)
      { path: 'cognitive', element: <CognitivePage /> },
      { path: 'cognitive/math-bubble', element: <MathBubblePage /> },
      { path: 'cognitive/bubble-math', element: <MathBubblePage /> },
      { path: 'cognitive/quick-fire-math', element: <MathBubblePage /> },
      { path: 'cognitive/memory-maze', element: <MemoryMazePage /> },
      { path: 'cognitive/path-finder', element: <PathFinderPage /> },
      { path: 'cognitive/full-mock', element: <FullCognitiveMock /> },
      { path: 'cognitive/assessment', element: <FullCognitiveMock /> },
      { path: 'cognitive/results', element: <CognitiveResults /> },

      // Company-scoped routes
      { path: ':companySlug',                   element: <CompanyPage /> },
      { path: ':companySlug/selection-process', element: <SelectionProcessPage /> },
      { path: ':companySlug/syllabus',          element: <SyllabusPage /> },
      { path: ':companySlug/cognitive',         element: <CognitivePage /> },
      { path: ':companySlug/cognitive/math-bubble', element: <MathBubblePage /> },
      { path: ':companySlug/cognitive/bubble-math', element: <MathBubblePage /> },
      { path: ':companySlug/cognitive/quick-fire-math', element: <MathBubblePage /> },
      { path: ':companySlug/cognitive/memory-maze', element: <MemoryMazePage /> },
      { path: ':companySlug/cognitive/path-finder', element: <PathFinderPage /> },
      { path: ':companySlug/cognitive/full-mock', element: <FullCognitiveMock /> },
      { path: ':companySlug/cognitive/assessment', element: <FullCognitiveMock /> },
      { path: ':companySlug/cognitive/results', element: <CognitiveResults /> },
      { path: ':companySlug/technical-mcq',     element: <TechnicalMCQPage /> },
      { path: ':companySlug/dsa',               element: <DSAPage /> },
      { path: ':companySlug/dsa/:questionSlug', element: <DSAPage /> },
      { path: ':companySlug/sql',               element: <SQLPage /> },
      { path: ':companySlug/sql/:questionSlug', element: <SQLPage /> },
      { path: ':companySlug/frontend',          element: <FrontendCodingPage /> },
      { path: ':companySlug/frontend/:slug',    element: <FrontendCodingPage /> },
      { path: ':companySlug/assessments',       element: <AssessmentsPage /> },
      { path: ':companySlug/assessments/:id',   element: <AssessmentsPage /> },
      { path: ':companySlug/pyqs',              element: <PYQPage /> },
      { path: ':companySlug/study-materials',   element: <StudyMaterialsPage /> },
      { path: ':companySlug/interview',         element: <InterviewPage /> },
      { path: ':companySlug/progress',          element: <ProgressPage /> },
    ],
  },

  // ── Protected admin routes ───────────────────────────────────────
  {
    path: '/admin',
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true,          element: <AdminDashboardPage /> },
      { path: 'questions',    element: <AdminQuestionsPage /> },
      { path: 'assessments',  element: <AdminAssessmentsPage /> },
      { path: 'companies',    element: <AdminCompaniesPage /> },
      { path: 'study-materials', element: <AdminStudyMaterialsPage /> },
    ],
  },

  // ── 404 ─────────────────────────────────────────────────────────
  { path: '*', element: <NotFoundPage /> },
])
