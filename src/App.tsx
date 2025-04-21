import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardPage from './pages/DashboardPage';
import DeliveriesPage from './pages/DeliveriesPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from './store';
import Header from './pages/Header';
import Footer from './pages/Footer';
import MainPage from './pages/Main';
const queryClient = new QueryClient();

const App: React.FC = () => {
 return (
 <Provider store={store}>
 <QueryClientProvider client={queryClient}>
 <Router>
 <Header />
 <div className="app">
 <MainPage />
 <Routes>
 <Route path="/" element={<DashboardPage />} />
 <Route path="/deliveries" element={<DeliveriesPage />} />
 </Routes>
 <Footer />
 <ReactQueryDevtools initialIsOpen={false} />
 </div>
 </Router>
 </QueryClientProvider>
 </Provider>
 );
};

export default App;

