
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import JournalsPage from './pages/JournalsPage';
import JournalDetailPage from './pages/JournalDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorDetailPage from './pages/AuthorDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import PromoPage from './pages/PromoPage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/about/MissionPage';
import AccessPolicyPage from './pages/about/AccessPolicyPage';
import RequirementsPage from './pages/about/RequirementsPage';
import DocumentsPage from './pages/about/DocumentsPage';
import NotFoundPage from './pages/NotFoundPage';
import { EditorInChiefPage } from './pages/editor-chief-page';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/journals" element={<JournalsPage />} />
              <Route path="/journals/:id" element={<JournalDetailPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/authors" element={<AuthorsPage />} />
              <Route path="/authors/:id" element={<AuthorDetailPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
              <Route path="/promo" element={<PromoPage />} />
              <Route path="/aims-and-purposes" element={<AboutPage />} />
              <Route path="/general-information" element={<MissionPage />} />
              <Route path="/open-access-policy" element={<AccessPolicyPage />} />
              <Route path="/requirements-to-articles" element={<RequirementsPage />} />
              <Route path="/normativedocuments" element={<DocumentsPage />} />
              <Route path="/editor-in-chief" element={<EditorInChiefPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
