"use client"

import { useEffect, useState } from "react"
import { toNepaliDate, formatNepaliDate, getNepaliTime } from "@/lib/nepali-date"
import { Calendar, Clock } from "lucide-react"

export function NepaliDateDisplay() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(() => {
    function update() {
      const now = new Date()
      const nd = toNepaliDate(now)
      setDate(`${nd.dayName}, ${formatNepaliDate(nd)}`)
      setTime(getNepaliTime())
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!date) return null

  return (
    <div className="hidden items-center gap-3 font-mono text-[11px] text-muted-foreground md:flex">
      <span className="flex items-center gap-1.5">
        <Calendar className="size-3" />
        {date}
      </span>
      <span className="text-border">|</span>
      <span className="flex items-center gap-1.5">
        <Clock className="size-3" />
        {time}
      </span>
    </div>
  )
}
