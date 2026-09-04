import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const processData = [
  { step: "Registration", status: "Completed", date: "01 Jul 2025", remarks: "All documents verified" },
  { step: "Document Review", status: "Completed", date: "05 Jul 2025", remarks: "Approved by QA" },
  { step: "Audit Scheduling", status: "In Progress", date: "10 Jul 2025", remarks: "Waiting for auditor confirmation" },
  { step: "On-site Audit", status: "Pending", date: "-", remarks: "-" },
  { step: "Final Decision", status: "Pending", date: "-", remarks: "-" },
];

export function MonitoringProcess() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Monitoring of Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg border">
              <p className="text-sm text-muted-foreground">Current Stage</p>
              <p className="font-bold text-lg">Audit Scheduling</p>
            </div>
            <div className="p-4 bg-muted rounded-lg border">
              <p className="text-sm text-muted-foreground">Overall Status</p>
              <Badge variant="secondary" className="mt-1">In Progress</Badge>
            </div>
            <div className="p-4 bg-muted rounded-lg border">
              <p className="text-sm text-muted-foreground">Estimated Completion</p>
              <p className="font-bold text-lg">August 2025</p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Process Step</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.step}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Completed' ? 'default' : item.status === 'In Progress' ? 'secondary' : 'outline'}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
