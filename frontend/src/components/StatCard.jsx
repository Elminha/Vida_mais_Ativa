export default function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
      <h2 className="text-md font-semibold text-gray-600">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
