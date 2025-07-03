export default function CaretakerCard({ caretaker }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <h3 className="text-xl font-bold">{caretaker.name}</h3>
      <p className="text-gray-600">{caretaker.location}</p>
      <p className="text-green-600">{caretaker.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Book Now</button>
    </div>
  )
}
