export default function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
      <h2 className="text-sm font-semibold text-gray-500">{title}</h2>
      <p className="text-2xl font-bold mt-2 text-gray-800">{value}</p>
    </div>
  );
}
