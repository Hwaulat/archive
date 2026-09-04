import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const activityData = [
  { no: 1, name: "Cinta Aja", title: "QC Manager", phone: "12 300, 12 300", email: "a3.include@gmail.com", dept: "Produksi", date: "27 Jul 2025" },
  { no: 2, name: "Budi Santoso", title: "QA Staff", phone: "+62812345678", email: "budi.s@example.com", dept: "Pemasaran", date: "25 Jul 2025" },
  { no: 3, name: "Dewi Lestari", title: "IT Analyst", phone: "+62898765432", email: "dewi.l@example.com", dept: "Teknologi Informasi", date: "24 Jul 2025" },
];

export function ActivityHistory() {
  return (
    <div className="space-y-6">
      {/* Company Information */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Company Information</CardTitle>
          <div className="space-x-2">
            <Button variant="outline">Edit Info</Button>
            <Button>Save Changes</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-sm text-muted-foreground">Office Status</p>
              <p className="font-medium">Kantor Cabang Indonesia - LPPOM DKI Jakarta</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Branch</p>
              <p className="font-medium">Pusat (Headquarter)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Company ID</p>
              <p className="font-medium">22</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">NDPU (BPJPH Company ID on SIHALAL)</p>
              <p className="font-medium">ICT001</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">NIB (Permit Type No. on OSS)</p>
              <p className="font-medium">-</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Company Name</p>
              <p className="font-medium">Evigo</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">Jl. Pemuda No.5, Bogor, Indonesia, 23166, Bogor, Indonesia</p>
            </div>
            <div className="col-span-4 mt-4">
              <p className="text-sm text-muted-foreground">Customer Status</p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200 border-none">Active</Badge>
                <p className="text-sm">Halal Certified Since : April 09th, 2026, on Product Group : "Lain-lain (Others)" with Halal Decree No. : "RKS-000010426".</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Conversion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Certificate Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Conversion Reg No.</p>
              <p className="font-medium">CNV001445</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Process Status</p>
              <Badge variant="outline" className="mt-1">In Progress</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Disclaimer Reason</p>
              <p className="font-medium">-</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">NIB (Permit Type No. on OSS)</p>
              <p className="font-medium">-</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Person in Charge</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Phone No.</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Meeting Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityData.map((item) => (
                <TableRow key={item.no}>
                  <TableCell>{item.no}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.dept}</TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
