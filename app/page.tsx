import Hero from "./components/Hero";
import Vacancies from "./components/Vacancies";
import ContractConditions from "./components/ContractConditions";
import Academy from "./components/Academy";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#173829]">
      <Hero />
      <ContractConditions />
      <Vacancies />
      <Education />
      <Academy />
    </main>
  );
}
