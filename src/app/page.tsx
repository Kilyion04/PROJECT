import Link from "next/link";

const resources = [
  {
    label: "Documentation Next.js",
    href: "https://nextjs.org/docs",
  },
  {
    label: "Templates Vercel",
    href: "https://vercel.com/templates?framework=next.js",
  },
  {
    label: "Déployer sur Vercel",
    href: "https://vercel.com/new",
  },
];

const features = [
  {
    title: "App Router",
    description:
      "Routing moderne, Server Components et données typées par défaut.",
  },
  {
    title: "React 19",
    description:
      "Profitez des dernières APIs concurrentes pour des interfaces réactives.",
  },
  {
    title: "Tailwind CSS 4",
    description:
      "Design system prêt à l’emploi avec tokens personnalisables.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 px-4 py-12 text-slate-900">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12">
        <section className="rounded-3xl bg-white p-10 shadow-lg shadow-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Projet Next.js
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Bienvenue sur votre nouvelle application web.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Cette base React + Next.js inclut TypeScript, l’App Router et
            Tailwind pour démarrer rapidement. Lancez{" "}
            <code className="rounded bg-slate-900 px-2 py-1 text-sm text-white">
              npm run dev
            </code>{" "}
            et commencez à construire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/api/health"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Tester l’API
            </Link>
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Tutoriels interactifs
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Fonctionnalités clés</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              {features.map((feature) => (
                <li key={feature.title}>
                  <p className="font-medium text-slate-900">{feature.title}</p>
                  <p>{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Ressources utiles</h2>
            <p className="mt-4 text-sm text-slate-600">
              Explorez la documentation officielle, les templates prêts à
              l’emploi et les options de déploiement.
            </p>
            <ul className="mt-6 space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                  >
                    {resource.label}
                    <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
