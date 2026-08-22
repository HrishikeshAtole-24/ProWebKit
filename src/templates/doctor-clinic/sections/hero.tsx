import Link from "next/link";
import { CalendarCheck, CheckCircle2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { clinic, hero, stats, timings } from "../content";

const telHref = `tel:${clinic.phone.replace(/[\s+]/g, "")}`;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-subtle">
      <div
        className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #b9e6de, transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #fbdcb5, transparent)" }}
        aria-hidden
      />

      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-bg px-3 py-1 text-xs font-medium text-brand">
              <ShieldCheck className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <ul className="mt-8 space-y-3">
              {hero.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#appointment"
                className="inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
              >
                <CalendarCheck className="h-4 w-4" />
                Book an appointment
              </Link>
              <Link
                href={telHref}
                className="inline-flex h-12 items-center gap-2 rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                Call the clinic
              </Link>
            </div>
          </div>

          {/* Booking card — the primary conversion surface */}
          <div className="animate-fade-up rounded-card border border-line bg-bg p-6 shadow-soft sm:p-8">
            <div className="flex items-start gap-4 border-b border-line pb-6">
              <span
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand-soft text-xl font-semibold text-brand"
                aria-hidden
              >
                AR
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-ink">{clinic.doctor}</h2>
                <p className="text-sm text-brand">{clinic.designation}</p>
                <p className="mt-1 text-xs text-muted">{clinic.qualifications}</p>
              </div>
            </div>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Consultation hours
            </h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">Weekly consultation hours</caption>
              <tbody className="divide-y divide-line">
                {timings.map((row) => (
                  <tr key={row.day}>
                    <th scope="row" className="py-2.5 pr-3 text-left font-medium text-ink">
                      {row.day}
                    </th>
                    <td className="py-2.5 text-right text-muted">
                      {row.morning}
                      {row.evening !== "Closed" ? (
                        <>
                          <span className="mx-1.5 text-line">·</span>
                          {row.evening}
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link
              href="#appointment"
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-card bg-brand text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
            >
              Request a slot
            </Link>
            <Link
              href="#appointment"
              className="mt-2.5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-card border border-line text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {clinic.whatsapp}
            </Link>

            <p className="mt-4 text-center text-xs leading-relaxed text-muted">
              {clinic.emergencyNote}
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-4 py-6 text-center">
              <dt className="text-2xl font-semibold text-brand">{stat.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
