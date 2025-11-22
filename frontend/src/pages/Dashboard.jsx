import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:3000/monitoramento");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  if (!data) {
    return <Heading p={5}>Carregando dados...</Heading>;
  }

  return (
    <Box p={6}>
      <Heading mb={6}>Dashboard de Saúde</Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        <StatCard title="Sono (horas)" value={data.sleep_hours} />
        <StatCard title="Humor" value={data.mood} />
        <StatCard title="Batimentos (bpm)" value={data.heart_rate} />
        <StatCard title="Atividade Física (min)" value={data.physical_activity} />
        <StatCard title="Passos" value={data.steps} />
      </SimpleGrid>
    </Box>
  );
}
