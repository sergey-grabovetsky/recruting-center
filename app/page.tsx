import Hero from "./components/Hero";
import Vacancies from "./components/Vacancies";
import ContractConditions from "./components/ContractConditions";
import Algorithm from "./components/Algorithm";
import Academy from "./components/Academy";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Vacancies />
      <ContractConditions />
      <Algorithm />
      <Academy />
      <FAQ />
    </main>
  );
}