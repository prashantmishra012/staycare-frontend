export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black/60 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">MAKE YOUR VACATION COMFORTABLE</h1>
        <p className="text-lg max-w-2xl mb-6">
          Discover and book verified rooms, PGs, and caretaker services tailored for students, professionals, tourists, and families.
        </p>
        <button className="bg-accent hover:bg-[#a96f45] text-white px-6 py-3 rounded-full text-lg font-semibold transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
