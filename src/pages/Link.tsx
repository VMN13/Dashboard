import { Link, Outlet } from "react-router-dom"
export default function Linked() {
  return (
    <>
      <Link to="/deliveries">Deliveries</Link>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Link</h1>
    </>
  )
}