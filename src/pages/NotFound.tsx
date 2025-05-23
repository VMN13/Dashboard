import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error: any = useRouteError() // Add appropriate type here
  return (
    <div
      id='error-page'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage;
