import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Index from './Index';
import Layout from '../components/Layout'

export default function App() {
  return (
    <Layout>
    <div className="container">
      <AnimateSharedLayout>
        <Router>
          <Routes>
            <Route path="/:id" element={<Index />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </Router>
      </AnimateSharedLayout>
    </div>
    </Layout>
  );
}
