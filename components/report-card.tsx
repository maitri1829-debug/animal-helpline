"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, AlertCircle, CheckCircle2, Phone } from "lucide-react"
import type { AnimalReport } from "@/lib/mock-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Image from "next/image"

interface ReportCardProps {
  report: AnimalReport
  onStatusChange?: (reportId: string, newStatus: AnimalReport["status"]) => void
}

export function ReportCard({ report, onStatusChange }: ReportCardProps) {
  const [status, setStatus] = useState(report.status)

  const urgencyColors = {
    low: "bg-muted text-muted-foreground",
    medium: "bg-accent text-accent-foreground",
    high: "bg-primary/20 text-primary",
    critical: "bg-destructive text-destructive-foreground",
  }

  const statusColors = {
    pending: "bg-accent text-accent-foreground",
    assigned: "bg-primary/20 text-primary",
    rescued: "bg-secondary text-secondary-foreground",
    closed: "bg-muted text-muted-foreground",
  }

  const statusIcons = {
    pending: AlertCircle,
    assigned: Clock,
    rescued: CheckCircle2,
    closed: CheckCircle2,
  }

  const StatusIcon = statusIcons[status]

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus as AnimalReport["status"])
    onStatusChange?.(report.id, newStatus as AnimalReport["status"])
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={report.imageUrl || "/placeholder.svg"}
          alt={`${report.type} in need`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <CardTitle className="text-lg">{report.type}</CardTitle>
              <Badge className={urgencyColors[report.urgency]} variant="secondary">
                {report.urgency === "critical" && "CRITICAL"}
                {report.urgency === "high" && "High Priority"}
                {report.urgency === "medium" && "Medium"}
                {report.urgency === "low" && "Low"}
              </Badge>
            </div>
            <CardDescription className="flex items-center gap-1 text-sm">
              <Clock className="h-3 w-3" />
              Reported {formatDate(report.reportedAt)}
            </CardDescription>
          </div>
          <Badge className={statusColors[status]} variant="outline">
            <StatusIcon className="mr-1 h-3 w-3" />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="mb-1 text-sm font-medium text-foreground">Condition:</p>
          <p className="text-sm text-muted-foreground">{report.condition}</p>
        </div>

        <div>
          <p className="mb-1 text-sm font-medium text-foreground">Description:</p>
          <p className="text-sm text-muted-foreground">{report.description}</p>
        </div>

        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{report.location}</span>
        </div>

        <div className="space-y-3 border-t pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Update Status:</label>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="rescued">Rescued</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Contact Reporter
            </Button>
            <Button variant="outline" size="sm">
              Get Directions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
