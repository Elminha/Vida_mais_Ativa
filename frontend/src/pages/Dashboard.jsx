import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 🔹 Temporário: dados falsos só para o dashboard funcionar
    setTimeout(() => {
      setData({
        sleep_hours: 7.2,
        mood: "Bom",
        heart_rate: 76,
        physical_activity: 42,
        steps: 5400,
      });
    }, 800);
  }, []);

  if (!data) {
    return <p className="text-xl p-6">Carregando dados...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard de Saúde</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Sono (horas)" value={data.sleep_hours} />
        <StatCard title="Humor" value={data.mood} />
        <StatCard title="Batimentos (bpm)" value={data.heart_rate} />
        <StatCard title="Atividade Física (min)" value={data.physical_activity} />
        <StatCard title="Passos" value={data.steps} />
      </div>
    </div>
  );
}