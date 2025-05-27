import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error: any = useRouteError() 
  console.log(error)


  if (!isRouteErrorResponse(error)) {
    return (
    <div id='error-page'>
      <h1>{error.status} {error.statusText}</h1>
      <p>{error.data.message || 'Sory, an unexpected error has occurred.'}</p>
    </div>
  );
  }

  return (
    <div
      id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};



export default ErrorPage;
