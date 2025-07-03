import { useState } from 'react';

export default function BookCaretakerPage() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');

  const handleBooking = () => {
    if (city && date && days) {
      alert(`Booked caretaker in ${city} from ${date} for ${days} day(s).`);
    } else {
      alert('Please fill out all booking fields.');
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
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-md border border-soft">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-base mb-4 sm:mb-6">Book a Caretaker</h2>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full mb-3 sm:mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mb-3 sm:mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="number"
            placeholder="Number of Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full mb-4 sm:mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button onClick={handleBooking} className="w-full bg-accent hover:bg-[#a96f45] text-white py-2 rounded-md transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
