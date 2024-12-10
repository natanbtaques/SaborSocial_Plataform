import EventManager from "@/components/EventManager";

import HeaderPage from "@/components/Header/HeaderPage";



export default function Home() {
  return (
    <div

    >
      <main className="">
        <HeaderPage />
        <div >
          <EventManager />

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
