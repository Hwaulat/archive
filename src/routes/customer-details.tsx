import { createFileRoute, Link } from '@tanstack/react-router';
import { ArchiveIcon, ChevronRight, Search, ChevronDown, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye } from 'lucide-react';

export const Route = createFileRoute('/customer-details')({
  component: CustomerDetailsPage,
});

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
            <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Activity History</Button>
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
                    <Select defaultValue="type">
                      <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                        <SelectValue placeholder="- Select Data Type -" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type">- Select Data Type -</SelectItem>
                        <SelectItem value="branch">Branch</SelectItem>
                        <SelectItem value="company-name">Company Name</SelectItem>
                        <SelectItem value="company-country">Company Country</SelectItem>
                        <SelectItem value="reg-no">Reg No.</SelectItem>
                        <SelectItem value="product-group">Product Group and Product Type</SelectItem>
                        <SelectItem value="certificate">Certificate No.</SelectItem>
                        <SelectItem value="date">Date Period</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table className="text-[11px] min-w-[1500px]">
                    <TableHeader className="bg-table-head">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">No</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Reg No.</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Reg Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Completed Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Registration Review Date<br/>(Halal Partner)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Akad Generate<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Approved Akad<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">STTD<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Auditor Assigned<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Auditor Passed<br/>Date</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Audit Result Review Date<br/>(Halal Quality Board)</TableHead>
                        <TableHead className="font-semibold text-foreground whitespace-nowrap">Post Audit<br/>Passed Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>186492</TableCell>
                        <TableCell>28 June 2026, 12:00:00</TableCell>
                        <TableCell>28 June 2026, 12:00:00</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
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
                          <FacilityDetailsDialog>
                            <Button variant="table" size="icon" aria-label="View detail" className="h-8 w-8 text-blue-600 bg-blue-50 hover:bg-blue-100">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </FacilityDetailsDialog>
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
                      <Select defaultValue="type">
                        <SelectTrigger className="w-[300px] h-[42px] bg-white border-border">
                          <SelectValue placeholder="- Select Data Type -" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="type">- Select Data Type -</SelectItem>
                          <SelectItem value="branch">Branch</SelectItem>
                          <SelectItem value="company-name">Company Name</SelectItem>
                          <SelectItem value="company-country">Company Country</SelectItem>
                          <SelectItem value="reg-no">Reg No.</SelectItem>
                          <SelectItem value="product-group">Product Group and Product Type</SelectItem>
                          <SelectItem value="certificate">Certificate No.</SelectItem>
                          <SelectItem value="date">Date Period</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">Export Data to Excel</Button>
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

            {/* Other Accordions */}
            {[
              "List of Akad",
              "Registered Product",
              "Registered Material",
              "Inquiry of Material",
              "Inquiry of Notification Letter",
              "Regular Report",
              "List of Halal Decree",
              "List of HPAS Status / Certificate",
              "Halal Registration Activity History"
            ].map((title, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg bg-card px-2 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-4 py-4 font-semibold text-[15px] hover:no-underline">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-sm text-muted-foreground">
                  Content for {title} goes here.
                </AccordionContent>
              </AccordionItem>
            ))}

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
