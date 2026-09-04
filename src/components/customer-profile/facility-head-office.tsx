import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function FacilityHeadOffice() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Facility / Head Office (HO)</CardTitle>
          <div className="space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Facility</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="facilityName">Facility Name</Label>
              <Input id="facilityName" defaultValue="Evigo Headquarter" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="facilityType">Facility Type</Label>
              <Input id="facilityType" defaultValue="Kantor Pusat (Head Office)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="picName">Person In Charge (PIC)</Label>
              <Input id="picName" defaultValue="Budi Santoso" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="picContact">PIC Contact Number</Label>
              <Input id="picContact" defaultValue="+62812345678" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Full Address</Label>
              <Input id="address" defaultValue="Jl. Pemuda No.5, Bogor, Indonesia, 23166" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" defaultValue="Bogor" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province / State</Label>
              <Input id="province" defaultValue="Jawa Barat" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
