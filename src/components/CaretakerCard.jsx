import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CaretakerCard({ name, city, price }) {
  return (
    <div className="bg-card text-white border border-soft shadow-lg rounded-xl p-5 transition-transform hover:scale-[1.02]">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-[#f1e8e1] flex items-center gap-1">
        <FaMapMarkerAlt className="text-white" /> {city}
      </p>
      <p className="text-lg font-bold mt-2">₹{price}/day</p>
    </div>
  );
}
