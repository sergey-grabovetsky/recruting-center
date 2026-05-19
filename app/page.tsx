import Hero from "./components/Hero";
import Vacancies from "./components/Vacancies";
import ContractConditions from "./components/ContractConditions";
import Academy from "./components/Academy";
import FAQ from "./components/FAQ";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#173829]">
      <Hero />
      <ContractConditions />
      <FAQ />
      <Vacancies />
      <Education />
      <Academy />
    </main>
  );
}
