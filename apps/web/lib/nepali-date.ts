const BS_MONTHS = [
  "Baishakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
] as const

const BS_DAYS = [
  "Aaitabar",
  "Sombar",
  "Mangalbar",
  "Budhabar",
  "Bihibar",
  "Sukrabar",
  "Sanibar",
] as const

// Days in each month for BS years 2070-2090
const BS_CALENDAR_DATA: Record<number, number[]> = {
  2070: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2071: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2073: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2074: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2075: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2077: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2078: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2079: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2081: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2082: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2083: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2084: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2085: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2086: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2087: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2088: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2089: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2090: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
}

// Reference: BS 2070/01/01 = AD 2013/04/14
const BS_REF_YEAR = 2070
const AD_REF = new Date(2013, 3, 14) // April 14, 2013

export interface NepaliDate {
  year: number
  month: number
  day: number
  monthName: string
  dayName: string
}

export function toNepaliDate(date: Date): NepaliDate {
  const utcDate = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  )

  const diffTime = utcDate.getTime() - AD_REF.getTime()
  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  let bsYear = BS_REF_YEAR
  let bsMonth = 0
  let bsDay = 1

  // Iterate through years
  while (diffDays >= 0) {
    const monthsInYear = BS_CALENDAR_DATA[bsYear]
    if (!monthsInYear) break

    let daysInYear = 0
    for (const m of monthsInYear) daysInYear += m

    if (diffDays < daysInYear) {
      // Within this year, find the month
      for (let m = 0; m < 12; m++) {
        if (diffDays < monthsInYear[m]!) {
          bsMonth = m
          bsDay = diffDays + 1
          diffDays = -1 // break outer loop
          break
        }
        diffDays -= monthsInYear[m]!
      }
    } else {
      diffDays -= daysInYear
      bsYear++
    }
  }

  const dayOfWeek = utcDate.getDay()

  return {
    year: bsYear,
    month: bsMonth + 1,
    day: bsDay,
    monthName: BS_MONTHS[bsMonth]!,
    dayName: BS_DAYS[dayOfWeek]!,
  }
}

export function formatNepaliDate(nd: NepaliDate): string {
  return `${nd.day} ${nd.monthName} ${nd.year}`
}

export function getNepaliTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })
}
