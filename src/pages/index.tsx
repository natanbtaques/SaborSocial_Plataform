import AddEvent from "../components/AddEvent";
import EventList from "../components/EventList";
import HeaderPage from "@/components/Header/HeaderPage";



export default function Home() {
  return (
    <div

    >
      <main className="">
        <HeaderPage />
        <div className="flex flex-row h-full mx-1">
          <div className="flex-grow-0 flex-shrink-0 basis-2/5">
            <AddEvent />
          </div>
          <div className="flex-grow-0 flex-shrink-0 basis-3/5">
            <EventList />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
