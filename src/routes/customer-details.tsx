import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArchiveIcon, ChevronRight, Search, ChevronDown, ChevronLeft, ChevronsLeft, ChevronsRight, Eye, Download, X, Pencil, Trash2 } from 'lucide-react';
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute('/customer-details')({
  component: CustomerDetailsPage,
});

const companyProfileHistoryData = [
  { no: 1, date: "02-12-2025", activity: 'Update client priority status based on scheduling from : "-" to be : "Priority" on Customer data : "Evigo" with Company ID : "22".', doneBy: "rootcerol" },
  { no: 2, date: "22-08-2025", activity: 'Update company name from : "Evigo Ltd." to be : "Evigo" on Customer data : "Evigo Ltd." with Company ID : "22".', doneBy: "rootcerol" },
  { no: 3, date: "22-08-2025", activity: 'Update address on Customer data : "Evigo Ltd." with Company ID : "22".', doneBy: "rootcerol" },
  { no: 4, date: "22-08-2025", activity: 'Update password account on Customer data : "Evigo Ltd." with Company ID : "22".', doneBy: "rootcerol" },
  { no: 5, date: "06-08-2025", activity: 'Update company name from : "Evigo Co. Ltd." to be : "Evigo Ltd. " on Customer data : "Evigo Co. Ltd." with Company ID : "22".', doneBy: "rootcerol" },
  { no: 6, date: "06-08-2025", activity: 'Update address on Customer data : "Evigo Ltd. " with Company ID : "22".', doneBy: "rootcerol" },
  { no: 7, date: "06-08-2025", activity: 'Update password account on Customer data : "Evigo Ltd. " with Company ID : "22".', doneBy: "rootcerol" },
  { no: 8, date: "06-08-2025", activity: 'Update password account on Customer data : "Evigo Co. Ltd." with Company ID : "".', doneBy: "rootcerol" },
  { no: 9, date: "31-07-2025", activity: 'Update NPWP from : "01234567801" to be : "012345678011" on Customer data : "Evigo Co. Ltd." with Company ID : "22".', doneBy: "rootcerol" },
  { no: 10, date: "24-07-2025", activity: 'Update PIC name from : "Cinta Aja-" to be : "Cinta Aja" on Customer data : "Evigo Co. Ltd." with Company ID : "22".', doneBy: "evigo" },
];

function CompanyProfileActivityHistoryDialog({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = companyProfileHistoryData.filter((item) =>
    item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.includes(searchTerm) ||
    item.doneBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Activity History of Company Profile</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="flex h-[46px] w-full max-w-[340px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead className="font-semibold text-foreground w-14">No.</TableHead>
                  <TableHead className="font-semibold text-foreground w-28 whitespace-nowrap">Date</TableHead>
                  <TableHead className="font-semibold text-foreground">Activity</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-28">Done by</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.no}>
                    <TableCell className="py-4 text-secondary-foreground">{item.no}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground whitespace-nowrap">{item.date}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground">{item.activity}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground text-right">{item.doneBy}</TableCell>
                  </TableRow>
                ))}
                {filteredData.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="py-6 text-center text-muted-foreground">
                      No matching records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const facilityHistoryData = [
  { no: 1, date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 2, date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 3, date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 4, date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
  { no: 5, date: "29 June 2026", activity: 'Delete facility name : "PT Evigo Berjaya" on Facility ID : "15501".', doneBy: "rootecerol" },
];

function FacilityHistoryDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Activity History of Facility / Head Office</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <div className="flex h-[46px] w-full max-w-[340px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead className="font-semibold text-foreground">No.</TableHead>
                  <TableHead className="font-semibold text-foreground">Date</TableHead>
                  <TableHead className="font-semibold text-foreground">Activity</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facilityHistoryData.map((item) => (
                  <TableRow key={item.no}>
                    <TableCell className="py-4 text-secondary-foreground">{item.no}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground whitespace-nowrap">{item.date}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground">{item.activity}</TableCell>
                    <TableCell className="py-4 text-secondary-foreground text-right">{item.doneBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FacilityDetailsDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold border-b pb-4">Facility / Head Office Details</DialogTitle>
        </DialogHeader>
        
        <div className="mt-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
             <div>
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office ID</p>
                <p className="font-semibold text-sm">788937</p>
             </div>
             <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office Name</p>
                <p className="font-semibold text-sm">LPPOM Co. Ltd.</p>
             </div>
             
             <div className="md:col-span-4">
                <p className="text-xs text-muted-foreground mb-1">Address</p>
                <p className="font-semibold text-sm">Jl. Wijaya Kusuma VIII No. 10 RT 02 RW 14, Kota Bogor, Indonesia</p>
             </div>
             
             <div>
                <p className="text-xs text-muted-foreground mb-1">City</p>
                <p className="font-semibold text-sm">Kota Bogor</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">Country</p>
                <p className="font-semibold text-sm">Indonesia</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">ZIP Code</p>
                <p className="font-semibold text-sm">16112</p>
             </div>
             <div>
                <p className="text-xs text-muted-foreground mb-1">Phone No.</p>
                <p className="font-semibold text-sm">+6282124057273</p>
             </div>
             
             <div>
                <p className="text-xs text-muted-foreground mb-1">Fax No.</p>
                <p className="font-semibold text-sm">-</p>
             </div>
             <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground mb-1">Facility / Head Office Email</p>
                <p className="font-semibold text-sm">hardi.kurnia@halalmui.org</p>
             </div>
          </div>
          
          <div className="pt-6 border-t">
            <h4 className="text-lg font-bold mb-4">Person in Charge</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Name</p>
                <p className="font-semibold text-sm">Hardi</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Title</p>
                <p className="font-semibold text-sm">Mr</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone No.</p>
                <p className="font-semibold text-sm">+6282124057273</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Mobile Phone No.</p>
                <p className="font-semibold text-sm">+6282124057273</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm">hardi.kurnia@halalmui.org</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CustomerDetailsPage() {
  const [halalRegViewBy, setHalalRegViewBy] = useState("all");

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-6">
      <AppHeader title="Archive" />

      <div className="mx-4 space-y-3 mt-4">
        {/* Breadcrumb & Date */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between rounded-lg bg-card px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <ArchiveIcon className="h-4 w-4 text-slate-500" />
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/archive" className="font-medium text-slate-500 hover:text-slate-900">
              Archive
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">Tuesday, 25 Jun 2025 | 09:42</span>
        </nav>

        {/* Company Information */}
        <section className="rounded-lg bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Company Information</h2>
            <div className="flex gap-3">
              <CompanyProfileActivityHistoryDialog>
                <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Activity History</Button>
              </CompanyProfileActivityHistoryDialog>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
            <div className="col-span-1 md:col-span-4">
              <p className="text-xs text-muted-foreground mb-1">Office Status</p>
              <p className="font-semibold text-sm">Kantor Cabang Indonesia - LPPOM DKI Jakarta</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Branch</p>
              <p className="font-semibold text-sm">Pusat (Headquarter)</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Company ID</p>
              <p className="font-semibold text-sm">22</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">NDPU (BPJPH Company ID on SIHALAL)</p>
              <p className="font-semibold text-sm">ICT001</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">NIB (Permit Type No. on OSS)</p>
              <p className="font-semibold text-sm">-</p>
            </div>

            <div className="col-span-1 md:col-span-1">
              <p className="text-xs text-muted-foreground mb-1">Company Name</p>
              <p className="font-semibold text-sm">Evigo</p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <p className="text-xs text-muted-foreground mb-1">Address</p>
              <p className="font-semibold text-sm">Jl. Pemuda No.5, Bogor, Indonesia, 23166, Bogor, Indonesia</p>
            </div>

            <div className="col-span-1 md:col-span-4">
              <p className="text-xs text-muted-foreground mb-1">Customer Status</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Existing Customer
                </span>
                <p className="text-sm">Halal Certified Since : <span className="text-yellow-600 font-medium">April 09th, 2026</span>, on Product Group : <span className="text-yellow-600 font-medium">"Lain-lain (Others)"</span> with Halal Decree No. : <span className="text-yellow-600 font-medium">"RKS-000010426"</span>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Conversion */}
        <section className="rounded-lg bg-card p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Certificate Conversion</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Conversion Reg No.</p>
              <p className="font-semibold text-sm">CNV001445</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Process Status</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-200 mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Disclaimer
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Disclaimer Reason</p>
              <p className="font-semibold text-sm">-</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="rounded-lg bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-xs min-w-[1200px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead rowSpan={2} className="align-middle border-r">No</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Company Phone No.</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Company Email</TableHead>
                  <TableHead colSpan={4} className="text-center border-r border-b">Person in Charge</TableHead>
                  <TableHead colSpan={4} className="text-center border-b">Contact Person</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="border-r">Name</TableHead>
                  <TableHead className="border-r">Title</TableHead>
                  <TableHead className="border-r">Phone No.</TableHead>
                  <TableHead className="border-r">Email</TableHead>
                  <TableHead className="border-r">Name</TableHead>
                  <TableHead className="border-r">Title</TableHead>
                  <TableHead className="border-r">Phone No.</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r border-b">1</TableCell>
                  <TableCell className="border-r border-b">+62251 8663472</TableCell>
                  <TableCell className="border-r border-b">a3.include@gmail.com</TableCell>
                  <TableCell className="border-r border-b">Cinta Aja</TableCell>
                  <TableCell className="border-r border-b">QC Manager</TableCell>
                  <TableCell className="border-r border-b">12 300, 12 300</TableCell>
                  <TableCell className="border-r border-b">a3.include@gmail.com</TableCell>
                  <TableCell className="border-r border-b">Cinta Aja</TableCell>
                  <TableCell className="border-r border-b">QC Manager</TableCell>
                  <TableCell className="border-r border-b">12 300, 12 300</TableCell>
                  <TableCell className="border-b">a3.include@gmail.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </section>

        {/* List of Last Valid Halal Decree */}
        <section className="rounded-lg bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">List of Last Valid Halal Decree</h3>
          <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table className="text-xs min-w-[800px]">
              <TableHeader className="bg-table-head">
                <TableRow>
                  <TableHead rowSpan={2} className="align-middle border-r">No</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Product Group</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Schema / Application Type</TableHead>
                  <TableHead rowSpan={2} className="align-middle border-r">Halal Decree No.</TableHead>
                  <TableHead colSpan={2} className="text-center border-b">Last Date Period of Halal Decree</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="border-r text-center">Valid Start</TableHead>
                  <TableHead className="text-center">Valid End</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r border-b">1</TableCell>
                  <TableCell className="border-r border-b">Lain-lain (Others)</TableCell>
                  <TableCell className="border-r border-b">Certificate of Sharia Conformity</TableCell>
                  <TableCell className="border-r border-b">RKS-000010426</TableCell>
                  <TableCell className="border-r border-b text-center">Cinta Aja</TableCell>
                  <TableCell className="border-b text-center">28 June 2026</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <PaginationFooter />
        </section>

        {/* Accordions */}
        <section className="space-y-3">
          <Accordion type="multiple" defaultValue={["monitoring"]} className="space-y-3">
            
            {/* Monitoring of Process */}
            <AccordionItem value="monitoring" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Monitoring of Process
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">View by Data</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full min-w-[320px] h-[42px] bg-surface border-border">
                        <SelectValue placeholder="- Select Data Type -" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                        <SelectItem value="all">All Halal Registration (Exclude Disclaimer)</SelectItem>
                        <SelectItem value="on-process">Halal Registration On Process</SelectItem>
                        <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                        <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
                        <SelectItem value="disclaimer">Disclaimer Halal Registration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-[11px] min-w-[1500px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">No.</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Reg No.</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Reg<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Completed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Registration<br/>Review Date<br/>(Halal Partner)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Akad<br/>Generate<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Approved<br/>Akad<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">STTD<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Auditor<br/>Assigned<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Auditor<br/>Passed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Audit<br/>Result<br/>Review Date<br/>(Halal Quality<br/>Board)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Post<br/>Audit<br/>Passed Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Fatwa<br/>Passed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap text-center">Halal<br/>Decree<br/>Generate<br/>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-center align-top">1.</TableCell>
                        <TableCell className="text-center align-top">186592</TableCell>
                        <TableCell className="text-center align-top">10-12-2025<br/>16:35:24</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">27-01-2000<br/>00:00:00</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center align-top">2.</TableCell>
                        <TableCell className="text-center align-top">169976</TableCell>
                        <TableCell className="text-center align-top">07-02-2025<br/>11:02:44</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">06-01-2026<br/>11:05:52</TableCell>
                        <TableCell className="text-center align-top">20-01-2000<br/>00:00:00</TableCell>
                        <TableCell className="text-center align-top">28-04-2026<br/>14:19:09</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center align-top">3.</TableCell>
                        <TableCell className="text-center align-top">166302</TableCell>
                        <TableCell className="text-center align-top">27-11-2024<br/>22:45:15</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center align-top">4.</TableCell>
                        <TableCell className="text-center align-top">156265</TableCell>
                        <TableCell className="text-center align-top">17-07-2024<br/>16:45:42</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center align-top">5.</TableCell>
                        <TableCell className="text-center align-top">155931</TableCell>
                        <TableCell className="text-center align-top">12-07-2024<br/>16:05:08</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center align-top">6.</TableCell>
                        <TableCell className="text-center align-top">153750</TableCell>
                        <TableCell className="text-center align-top">06-06-2024<br/>15:52:10</TableCell>
                        <TableCell className="text-center align-top">19-08-2024<br/>11:58:57</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                        <TableCell className="text-center align-top">-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            {/* Facility / Head Office (HO) */}
            <AccordionItem value="facility" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Facility / Head Office (HO)
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <FacilityHistoryDialog>
                    <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Activity History</Button>
                  </FacilityHistoryDialog>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-xs min-w-[1000px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">No</TableHead>
                        <TableHead className="font-semibold text-foreground">Action</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                        <TableHead className="font-semibold text-foreground">Address</TableHead>
                        <TableHead className="font-semibold text-foreground">City</TableHead>
                        <TableHead className="font-semibold text-foreground">Country</TableHead>
                        <TableHead className="font-semibold text-foreground">Phone No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Last HPAS Information</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FacilityDetailsDialog>
                              <Button variant="table" size="icon" aria-label="View detail" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </FacilityDetailsDialog>
                            {(halalRegViewBy === "company-name" || halalRegViewBy === "branch") && (
                              <>
                                <Link to="/facility-head-office-edit">
                                  <Button variant="table" size="icon" aria-label="Edit" className="h-8 w-8 text-amber-600 bg-amber-50 hover:bg-amber-100">
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <Button variant="table" size="icon" aria-label="Delete" className="h-8 w-8 text-red-600 bg-red-50 hover:bg-red-100">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>4749</TableCell>
                        <TableCell>Evigo China Plant 1</TableCell>
                        <TableCell>Guangdong P.R. China</TableCell>
                        <TableCell>Guangdong</TableCell>
                        <TableCell>P.R China</TableCell>
                        <TableCell>+6282124057273</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            {/* List of Halal Registration */}
            <AccordionItem value="halal-registration" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Halal Registration
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-border">|</span>
                    <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">View by Data</span>
                      <Select value={halalRegViewBy} onValueChange={setHalalRegViewBy}>
                        <SelectTrigger className="w-[320px] h-[42px] bg-white border-border">
                          <SelectValue placeholder="- Select Data Type -" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                          <SelectItem value="all">All Halal Registration (Exclude Disclaimer)</SelectItem>
                          <SelectItem value="on-process">Halal Registration On Process</SelectItem>
                          <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                          <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
                          <SelectItem value="disclaimer">Disclaimer Halal Registration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-[11px] min-w-[2000px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                        <TableHead className="font-semibold text-foreground w-16">Action</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Completed Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Approved Akad<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                        <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                        <TableHead className="font-semibold text-foreground">Facility / Head Office</TableHead>
                        <TableHead className="font-semibold text-foreground">Total of Product</TableHead>
                        <TableHead className="font-semibold text-foreground">Total of Material</TableHead>
                        <TableHead className="font-semibold text-foreground">Halal<br/>Decree No.</TableHead>
                        <TableHead className="font-semibold text-foreground">Period of Halal Decree<br/><span className="font-normal flex justify-between mt-1"><span>Valid Start</span><span>Valid End</span></span></TableHead>
                        <TableHead className="font-semibold text-foreground">HAS Note</TableHead>
                        <TableHead className="font-semibold text-foreground">Auditing Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <Link to="/certification-data-details">
                            <Button variant="table" size="icon" aria-label="View detail" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </TableCell>
                        <TableCell>186592</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>29 June 2026</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-normal text-[10px]">New</Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px]">
                          Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <ol className="list-decimal pl-4">
                            <li>Evigo China Plant 1 (Facility ID: 4749)</li>
                            <li>PT Evigo Berjaya (Facility ID: 15493)</li>
                          </ol>
                        </TableCell>
                        <TableCell>
                          <ol className="list-decimal pl-4">
                            <li>Menu: 0</li>
                            <li>Outlet: 0</li>
                            <li>Kitchen: 0</li>
                            <li>Warehouse: 0</li>
                          </ol>
                        </TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>
                          <div className="flex justify-between w-[120px]">
                            <span>-</span>
                            <span>-</span>
                          </div>
                        </TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <PaginationFooter />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="list-of-akad" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Akad
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <ListOfAkad />
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="registered-product" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Registered Product
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegisteredProduct />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="registered-material" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Registered Material
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegisteredMaterial />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inquiry-of-material" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Inquiry of Material
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <InquiryOfMaterial />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inquiry-of-notification-letter" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Inquiry of Notification Letter
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <InquiryOfNotificationLetter />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="regular-report" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Regular Report
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2">
                <RegularReport />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="list-of-halal-decree" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of Halal Decree
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2 text-sm text-muted-foreground">
                <ListOfHalalDecree />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="list-of-hpas" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                List of HPAS Status / Certificate
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2 text-sm text-muted-foreground">
                <ListOfHPASStatusCertificate />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="activity-history" className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
              <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                Halal Registration Activity History
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 pt-2 text-sm text-muted-foreground">
                <HalalRegistrationActivityHistory />
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>

      </div>
    </div>
  );
}

function PaginationFooter() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      <span className="text-xs text-secondary-foreground font-medium">10 Rows</span>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" aria-label="First page" className="h-8 w-8">
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Previous page" className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "soft" : "ghost"}
            size="icon"
            className="h-8 w-8"
            aria-current={page === 1 ? "page" : undefined}
          >
            {page}
          </Button>
        ))}
        <Button variant="ghost" size="icon" aria-label="Next page" className="h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Last page" className="h-8 w-8">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
      <label className="flex items-center gap-3 text-xs text-secondary-foreground font-medium">
        Rows per page
        <span className="flex h-8 items-center gap-2 rounded-md border border-border px-3 bg-surface">
          10
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </span>
      </label>
    </div>
  );
}

function ListOfAkad() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[320px] h-[42px] bg-white border-border">
                <SelectValue placeholder="- Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                <SelectItem value="all">All Akad (Exclude Disclaimer)</SelectItem>
                <SelectItem value="on-process">Akad On Process</SelectItem>
                <SelectItem value="completed">Akad Completed</SelectItem>
                <SelectItem value="disclaimer">Akad From Disclaimer Halal Registration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[2000px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Action</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
              <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              <TableHead className="font-semibold text-foreground">Service Type</TableHead>
              <TableHead className="font-semibold text-foreground">Akad No.</TableHead>
              <TableHead className="font-semibold text-foreground">Akad Date</TableHead>
              <TableHead className="font-semibold text-foreground">Due Date</TableHead>
              <TableHead className="font-semibold text-foreground">Paid Date</TableHead>
              <TableHead className="font-semibold text-foreground">Approved Akad Date</TableHead>
              <TableHead className="font-semibold text-foreground">Currency</TableHead>
              <TableHead className="font-semibold text-foreground">Total of Akad</TableHead>
              <TableHead className="font-semibold text-foreground">Current Process</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="flex flex-col gap-2 w-[160px] mx-auto">
                  <Button variant="soft" className="h-8 text-xs font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">Download Akad</Button>
                  <Button variant="soft" className="h-8 text-xs font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">Download Payment Proof</Button>
                </div>
              </TableCell>
              <TableCell>186592</TableCell>
              <TableCell>New</TableCell>
              <TableCell className="max-w-[250px]">Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)</TableCell>
              <TableCell>Non BPJPH</TableCell>
              <TableCell>SO78668</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>IDR</TableCell>
              <TableCell>3.500.000</TableCell>
              <TableCell>
                <Badge className="bg-orange-50 text-orange-600 hover:bg-orange-50 border border-orange-200 font-normal text-xs py-1 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2" />
                  Akad Payment Approved
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function RegisteredProduct() {
  return (
    <Tabs defaultValue="non-facility" className="w-full">
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <TabsList className="h-[42px] bg-surface p-1">
            <TabsTrigger value="non-facility" className="h-full px-6 text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Product - Non Facility</TabsTrigger>
            <TabsTrigger value="facility" className="h-full px-6 text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Product - Facility</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[320px] h-[42px] bg-white border-border">
                <SelectValue placeholder="- Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                <SelectItem value="all">All Halal Registration (Exclude Disclaimer)</SelectItem>
                <SelectItem value="on-process">Halal Registration On Process</SelectItem>
                <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
                <SelectItem value="disclaimer">Disclaimer Halal Registration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
        </div>
      </div>

      <TabsContent value="non-facility" className="mt-0 outline-none">
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[2000px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                <TableHead className="font-semibold text-foreground">Ticket Row of Product</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                <TableHead className="font-semibold text-foreground">Publish Status</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                <TableHead className="font-semibold text-foreground">Sub Product<br/>Category</TableHead>
                <TableHead className="font-semibold text-foreground">Halal Decree No.</TableHead>
                <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
                <TableHead className="font-semibold text-foreground">Valid End</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell><div className="h-6 w-6 bg-surface rounded" /></TableCell>
                <TableCell>186592</TableCell>
                <TableCell>New</TableCell>
                <TableCell>12356</TableCell>
                <TableCell>PT Evigo Berjaya</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="max-w-[300px]">ROTI TAWAR PANDAN HAILAI ROTI - O</TableCell>
                <TableCell>
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    Published
                  </Badge>
                </TableCell>
                <TableCell>Servis (Services)</TableCell>
                <TableCell>Catering (Katering)</TableCell>
                <TableCell>-</TableCell>
                <TableCell>MUI-LPPOM00020001421025</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <PaginationFooter />
      </TabsContent>

      <TabsContent value="facility" className="mt-0 outline-none">
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[2000px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No</TableHead>
                <TableHead className="font-semibold text-foreground">Ticket Row of Product</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility /<br/>Head Office Name</TableHead>
                <TableHead className="font-semibold text-foreground">Product ID</TableHead>
                <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                <TableHead className="font-semibold text-foreground">Publish Status</TableHead>
                <TableHead className="font-semibold text-foreground">Address</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Product Type</TableHead>
                <TableHead className="font-semibold text-foreground">Halal Decree No.</TableHead>
                <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
                <TableHead className="font-semibold text-foreground">Valid End</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell><div className="h-6 w-6 bg-surface rounded" /></TableCell>
                <TableCell>186592</TableCell>
                <TableCell>New</TableCell>
                <TableCell>12356</TableCell>
                <TableCell>PT Evigo Berjaya</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="max-w-[250px]">ROTI TAWAR PANDAN HAILAI ROTI - O</TableCell>
                <TableCell>
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    Published
                  </Badge>
                </TableCell>
                <TableCell className="max-w-[200px]">Jl. Pemuda No. 5, Bogor, Indonesia</TableCell>
                <TableCell>Servis (Services)</TableCell>
                <TableCell>Facility - Outlet</TableCell>
                <TableCell>MUI-LPPOM00020001421025</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <PaginationFooter />
      </TabsContent>
    </Tabs>
  );
}

function RegisteredMaterial() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[320px] h-[42px] bg-white border-border">
                <SelectValue placeholder="- Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                <SelectItem value="all">All Halal Registration (Exclude Disclaimer)</SelectItem>
                <SelectItem value="on-process">Halal Registration On Process</SelectItem>
                <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
                <SelectItem value="disclaimer">Disclaimer Halal Registration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold">Export Data to Excel</Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1500px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
              <TableHead className="font-semibold text-foreground">Product Group</TableHead>
              <TableHead className="font-semibold text-foreground">Material ID</TableHead>
              <TableHead className="font-semibold text-foreground">Material Code</TableHead>
              <TableHead className="font-semibold text-foreground">Material Name</TableHead>
              <TableHead className="font-semibold text-foreground">Material Type</TableHead>
              <TableHead className="font-semibold text-foreground">Material File</TableHead>
              <TableHead className="font-semibold text-foreground">Producer</TableHead>
              <TableHead className="font-semibold text-foreground">Producer Country</TableHead>
              <TableHead className="font-semibold text-foreground">Supplier</TableHead>
              <TableHead className="font-semibold text-foreground">Halal By</TableHead>
              <TableHead className="font-semibold text-foreground">Certification No.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>186592</TableCell>
              <TableCell>New</TableCell>
              <TableCell>Servis (Services)</TableCell>
              <TableCell>1</TableCell>
              <TableCell>001</TableCell>
              <TableCell>ACB</TableCell>
              <TableCell>Raw Material + Additive</TableCell>
              <TableCell><a href="#" className="text-blue-600 hover:underline">Download</a></TableCell>
              <TableCell>Producer A</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function InquiryOfMaterial() {
  const [inquiryTab, setInquiryTab] = useState("view");
  const [inquiryViewBy, setInquiryViewBy] = useState("reg-product-group");

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <Tabs value={inquiryTab} onValueChange={setInquiryTab} className="w-[300px]">
            <TabsList className="h-[42px] bg-surface p-1 w-full flex">
              <TabsTrigger value="view" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">View by Data</TabsTrigger>
              <TabsTrigger value="history" className="flex-1 h-full text-sm font-semibold data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">Activity History</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {inquiryTab === "view" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View by Data</span>
              <Select value={inquiryViewBy} onValueChange={setInquiryViewBy}>
                <SelectTrigger className="w-[230px] h-[42px] bg-white border-border">
                  <SelectValue placeholder="- Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                  <SelectItem value="inquiry-no">Inquiry of Material No.</SelectItem>
                  <SelectItem value="inquiry-type">Inquiry of Material Type</SelectItem>
                  <SelectItem value="material-name">Material Name</SelectItem>
                  <SelectItem value="producer">Producer</SelectItem>
                  <SelectItem value="reg-product-group">Reg No. and Product Group</SelectItem>
                  <SelectItem value="request-year">Request Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {inquiryViewBy === "inquiry-no" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Inquiry of Material No.</span>
                <input
                  type="text"
                  placeholder="Input Inquiry of Material No..."
                  className="w-[280px] h-[42px] px-3 rounded-md border border-border bg-white text-sm outline-none focus:ring-1 focus:ring-brand placeholder:text-muted-foreground"
                />
              </div>
            )}

            {inquiryViewBy === "inquiry-type" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Inquiry of Material Type</span>
                <Select defaultValue="letter">
                  <SelectTrigger className="w-[240px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Letter of Inquiry of Material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="letter">Letter of Inquiry of Material</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {inquiryViewBy === "material-name" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Material Name</span>
                <input
                  type="text"
                  placeholder="Input Material Name..."
                  className="w-[260px] h-[42px] px-3 rounded-md border border-border bg-white text-sm outline-none focus:ring-1 focus:ring-brand placeholder:text-muted-foreground"
                />
              </div>
            )}

            {inquiryViewBy === "producer" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Producer</span>
                <input
                  type="text"
                  placeholder="Input Producer Name..."
                  className="w-[260px] h-[42px] px-3 rounded-md border border-border bg-white text-sm outline-none focus:ring-1 focus:ring-brand placeholder:text-muted-foreground"
                />
              </div>
            )}

            {inquiryViewBy === "reg-product-group" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Reg No. and Product Group</span>
                <Select defaultValue="605654">
                  <SelectTrigger className="w-[340px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Reg No. and Product Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="605654">605654 - Produk Biologi (Biological Products)</SelectItem>
                    <SelectItem value="60365">60365 - Ikan dan Produk Perikanan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {inquiryViewBy === "request-year" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Request Year</span>
                <Select defaultValue="2026">
                  <SelectTrigger className="w-[180px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}
      </div>

      {inquiryTab === "view" ? (
        <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1500px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Action</TableHead>
              <TableHead className="font-semibold text-foreground">Request Date</TableHead>
              <TableHead className="font-semibold text-foreground">Inquiry of Material No.</TableHead>
              <TableHead className="font-semibold text-foreground">Inquiry of Material Type</TableHead>
              <TableHead className="font-semibold text-foreground">Language</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Material Name</TableHead>
              <TableHead className="font-semibold text-foreground">Producer</TableHead>
              <TableHead className="font-semibold text-foreground">Producer Country</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Current Process</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="table" size="icon" className="h-10 w-10 text-blue-600 bg-blue-50 hover:bg-blue-100">
                        <Eye className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl p-0 overflow-hidden border-none shadow-2xl [&>button]:hidden">
                      <div className="bg-white rounded-lg">
                        <div className="flex items-center justify-between p-6 pb-2 border-b-0">
                          <h2 className="text-xl font-bold text-foreground">Inquiry of Material Details</h2>
                          <DialogClose className="rounded-full p-2 bg-surface hover:bg-surface-hover transition-colors">
                            <X className="h-5 w-5 text-muted-foreground" />
                          </DialogClose>
                        </div>
                        <div className="p-6 pt-4 space-y-6 max-h-[80vh] overflow-y-auto">
                          
                          {/* First Card Section */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Request Date</p>
                              <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Inquiry of Material No.</p>
                              <p className="text-sm font-semibold text-foreground">BB2345/SH/LPPOM MUI/X/2021</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Language</p>
                              <p className="text-sm font-semibold text-foreground">Indonesia</p>
                            </div>
                            <div className="hidden md:block"></div>
                            
                            <div className="md:col-span-4">
                              <p className="text-xs text-muted-foreground mb-1">Reg No. and Product Group</p>
                              <p className="text-sm font-semibold text-foreground">Reg No: 60365 - Product Group : Ikan dan Produk Perikanan</p>
                            </div>

                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Aplication Type</p>
                              <p className="text-sm font-semibold text-foreground">-</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Scheme</p>
                              <p className="text-sm font-semibold text-foreground">-</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">BPJPH Product Type</p>
                              <p className="text-sm font-semibold text-foreground">-</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Material Type</p>
                              <p className="text-sm font-semibold text-foreground">Processign Aid</p>
                            </div>

                            <div className="md:col-span-4">
                              <p className="text-xs text-muted-foreground mb-2">Kind of Product</p>
                              <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                  <span className="text-sm font-semibold text-foreground">Consumption products (Produk yang dikonsumsi)</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                  <span className="text-sm font-semibold text-foreground">Oral Care products and Lipstick</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                  <span className="text-sm font-semibold text-foreground">Internal Medicine and Supplements (Obat dalam dan Suplement)</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-sm border border-border bg-surface flex items-center justify-center"></div>
                                  <span className="text-sm font-semibold text-foreground">External used products (Produk Penggunaan Luar)</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-sm bg-brand flex items-center justify-center text-white">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                  </div>
                                  <span className="text-sm font-semibold text-foreground">Consumer goods (Barang Gunaan)</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Material Data Section */}
                          <div className="bg-surface rounded-xl p-6 border border-border">
                            <h3 className="text-lg font-bold text-foreground mb-6">Material Data</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Internal Code</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Material Name</p>
                                <p className="text-sm font-semibold text-foreground">Celatom FQ</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Producer</p>
                                <p className="text-sm font-semibold text-foreground">EP Mineral</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Producer Country</p>
                                <p className="text-sm font-semibold text-foreground">USA</p>
                              </div>
                              
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Supplier</p>
                                <p className="text-sm font-semibold text-foreground">PT. Sukabumi Trading Coy.</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Halal by</p>
                                <p className="text-sm font-semibold text-foreground">ISLAMIC SERVICES OF AMERICA</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Certificate No</p>
                                <p className="text-sm font-semibold text-foreground">1109-20-35743L</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Valid End</p>
                                <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                              </div>

                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Other Document</p>
                                <p className="text-sm font-semibold text-foreground">ALLERGEN & SENSITIVITY INFORMATION</p>
                              </div>
                              
                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Remarks</p>
                                <div className="text-sm font-semibold text-foreground">
                                  -Nama bahan pada SH: Celatom, Diatomaceous earth<br/>
                                  -MSDS
                                </div>
                              </div>
                              
                              <div className="md:col-span-4 mt-2">
                                <p className="text-xs text-muted-foreground mb-1">Material File</p>
                                <Button variant="brand" className="h-8 text-xs font-semibold px-4 rounded-md bg-brand hover:bg-brand/90 text-white shadow-sm mt-1">
                                  Download Material
                                </Button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex flex-col gap-1 w-[130px]">
                    <Button variant="soft" className="h-7 text-[10px] font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">Download Material</Button>
                    <Button variant="soft" className="h-7 text-[10px] font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">Download Letter</Button>
                  </div>
                </div>
              </TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>BB0868/SH/LPPOM MU...</TableCell>
              <TableCell>Letter of Inquiry of Mat...</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell>605654</TableCell>
              <TableCell>Celatom FW 14</TableCell>
              <TableCell>EP Mineral, LLC</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell className="text-center">
                <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3 inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                  Complete
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[800px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Inquiry of Material No.</TableHead>
                <TableHead className="font-semibold text-foreground">Inquiry of Material Type</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Activity</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>BB0868/SH/LPPOM MU...</TableCell>
                <TableCell>Letter of Inquiry of Material</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>Add material name : "Celatom FW 14" on Material ID : "1".</TableCell>
                <TableCell className="text-right">rootcerol</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      <PaginationFooter />
    </>
  );
}



function InquiryOfNotificationLetter() {
  const [activeTab, setActiveTab] = useState<"view-by-data" | "activity-history">("view-by-data");
  const [notificationViewBy, setNotificationViewBy] = useState("notification-type");

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex h-[42px] items-center rounded-md bg-surface p-1">
            <button
              onClick={() => setActiveTab("view-by-data")}
              className={`h-full rounded-sm px-6 text-sm font-semibold transition-colors ${
                activeTab === "view-by-data"
                  ? "bg-[#8b5cf6] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              View by Data
            </button>
            <button
              onClick={() => setActiveTab("activity-history")}
              className={`h-full rounded-sm px-6 text-sm font-semibold transition-colors ${
                activeTab === "activity-history"
                  ? "bg-[#8b5cf6] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Activity History
            </button>
          </div>
        </div>

        {activeTab === "view-by-data" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View by Data</span>
              <Select value={notificationViewBy} onValueChange={setNotificationViewBy}>
                <SelectTrigger className="w-[230px] h-[42px] bg-white border-border">
                  <SelectValue placeholder="- Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                  <SelectItem value="notification-no">Notification Letter No.</SelectItem>
                  <SelectItem value="notification-type">Notification Letter Type</SelectItem>
                  <SelectItem value="reg-product-group">Reg No. and Product Group</SelectItem>
                  <SelectItem value="request-year">Request Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {notificationViewBy === "notification-no" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Notification Letter No.</span>
                <input
                  type="text"
                  placeholder="Input Notification Letter No..."
                  className="w-[280px] h-[42px] px-3 rounded-md border border-border bg-white text-sm outline-none focus:ring-1 focus:ring-brand placeholder:text-muted-foreground"
                />
              </div>
            )}

            {notificationViewBy === "notification-type" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Notification Letter Type</span>
                <Select defaultValue="rks">
                  <SelectTrigger className="w-[200px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rks">RKS</SelectItem>
                    <SelectItem value="skp">SKP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {notificationViewBy === "reg-product-group" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Reg No. and Product Group</span>
                <Select defaultValue="605654">
                  <SelectTrigger className="w-[340px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Reg No. and Product Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="605654">605654 - Produk Biologi (Biological Products)</SelectItem>
                    <SelectItem value="60365">60365 - Ikan dan Produk Perikanan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {notificationViewBy === "request-year" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Request Year</span>
                <Select defaultValue="2026">
                  <SelectTrigger className="w-[180px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}
      </div>

      {activeTab === "view-by-data" ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[1200px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Action</TableHead>
                <TableHead className="font-semibold text-foreground">Request Date</TableHead>
                <TableHead className="font-semibold text-foreground">Notification letter No.</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter Type</TableHead>
                <TableHead className="font-semibold text-foreground">Language</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Current Process</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 w-[120px] mx-auto">
                    <Button variant="soft" className="h-7 text-[10px] font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 w-full">Download - ENG</Button>
                    <Button variant="soft" className="h-7 text-[10px] font-semibold bg-green-50 text-green-600 hover:bg-green-100 w-full">Download - IDN</Button>
                  </div>
                </TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>KPP1481/SH/LPPOM/XII/2024</TableCell>
                <TableCell>SKP</TableCell>
                <TableCell>Indonesia</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell>Produk Biologi (Biological Products)</TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border border-green-200 font-normal text-xs py-1 px-3 inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    Complete
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[800px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter No.</TableHead>
                <TableHead className="font-semibold text-foreground">Notification Letter Type</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Activity</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>KPP1481/SH/LPPOM/XII/2024</TableCell>
                <TableCell>SKP</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell className="text-right">Hasan</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      
      <PaginationFooter />
    </>
  );
}

function RegularReport() {
  const [activeTab, setActiveTab] = useState<"view-by-data" | "activity-history">("view-by-data");
  const [reportViewBy, setReportViewBy] = useState("reg-product-group");
  
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-[42px] w-[250px] items-center gap-3 rounded-md bg-surface px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-border">|</span>
            <input
              type="search"
              placeholder="Input some text..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex h-[42px] items-center rounded-md bg-surface p-1">
            <button
              onClick={() => setActiveTab("view-by-data")}
              className={`h-full rounded-sm px-6 text-sm font-semibold transition-colors ${
                activeTab === "view-by-data"
                  ? "bg-[#8b5cf6] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              View by Data
            </button>
            <button
              onClick={() => setActiveTab("activity-history")}
              className={`h-full rounded-sm px-6 text-sm font-semibold transition-colors ${
                activeTab === "activity-history"
                  ? "bg-[#8b5cf6] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Activity History
            </button>
          </div>
        </div>

        {activeTab === "view-by-data" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View by Data</span>
              <Select value={reportViewBy} onValueChange={setReportViewBy}>
                <SelectTrigger className="w-[230px] h-[42px] bg-white border-border">
                  <SelectValue placeholder="- Select Data Type -" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                  <SelectItem value="report-no">Regular Report No.</SelectItem>
                  <SelectItem value="reg-product-group">Reg No. and Product Group</SelectItem>
                  <SelectItem value="facility">Facility</SelectItem>
                  <SelectItem value="report-year">Report Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {reportViewBy === "report-no" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Regular Report No.</span>
                <input
                  type="text"
                  placeholder="Input Regular Report No..."
                  className="w-[280px] h-[42px] px-3 rounded-md border border-border bg-white text-sm outline-none focus:ring-1 focus:ring-brand placeholder:text-muted-foreground"
                />
              </div>
            )}

            {reportViewBy === "reg-product-group" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Reg No. and Product Group</span>
                <Select defaultValue="635466">
                  <SelectTrigger className="w-[320px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Reg No. and Product Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="635466">635466 - Susu dan analognya</SelectItem>
                    <SelectItem value="60365">60365 - Ikan dan Produk Perikanan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {reportViewBy === "facility" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Facility</span>
                <Select defaultValue="facility-1">
                  <SelectTrigger className="w-[260px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Facility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facility-1">ID : 1 - NAME : Facility A</SelectItem>
                    <SelectItem value="facility-2">ID : 2 - NAME : Facility B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {reportViewBy === "report-year" && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Report Year</span>
                <Select defaultValue="2026">
                  <SelectTrigger className="w-[180px] h-[42px] bg-white border-border">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}
      </div>

      {activeTab === "view-by-data" ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[1500px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground text-center w-24">Action</TableHead>
                <TableHead className="font-semibold text-foreground">Report Date</TableHead>
                <TableHead className="font-semibold text-foreground">Regular Report No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg Status</TableHead>
                <TableHead className="font-semibold text-foreground">Product Group</TableHead>
                <TableHead className="font-semibold text-foreground">Facility ID</TableHead>
                <TableHead className="font-semibold text-foreground">Facility Name</TableHead>
                <TableHead className="font-semibold text-foreground">Auditor Name</TableHead>
                <TableHead className="font-semibold text-foreground">Auditee Name</TableHead>
                <TableHead className="font-semibold text-foreground">Correction</TableHead>
                <TableHead className="font-semibold text-foreground text-center w-32">Current Process</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="table" size="icon" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl [&>button]:hidden">
                        <div className="bg-white rounded-lg">
                          <div className="flex items-center justify-between p-6 pb-2 border-b-0">
                            <h2 className="text-xl font-bold text-foreground">Regular Report Details</h2>
                            <DialogClose className="rounded-full p-2 bg-surface hover:bg-surface-hover transition-colors">
                              <X className="h-5 w-5 text-muted-foreground" />
                            </DialogClose>
                          </div>
                          <div className="p-6 pt-4 space-y-6 max-h-[80vh] overflow-y-auto">
                            {/* Grid Details */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-8">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Report Date</p>
                                <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Regular Report No.</p>
                                <p className="text-sm font-semibold text-foreground">47968</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Language</p>
                                <p className="text-sm font-semibold text-foreground">Indonesia</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Reg Status</p>
                                <p className="text-sm font-semibold text-foreground">LPPOM Co. Ltd.</p>
                              </div>
                              
                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Reg No. and Product Group</p>
                                <p className="text-sm font-semibold text-foreground">Reg No: 60365 - Product Group : Ikan dan Produk Perikanan</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Aplication Type</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Scheme</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">BPJPH Product Type</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Facility</p>
                                <p className="text-sm font-semibold text-foreground">ID : 1 - NAME : Facility A</p>
                              </div>

                              <div className="md:col-span-4">
                                <p className="text-xs text-muted-foreground mb-1">Address</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Start Date Internal Audit</p>
                                <p className="text-sm font-semibold text-foreground">29 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">End Date Internal Audit</p>
                                <p className="text-sm font-semibold text-foreground">30 June 2026</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Auditor Name</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Auditee Name</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>

                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Corrective Action</p>
                                <p className="text-sm font-semibold text-foreground">-</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Report File</p>
                                <Button variant="brand" className="h-8 text-xs font-semibold px-4 mt-1 rounded-md bg-brand hover:bg-brand/90 text-white shadow-sm">
                                  Download Report
                                </Button>
                              </div>
                            </div>

                            {/* Memo Section */}
                            <div className="bg-surface rounded-xl p-6 border border-border">
                              <h3 className="text-lg font-bold text-foreground mb-4">Memo</h3>
                              
                              <div className="rounded-lg border border-border overflow-hidden bg-white">
                                <Table className="text-[12px]">
                                  <TableHeader className="bg-table-head">
                                    <TableRow>
                                      <TableHead className="font-semibold text-foreground w-20">Memo ID</TableHead>
                                      <TableHead className="font-semibold text-foreground">Description</TableHead>
                                      <TableHead className="font-semibold text-foreground w-32">Is Changed?</TableHead>
                                      <TableHead className="font-semibold text-foreground">Memo</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>1</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of Company Management that affects halal policy</span>
                                          <span className="text-muted-foreground">Perubahan Manajemen Halal yang berpengaruh terhadap kebijakan halal.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>2</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of Halal Assurance System (SOP, documents, Personnel, etc).</span>
                                          <span className="text-muted-foreground">Perubahan komponen Manual SJH (SOP, dokumen, personal, dll).</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>3</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of production facilities.</span>
                                          <span className="text-muted-foreground">Perubahan Lokasi Pabrik.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>4</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of materials (producer/supplier, type of material).</span>
                                          <span className="text-muted-foreground">Perubahan bahan (produsen/pemasok, tipe bahan, dll).</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>5</TableCell>
                                      <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="italic">Change of formula and development new product.</span>
                                          <span className="text-muted-foreground">Perubahan formula dan Pengembangan Produk Baru.</span>
                                        </div>
                                      </TableCell>
                                      <TableCell>No</TableCell>
                                      <TableCell>-</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>

                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="table" size="icon" className="h-8 w-8 text-green-600 bg-green-50 hover:bg-green-100">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>47968</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell>Produk Biologi (Biological Products)</TableCell>
                <TableCell>1</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50 border border-blue-200 font-normal text-xs py-1 px-3 inline-flex w-full justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                    Open
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table className="text-[11px] min-w-[800px]">
            <TableHeader className="bg-table-head">
              <TableRow>
                <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Regular Report No.</TableHead>
                <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
                <TableHead className="font-semibold text-foreground">Activity</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Done by</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>29 June 2026</TableCell>
                <TableCell>47968</TableCell>
                <TableCell>605654</TableCell>
                <TableCell>New</TableCell>
                <TableCell className="text-right">Hasan</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      
      <PaginationFooter />
    </>
  );
}

function ListOfHalalDecree() {
  const [viewBy, setViewBy] = useState("all");

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select value={viewBy} onValueChange={setViewBy}>
              <SelectTrigger className="w-[380px] h-[42px] bg-white border-border">
                <SelectValue placeholder="- Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                <SelectItem value="all">All Halal Registration (Valid & Expired Certified)</SelectItem>
                <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1500px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground w-12">No</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Process Status /<br/>Halal Decree</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Certification Agreement</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Reg No.</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">STTD</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Reg Status</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Product Group</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">BPJPH Product Type</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Application Type</TableHead>
              <TableHead rowSpan={2} className="align-middle font-semibold text-foreground">Halal Decree No.</TableHead>
              <TableHead colSpan={2} className="font-semibold text-foreground text-center border-b border-border">Period of Halal Decree</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="font-semibold text-foreground text-center">Valid Start</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Valid End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={12} className="text-center py-6 text-muted-foreground font-medium">No Data Available in Table</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function ListOfHPASStatusCertificate() {
  const [viewBy, setViewBy] = useState("all");

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">View by Data</span>
            <Select value={viewBy} onValueChange={setViewBy}>
              <SelectTrigger className="w-[380px] h-[42px] bg-white border-border">
                <SelectValue placeholder="- Select Data Type -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-data-type">- Select Data Type -</SelectItem>
                <SelectItem value="all">All Halal Registration (Valid & Expired Certified)</SelectItem>
                <SelectItem value="valid">Valid Certified Halal Registration</SelectItem>
                <SelectItem value="expired">Expired Certified Halal Registration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1500px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
              <TableHead className="font-semibold text-foreground text-center w-20">Action</TableHead>
              <TableHead className="font-semibold text-foreground">Reg No.</TableHead>
              <TableHead className="font-semibold text-foreground">Facility ID</TableHead>
              <TableHead className="font-semibold text-foreground">Facility Name</TableHead>
              <TableHead className="font-semibold text-foreground">HPAS No.</TableHead>
              <TableHead className="font-semibold text-foreground">HPAS Type</TableHead>
              <TableHead className="font-semibold text-foreground">HPAS Audit Result</TableHead>
              <TableHead className="font-semibold text-foreground">Fatwa Passed Date</TableHead>
              <TableHead className="font-semibold text-foreground">Valid Start</TableHead>
              <TableHead className="font-semibold text-foreground">Valid End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell className="text-center">
                <Button variant="table" size="icon" className="h-8 w-8 text-green-600 bg-green-50 hover:bg-green-100 mx-auto">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>605654</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Attached</TableCell>
              <TableCell>Attached</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}

function HalalRegistrationActivityHistory() {
  const [selectedReg, setSelectedReg] = useState("169976");

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex h-[42px] w-full max-w-[300px] items-center gap-3 rounded-md bg-surface px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-border">|</span>
          <input type="search" placeholder="Input some text..." className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold whitespace-nowrap">Reg No. and Product Group</span>
            <Select value={selectedReg} onValueChange={setSelectedReg}>
              <SelectTrigger className="w-[520px] h-[42px] bg-white border-border text-left">
                <SelectValue placeholder="Select Reg No. and Product Group" />
              </SelectTrigger>
              <SelectContent className="max-w-[800px]">
                <SelectItem value="186592">Reg No. : 186592 - Product Group : Penyediaan Makanan dan Minuman Dengan Pengolahan (Foods and Beverages Service with Process)</SelectItem>
                <SelectItem value="169976">Reg No. : 169976 - Product Group : Servis (Services)</SelectItem>
                <SelectItem value="166302">Reg No. : 166302 - Product Group : Alat Tulis dan Perlengkapan Kantor (Stationary)</SelectItem>
                <SelectItem value="156265">Reg No. : 156265 - Product Group : Aksesoris (Clothing Accessories)</SelectItem>
                <SelectItem value="155931">Reg No. : 155931 - Product Group : Jasa Pendistribusian (Product Transportation Service)</SelectItem>
                <SelectItem value="154929">Reg No. : 154929 - Product Group : Bahan Obat (Drugs Ingredients)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <Table className="text-[11px] min-w-[1200px]">
          <TableHeader className="bg-table-head">
            <TableRow>
              <TableHead className="font-semibold text-foreground w-12">No.</TableHead>
              <TableHead className="font-semibold text-foreground w-32">Date</TableHead>
              <TableHead className="font-semibold text-foreground">Activity</TableHead>
              <TableHead className="font-semibold text-foreground">Next Process</TableHead>
              <TableHead className="font-semibold text-foreground">Done by</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>29 June 2026</TableCell>
              <TableCell>Delete material name : "MyVla Vla Bubuk Instan Rasa Vanila" on Material ID : "1".</TableCell>
              <TableCell>-</TableCell>
              <TableCell>rootcerol</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PaginationFooter />
    </>
  );
}
