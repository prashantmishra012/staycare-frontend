import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email && password) {
      alert(`Registered as ${name}`);
      navigate('/login');
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black/50 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border border-soft">
          <h2 className="text-3xl font-bold text-center text-base mb-6">Register for StayCare</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button onClick={handleRegister} className="w-full bg-accent hover:bg-[#a96f45] text-white py-2 rounded-md transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
