import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgentCourt AI — Intelligence Layer for Decentralized Justice',
  description:
    'Evidence intelligence for jurors, DAOs and protocols. Built by ElCryptoBoy. Does not replace Kleros — prepares the evidence.',
  applicationName: 'AgentCourt AI',
  authors: [{ name: 'ElCryptoBoy' }],
  openGraph: {
    title: 'AgentCourt AI',
    description: 'Evidence intelligence for decentralized justice.',
    url: 'https://agentcourt-ai.vercel.app',
    siteName: 'AgentCourt AI',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
