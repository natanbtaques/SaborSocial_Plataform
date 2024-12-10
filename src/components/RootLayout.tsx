// components/RootLayout.js

import FooterPage from "@/components/Footer/FooterPage"; // Caso tenha um componente de rodapé

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div>

            <main>{children}</main>
            <FooterPage />
        </div>
    );
}
