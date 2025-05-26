import ReactDOM from "react-dom/client";
import './styles/main.scss';
import './styles/tablet.scss';
import App from "./App";
import store from "./store";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();
root.render(
   <QueryClientProvider client={queryClient}>
  <Provider store={store}>
  <App />
  
</Provider>
</QueryClientProvider>
);





