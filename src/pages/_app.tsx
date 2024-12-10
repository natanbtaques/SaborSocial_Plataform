// pages/_app.js (ou _app.tsx)
import "@/styles/globals.css"; // Seus estilos globais
import RootLayout from "@/components/RootLayout"; // Importar o RootLayout

import HeaderPage from "@/components/Header/HeaderPage";
import { useRouter } from "next/router";

function App({ Component, pageProps }: any) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <RootLayout>
      <HeaderPage isLoginPage={isLoginPage} />
      <Component {...pageProps} /> {/* Página específica renderizada */}
    </RootLayout>
  );
}

export default App;
