import React, { Suspense , lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from './store';
import Header from './pages/Header';
import Footer from './pages/Footer';
import MainPage from './pages/Main';
import NotFound from './pages/NotFound';
import ThemeToggle from './components/ThemeToggle';
const queryClient = new QueryClient();
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const DeliveriesPage = lazy(() => import('./pages/DeliveriesPage'));
  


const App: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.сurrentTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <>
    <Provider store={store}>
      <ThemeToggle />
    <QueryClientProvider client={queryClient}>
    <Router>
    <Header />

    <div className="app">
    <MainPage />
    <Suspense fallback={
      <div className='loading'><div className="lds-facebook">
        <div></div><div></div><div></div></div></div>}>  
    <Routes>
      <Route 
        path="/" 
        element={<DashboardPage />} />
      <Route 
        path="/deliveries" 
        element={<DeliveriesPage />} />
      <Route 
        path="*" 
        element={<NotFound />}  />
    </Routes>
    </Suspense>
    <Footer />
    <ReactQueryDevtools 
      initialIsOpen={false} />
    </div>
    </Router>
    </QueryClientProvider>
    </Provider>
    </>
  );
};

export default App;

