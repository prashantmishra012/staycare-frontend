import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-base text-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">StayCare</h1>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/login" className="hover:text-accent">Login</Link>
        <Link to="/register" className="hover:text-accent">Register</Link>
        <Link to="/book" className="hover:text-accent">Book</Link>
      </div>
    </nav>
  );
}
