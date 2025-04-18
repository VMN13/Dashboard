import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardPage from './pages/DashboardPage';
import DeliveriesPage from './pages/DeliveriesPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from './store';
const queryClient = new QueryClient();

const App: React.FC = () => {
 return (
 <Provider store={store}>
 <QueryClientProvider client={queryClient}>
 <Router>
 <div className="app">
 <header className="app-header">
 <nav>
 <ul>
 <li>
 <a href="/">Dashboard</a>
 </li>
 <li>
 <a href="/deliveries">Список доставок</a>
 </li>
 </ul>
 </nav>
 </header>
 <main className="app-content">
 <Routes>
 <Route path="/" element={<DashboardPage />} />
 <Route path="/deliveries" element={<DeliveriesPage />} />
 </Routes>
 </main>
 <ReactQueryDevtools initialIsOpen={false} />
 </div>
 </Router>
 </QueryClientProvider>
 </Provider>
 );
};

export default App;

