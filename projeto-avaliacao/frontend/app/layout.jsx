import "./globals.css";

export const metadata = {
  title: "Sistema Acadêmico",
  description: "Trabalho AV2",
};

// layout padrão, todas as páginas aparecem dentro do {children}
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
