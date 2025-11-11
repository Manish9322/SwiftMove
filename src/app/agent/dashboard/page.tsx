
"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Star, Package, CheckCircle, Clock } from "lucide-react"

export default function AgentDashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Today's Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125.50</div>
              <p className="text-xs text-muted-foreground">
                +15% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Order
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#BK-1245</div>
              <p className="text-xs text-muted-foreground">
                Pickup: Terminal 4
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                in the last 24 hours
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Your Rating
              </CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9 / 5.0</div>
              <p className="text-xs text-muted-foreground">
                Based on 52 reviews
              </p>
            </CardContent>
          </Card>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>New Order Requests</CardTitle>
            <CardDescription>Accept new orders to start a job.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Pickup</TableHead>
                            <TableHead>Destination</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>#BK-1250</TableCell>
                            <TableCell>Terminal 2, Gate 12</TableCell>
                            <TableCell>Taxi Stand C</TableCell>
                            <TableCell>15:45</TableCell>
                            <TableCell className="text-right"><Button>Accept</Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>#BK-1251</TableCell>
                            <TableCell>Baggage Claim 5</TableCell>
                            <TableCell>Hotel Shuttle Stop</TableCell>
                            <TableCell>16:10</TableCell>
                            <TableCell className="text-right"><Button>Accept</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </main>
    </div>
  )
}
