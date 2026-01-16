export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  color: string;
  features: string[];
  gallery: { title: string; placeholderColor: string }[];
}

export const projects: Project[] = [
  {
    slug: "seedma-asset-manager",
    title: "Seedma Asset Manager",
    shortDescription: "Applicazione web enterprise per la gestione completa delle manutenzioni di grandi impianti industriali.",
    fullDescription: "Una soluzione completa progettata per ottimizzare la gestione delle risorse e delle manutenzioni in ambito industriale. L'applicazione permette di tracciare in tempo reale lo stato degli impianti, programmare interventi di manutenzione preventiva e gestire le squadre di intervento.",
    tags: ["Angular", "TypeScript", "Dotnet", "HTML", "CSS"],
    color: "from-blue-600 to-indigo-700",
    features: [
      "Dashboard di monitoraggio in tempo reale",
      "Gestione avanzata degli ordini di lavoro",
      "Calendario pianificazione interventi",
      "Reporting e analisi KPI"
    ],
    gallery: [
      { title: "Dashboard Principale", placeholderColor: "bg-blue-900/50" },
      { title: "Gestione Asset", placeholderColor: "bg-indigo-900/50" },
      { title: "Planning Manutenzioni", placeholderColor: "bg-slate-800" }
    ]
  },
  {
    slug: "paypeek-system",
    title: "PayPeek System",
    shortDescription: "Sistema HR innovativo con gestione buste paga, OCR e dashboard analitiche avanzate.",
    fullDescription: "Piattaforma avanzata per la gestione delle risorse umane che rivoluziona il processo di elaborazione delle buste paga. Utilizzando tecnologie OCR all'avanguardia, il sistema estrae automaticamente i dati dai documenti cartacei o PDF, riducendo drasticamente gli errori manuali.",
    tags: ["Angular", "Spring Boot", "Sviluppo in corso"],
    color: "from-emerald-500 to-teal-700",
    features: [
      "OCR intelligente per estrazione dati",
      "Validazione automatica delle anomalie",
      "Portale dipendente self-service",
      "Archiviazione sicura su cloud"
    ],
    gallery: [
      { title: "Upload Buste Paga", placeholderColor: "bg-emerald-900/50" },
      { title: "Analisi Dati OCR", placeholderColor: "bg-teal-900/50" },
      { title: "Profilo Utente", placeholderColor: "bg-slate-800" }
    ]
  },
  {
    slug: "scraplink",
    title: "ScrapLink",
    shortDescription: "Tool OSINT e automazione per LinkedIn per la lead generation aziendale.",
    fullDescription: "Tool OSINT e di automazione scritto in Python che rivoluziona la ricerca su LinkedIn. Attraverso tecniche di Google Dorking e automazione browser, ScrapLink permette di individuare dipendenti di specifiche aziende e generare report Excel dettagliati con Nome, Cognome, Headline e Link al profilo, semplificando drasticamente i processi di recruitment e lead generation.",
    tags: ["Python", "OSINT", "Automation", "Google Dorking"],
    color: "from-cyan-600 to-blue-800",
    features: [
      "Automazione Browser completa",
      "Tecniche avanzate di Google Dorking",
      "Export dati in Excel (.xls)",
      "Estrazione mirata profili aziendali"
    ],
    gallery: [
      { title: "Interfaccia CLI", placeholderColor: "bg-cyan-900/50" },
      { title: "Report Excel Generato", placeholderColor: "bg-blue-900/50" },
      { title: "Automazione in azione", placeholderColor: "bg-slate-800" }
    ]
  }
];
