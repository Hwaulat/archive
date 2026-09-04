import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive as ArchiveIcon,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  History,
  Search,
} from "lucide-react";

import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — Customer Profile Data" },
      {
        name: "description",
        content:
          "Browse archived customer profile records by branch, sign up date and customer status.",
      },
      { property: "og:title", content: "Archive — Customer Profile Data" },
      {
        property: "og:description",
        content: "Filter and export archived customer profile records.",
      },
    ],
  }),
  component: ArchivePage,
});

const columns = [
  "No",
  "Action",
  "Branch",
  "Sign Up Date",
  "Company ID",
  "Customer Status",
  "Business Scale that Registered on SI Halal",
  "Company Address",
  "Country",
  "Phone No.",
  "Email",
  "Company Website",
];

const rows = [
  {
    no: 1,
    branch: "Pusat (Headquarter)",
    signUpDate: "23 Aug 2024",
    companyId: "22",
    status: "Existing Customer",
    businessScale: "23 Aug 2024, 00:00:00",
    address: "Jl. Pemuda No.5, Bogor, Indonesia, 23166",
    country: "Indonesia",
    phone: "+62251 8660472",
    email: "a3.include@gmail.com",
    website: "www.include.co.id",
  },
];

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      <span className="flex h-[46px] items-center justify-between rounded-md bg-surface px-4 text-sm text-secondary-foreground">
        {value}
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </span>
    </label>
  );
}

function DateField({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      <span className="flex h-[46px] items-center gap-3 rounded-md border border-border bg-card px-4 text-sm text-secondary-foreground">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span className="text-border">|</span>
        {value}
      </span>
    </label>
  );
}

function ArchivePage() {
  return (
    <div className="min-h-screen bg-brand pb-6">
      <AppHeader title="Archive" />

      <div className="mx-4 space-y-3">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-between rounded-lg bg-card px-4 py-3"
        >
          <div className="flex items-center gap-2 text-sm">
            <ArchiveIcon className="h-4 w-4 text-muted-foreground" />
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
            <Link to="/archive" className="font-semibold text-foreground">
              Archive
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>
        </nav>

        <section className="rounded-lg bg-card p-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Customer Profile</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
            <SelectField label="View by Data" value="Branch" />
            <SelectField label="Branch" value="Code : A - Name : Pusat (Headquarter) & SME" />
            <SelectField label="Date Period" value="Sign Up Date" />
            <DateField label="Start Date" value="23 Aug 2024" />
            <DateField label="End Date" value="23 Aug 2024" />
            <div className="flex items-end">
              <Button variant="brand" size="xl">
                View Data
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="gradient" size="xl">
              Export Data Active Page to Excel
            </Button>
          </div>

          <div className="mt-6 flex h-[46px] w-full max-w-[340px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[1500px] border-collapse text-sm">
              <thead>
                <tr className="bg-table-head text-left">
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="whitespace-nowrap px-3 py-4 font-semibold text-foreground"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.no} className="border-t border-border align-middle">
                    <td className="px-3 py-4 text-secondary-foreground">{row.no}</td>
                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <Link to="/customer-details">
                          <Button variant="table" size="icon-lg" aria-label="View detail">
                            <Eye className="h-5 w-5" />
                          </Button>
                        </Link>
                        <Link to="/customer-history">
                          <Button variant="table" size="icon-lg" aria-label="View history">
                            <History className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.branch}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-secondary-foreground">
                      {row.signUpDate}
                    </td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.companyId}</td>
                    <td className="px-3 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        {row.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-secondary-foreground">
                      {row.businessScale}
                    </td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.address}</td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.country}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-secondary-foreground">
                      {row.phone}
                    </td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.email}</td>
                    <td className="px-3 py-4 text-secondary-foreground">{row.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-secondary-foreground">10 Rows</span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" aria-label="First page">
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Previous page">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "soft" : "ghost"}
                  size="icon"
                  aria-current={page === 1 ? "page" : undefined}
                >
                  {page}
                </Button>
              ))}
              <Button variant="ghost" size="icon" aria-label="Next page">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Last page">
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
            <label className="flex items-center gap-3 text-sm text-secondary-foreground">
              Rows per page
              <span className="flex h-9 items-center gap-2 rounded-md border border-border px-3">
                10
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
