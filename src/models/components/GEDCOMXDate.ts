interface SimpleDate {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
}

interface ClosedDateRangeBasic {
    startDate: Date
    endDate: Date
}

interface ClosedDateRangeDuration {
    startDate: Date
    duration: string
}

type ClosedDateRange = ClosedDateRangeBasic | ClosedDateRangeDuration

interface OpenEndedDateRange {
    startDate?: Date
    endDate?: Date
}

type DateRange = ClosedDateRange | OpenEndedDateRange

interface RecurringDate extends ClosedDateRangeDuration {
    recurrences?: number
}

interface ApproximateDate extends SimpleDate {
    approximate: true
}

interface ApproximateClosedDateRangeBasic extends ClosedDateRangeBasic {
    approximate: true
}

interface ApproximateClosedDateRangeDuration extends ClosedDateRangeDuration {
    approximate: true
}

interface ApproximateOpenEndedDateRange extends OpenEndedDateRange {
    approximate: true
}

type ApproximateDateRange = ApproximateClosedDateRangeBasic | ApproximateClosedDateRangeDuration | ApproximateOpenEndedDateRange


export type GEDCOMXDate = SimpleDate | DateRange | RecurringDate | ApproximateDate | ApproximateDateRange