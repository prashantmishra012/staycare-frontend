import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      alert(`Logged in as ${email}`);
      navigate('/book'); // Go to booking after login
    } else {
      alert('Please fill in both fields.');
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
          <h2 className="text-3xl font-bold text-center text-base mb-6">Login to StayCare</h2>
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
          <button onClick={handleLogin} className="w-full bg-accent hover:bg-[#a96f45] text-white py-2 rounded-md transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
