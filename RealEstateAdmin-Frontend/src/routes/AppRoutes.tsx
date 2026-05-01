import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginPage from '../pages/LoginPage';
import RealEstateAdminLayout from '../components/layout/RealEstateAdminLayout';
import DashboardPage from '../pages/DashboardPage';
import BookingsPage from '../pages/BookingsPage';
import GuestsPage from '../pages/GuestsPage';
import ChatPage from '../pages/ChatPage';
import ReviewsPage from '../pages/ReviewsPage';
import EarningsPage from '../pages/EarningsPage';
import ReportsPage from '../pages/ReportsPage';
import AgencySettingsPage from '../pages/RealEstateSettingsPage';
import RoomsPage from '../pages/RoomsPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RealEstateAdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard"  element={<DashboardPage />} />
        <Route path="bookings"   element={<BookingsPage />} />
        <Route path="guests"     element={<GuestsPage />} />
        <Route path="rooms"      element={<RoomsPage />} />
        <Route path="messages"   element={<ChatPage />} />
        <Route path="reviews"    element={<ReviewsPage />} />
        <Route path="earnings"   element={<EarningsPage />} />
        <Route path="reports"    element={<ReportsPage />} />
        <Route path="settings"   element={<AgencySettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
