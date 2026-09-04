import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  BadgeDollarSign,
  BookOpen,
  Boxes,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  Cog,
  Contact,
  Database,
  FileQuestion,
  Headset,
  History,
  LineChart,
  Tags,
  UserCog,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — LPPOM Admin Portal" },
      {
        name: "description",
        content:
          "Module launcher for sales, audit resource planning, human capital, finance and operational services.",
      },
      { property: "og:title", content: "Dashboard — LPPOM Admin Portal" },
      {
        property: "og:description",
        content: "One place to reach every LPPOM operational module.",
      },
    ],
  }),
  component: Dashboard,
});

type MenuItem = { label: string; icon: LucideIcon; to?: "/archive" };

const salesPipeline: MenuItem[] = [
  { label: "CRM & Lead Management", icon: Contact },
  { label: "Halal Partner", icon: UserRound },
  { label: "SO Monitoring", icon: LineChart },
  { label: "Halal Agent Management", icon: Users },
  { label: "Price Simulation", icon: BadgeDollarSign },
  { label: "Offering & Quotation", icon: Tags },
  { label: "Customer Data Library", icon: Database },
];

const auditPlanning: MenuItem[] = [
  { label: "Audit Management", icon: ClipboardCheck },
  { label: "Auditor Management", icon: UserCog },
  { label: "Auditor Compensation", icon: Wallet },
  { label: "Sample Handling", icon: ClipboardList },
];

const activityLog: MenuItem[] = [{ label: "Log Trails", icon: History }];

const humanCapital: MenuItem[] = [
  { label: "HCM", icon: Building2 },
  { label: "Learning Management", icon: BookOpen },
];

const finance: MenuItem[] = [
  { label: "Budget Management & Realization", icon: Wallet },
  { label: "Financial Order Management", icon: ClipboardCheck },
];

const operational: MenuItem[] = [
  { label: "Operation Service", icon: Headset },
  { label: "Asset & Inventory", icon: Boxes },
  { label: "Vehicle & Room", icon: CalendarClock },
];

const supportMenu: MenuItem[] = [
  { label: "Archive", icon: Archive, to: "/archive" },
  { label: "User Access Management", icon: UserCog },
  { label: "Master Data", icon: Database },
  { label: "FAQ", icon: FileQuestion },
];

function ModuleCard({ item }: { item: MenuItem }) {
  const Icon = item.icon;
  const inner = (
    <>
      <span className="gradient-action flex h-12 w-12 items-center justify-center rounded-xl text-brand-foreground">
        <Icon className="h-6 w-6" />
      </span>
      <span className="text-sm font-semibold leading-snug text-foreground">{item.label}</span>
    </>
  );

  const className =
    "shadow-card flex h-[130px] w-full flex-col items-center justify-center gap-3 rounded-xl bg-card px-3 text-center transition-transform hover:-translate-y-0.5";

  return item.to ? (
    <Link to={item.to} className={className}>
      {inner}
    </Link>
  ) : (
    <button type="button" className={className}>
      {inner}
    </button>
  );
}

function MenuGroup({ title, items, span }: { title: string; items: MenuItem[]; span: string }) {
  return (
    <section className={span}>
      <h2 className="mb-3 font-display text-lg font-bold text-foreground">{title}</h2>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
      >
        {items.map((item) => (
          <ModuleCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1240px] px-6 py-8">
        <header className="mb-8 flex flex-wrap items-center gap-4">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            HELLO, HASAN <span aria-hidden>✋</span>
          </h1>
          <div className="ml-auto flex flex-wrap items-center gap-3">
            <div className="flex rounded-md bg-secondary p-0.5 text-xs font-semibold">
              <button type="button" className="rounded bg-grad-from px-3 py-1.5 text-brand-foreground">
                Employee
              </button>
              <button type="button" className="rounded px-3 py-1.5 text-muted-foreground">
                Auditor
              </button>
            </div>
            <button
              type="button"
              className="rounded-md bg-brand px-3 py-2 text-xs font-semibold text-brand-foreground"
            >
              Agent Portal
            </button>
            <button
              type="button"
              className="rounded-md bg-warning px-3 py-2 text-xs font-semibold text-warning-foreground"
            >
              Ticketing
            </button>
            <button
              type="button"
              className="gradient-action rounded-md px-5 py-2 text-xs font-semibold text-brand-foreground"
            >
              Application
            </button>
            <button
              type="button"
              className="gradient-action rounded-md px-5 py-2 text-xs font-semibold text-brand-foreground"
            >
              Approval
            </button>
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-secondary text-sm font-bold text-brand">
              HS
            </span>
          </div>
        </header>

        <div className="space-y-7">
          <MenuGroup title="Sales & Pipeline" items={salesPipeline} span="" />

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[4fr_3fr]">
            <MenuGroup title="Audit Resource Planning" items={auditPlanning} span="" />
            <MenuGroup title="Activity Log" items={activityLog} span="max-w-[190px]" />
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[2fr_2fr_3fr]">
            <MenuGroup title="Human Capital" items={humanCapital} span="" />
            <MenuGroup title="Finance" items={finance} span="" />
            <MenuGroup title="Operational Services" items={operational} span="" />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Support Menu</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {supportMenu.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="h-4 w-4 text-brand" />
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </>
              );
              const cls =
                "shadow-card flex items-center gap-2 rounded-lg bg-card px-4 py-3 transition-transform hover:-translate-y-0.5";
              return item.to ? (
                <Link key={item.label} to={item.to} className={cls}>
                  {content}
                </Link>
              ) : (
                <button key={item.label} type="button" className={cls}>
                  {content}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
