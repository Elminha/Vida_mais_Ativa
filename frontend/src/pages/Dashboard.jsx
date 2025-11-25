import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:3001/api/monitoramento");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  if (!data) {
    return (
      <div className="text-center text-xl font-semibold p-6">
        Carregando dados...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Saúde</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Sono (horas)" value={data.sleep_hours} />
        <StatCard title="Humor" value={data.mood} />
        <StatCard title="Batimentos (bpm)" value={data.heart_rate} />
        <StatCard title="Atividade Física (min)" value={data.physical_activity} />
        <StatCard title="Passos" value={data.steps} />
      </div>
    </div>
  );
}
