import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Bem-vindo ao Ramon&apos;s Hotel
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Este é um site que você pode escolher os dias que deseja passar nas
          acomodações do Ramon&apos;s Hotel, tenha acesso a todas as datas do SJ de
          CG e decida os dias que vai ficar de acordo com as vagas preenchidas
          ou não do hotel.
        </p>
      </div>

      <Calendar />
    </div>
  );
}
