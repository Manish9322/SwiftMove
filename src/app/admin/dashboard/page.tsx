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
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, ListOrdered, Ban } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 186 },
  { month: "Feb", sales: 305 },
  { month: "Mar", sales: 237 },
  { month: "Apr", sales: 273 },
  { month: "May", sales: 209 },
  { month: "Jun", sales: 214 },
];

const revenueData = [
    { date: '2024-01-01', revenue: 550 },
    { date: '2024-01-02', revenue: 680 },
    { date: '2024-01-03', revenue: 720 },
    { date: '2024-01-04', revenue: 590 },
    { date: '2024-01-05', revenue: 810 },
    { date: '2024-01-06', revenue: 760 },
    { date: '2024-01-07', revenue: 900 },
];

const cancellationData = [
  { name: 'Customer Changed Mind', value: 45, fill: 'hsl(var(--chart-1))' },
  { name: 'Flight Delay', value: 25, fill: 'hsl(var(--chart-2))' },
  { name: 'Booked by Mistake', value: 15, fill: 'hsl(var(--chart-3))' },
  { name: 'Other', value: 15, fill: 'hsl(var(--chart-4))' },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                New Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+235</div>
              <p className="text-xs text-muted-foreground">
                +18.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <ListOrdered className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cancellations
              </CardTitle>
              <Ban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+57</div>
              <p className="text-xs text-muted-foreground">
                +2 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sales This Year</CardTitle>
            </CardHeader>
            <CardContent>
               <ChartContainer config={{}} className="w-full h-[300px]">
                <BarChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
               <ChartContainer config={{}} className="w-full h-[300px]">
                <LineChart data={revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
                <CardTitle>Cancellation Reasons</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                 <ChartContainer config={{}} className="w-full h-[300px]">
                    <PieChart>
                         <ChartTooltip content={<ChartTooltipContent />} />
                        <Pie data={cancellationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                            {cancellationData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
          </Card>
          <Card>
             <CardHeader>
                <CardTitle>Recent Cancellations</CardTitle>
                <CardDescription>An overview of recently cancelled bookings.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead className="text-right">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell><Badge variant="outline">Flight Delay</Badge></TableCell>
                            <TableCell className="text-right">2024-07-28</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell><Badge variant="outline">Changed Mind</Badge></TableCell>
                            <TableCell className="text-right">2024-07-28</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Peter Jones</TableCell>
                            <TableCell><Badge variant="outline">Other</Badge></TableCell>
                            <TableCell className="text-right">2024-07-27</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
