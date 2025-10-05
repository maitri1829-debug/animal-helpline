import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Clock, CheckCircle2, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      label: "Pending Reports",
      value: "3",
      icon: AlertCircle,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Assigned",
      value: "2",
      icon: Clock,
      color: "text-accent-foreground",
      bgColor: "bg-accent",
    },
    {
      label: "Rescued Today",
      value: "1",
      icon: CheckCircle2,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
    {
      label: "Total This Week",
      value: "12",
      icon: TrendingUp,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
