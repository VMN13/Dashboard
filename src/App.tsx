import './styles.css'
import IMAGE from './image.png';
import LOGO from './react.svg'
export const App = () => {
  return (
    <div>
      <h1>Dashboard - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={IMAGE} alt="image" />
      <img src={LOGO} alt="logo" width="100px" />
    </div>
  )
}
