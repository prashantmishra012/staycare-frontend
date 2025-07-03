export default function BookCaretakerPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Book a Caretaker</h2>
      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Date" type="date" />
      <input className="border p-2 w-full mb-2" placeholder="Address" />
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Book</button>
    </div>
  )
}
