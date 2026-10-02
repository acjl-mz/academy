import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SkillHub by ALINVEST', description: 'Formação prática de competências profissionais em Moçambique.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-MZ"><body>{children}</body></html>; }