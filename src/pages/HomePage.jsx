import CaretakerCard from '../components/CaretakerCard'

export default function HomePage() {
  const caretakers = [
    { id: 1, name: "Sita Devi", location: "Noida", price: "₹500/day" },
    { id: 2, name: "Raj Kumar", location: "Delhi", price: "₹600/day" }
  ]

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Caretakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caretakers.map(c => <CaretakerCard key={c.id} caretaker={c} />)}
      </div>
    </div>
  )
}
