export default class CourseClass {
    code: string;
    name: string;
    teacher: string;
    schedule: Schedule;
    flags: string[];

    constructor(code: string, name: string, teacher: string, schedule: Schedule, flags: string[] = []) {
        this.code = code;
        this.name = name;
        this.teacher = teacher;
        this.schedule = schedule;
        this.flags = flags;
    }
}

export class Schedule {
    timeLocations: TimeLocation[];
    noIntersect: boolean;

    constructor(timeLocations: TimeLocation[], noIntersect: boolean = true) {
        this.timeLocations = timeLocations;
        this.noIntersect = noIntersect;

        if (this.noIntersect) {
            if (this.hasInternalIntersection(timeLocations)) {
                let errMessage: string = "There are intersecting TimeLocations in given set, and noIntersect is set to true.";
                throw new Error(errMessage);
            }
        }
    }

    insert(...timeLocations: TimeLocation[]): Schedule {
        if (this.noIntersect
                && (this.haveIntersection(this.timeLocations, timeLocations)
                || this.hasInternalIntersection(timeLocations))) {
            let errMessage = "Attempted to insert intersecting TimeLocation(s), but noIntersect is set to true.";
            throw new Error(errMessage);
        } else {
            this.timeLocations = [...this.timeLocations, ...timeLocations];
        }

        return this;
    }

    insertArray(timeLocations: TimeLocation[]): Schedule {
        this.insert(...timeLocations);

        return this;
    }

    insertSchedule(schedule: Schedule): Schedule {
        this.insertArray(schedule.timeLocations);

        return this;
    }

    intersectsWith(schedule: Schedule): boolean {
        return this.haveIntersection(this.timeLocations, schedule.timeLocations);
    }

    hasIntersection(timeLocation: TimeLocation, timeLocations: TimeLocation[]): boolean {
        for (let tl of timeLocations) {
            if (tl.intersectsWith(timeLocation)) return true;
        }

        return false;
    }

    haveIntersection(timeLocations0: TimeLocation[], timeLocations1: TimeLocation[]): boolean {
        for (let tl0 of timeLocations0) {
            if (this.hasIntersection(tl0, timeLocations1)) return true;
        }

        return false;
    }

    hasInternalIntersection(timeLocations: TimeLocation[]): boolean {
        for (let tl0 in timeLocations) {
            for (let tl1 in timeLocations) {
                if ((tl0 !== tl1) && timeLocations[tl0].intersectsWith(timeLocations[tl1]))
                    return true;
            }
        }

        return false;
    }
}

export class ClassSchedule extends Schedule {
    courseClass: CourseClass;

    constructor(timeLocations: TimeLocation[], courseClass: CourseClass, noIntersect: boolean = true) {
        super(timeLocations, noIntersect);

        this.courseClass = courseClass;
    }

    getCourseClassName(): string {
        return this.courseClass.name;
    }

    getCourseClassCode(): string {
        return this.courseClass.code;
    }

    getCourseClassTeacher(): string {
        return this.courseClass.teacher;
    }
}

const days = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]

export class TimeLocation {
    day: number;
    startingTime: TimeStamp;
    endingTime: TimeStamp;

    constructor(day: number, startingTime: TimeStamp, endingTime: TimeStamp) {
        this.day = day;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
    }

    static parseTimeLocation(tlstr: string): TimeLocation {
        let day: number = days.indexOf(tlstr.slice(0, 3));
        let times: string[] = tlstr.slice(4).split('-');
        let startingNumbers: number[] = times[0].split(':').map(str => parseInt(str));
        let endingNumbers: number[] = times[1].split(':').map(str => parseInt(str));
        let startingTime: TimeStamp = null;
        let endingTime: TimeStamp = null;

        if (startingNumbers.length > 1)
            startingTime = new TimeStamp(startingNumbers[0]);
        else startingTime = new TimeStamp(startingNumbers[0], startingNumbers[1]);

        if (endingNumbers.length > 1)
            endingTime = new TimeStamp(endingNumbers[0]);
        else endingTime = new TimeStamp(endingNumbers[0], endingNumbers[1]);

        return new TimeLocation(day, startingTime, endingTime);
    }

    static parseTimeLocations(...tlstrs: string[]): TimeLocation[] {
        return tlstrs.map(tlstr => TimeLocation.parseTimeLocation(tlstr));
    }

    static parseTimeLocationArray(tlstrs: string[]): TimeLocation[] {
        return TimeLocation.parseTimeLocations(...tlstrs);
    }

    intersectsWith(timeLocation: TimeLocation): boolean {
        if (timeLocation.startingTime.isEarlierThan(this.startingTime)) {
            return timeLocation.endingTime.isEarlierThan(this.startingTime)
                || timeLocation.endingTime.isEqualTo(this.startingTime);
        } else if (timeLocation.startingTime.isAfter(this.endingTime)) return false;
        else return false;
    }
}

export class TimeStamp {
    hour: number;
    minute: number;

    constructor(hour: number, minute: number = 0) {
        this.hour = hour;
        this.minute = minute;
    }

    diffInSeconds(timeStamp: TimeStamp): number {
        let hours = this.hour - timeStamp.hour;
        let minutes = this.minute - timeStamp.minute;

        return ((hours * 3600) + (minutes*60));
    }

    isEarlierThan(timeStamp: TimeStamp): boolean {
        if (this.hour < timeStamp.hour) return true;
        else if (this.hour === timeStamp.hour) return this.minute < timeStamp.minute;
        else return false;
    }

    isAfter(timeStamp: TimeStamp): boolean {
        if (this.hour > timeStamp.hour) return true;
        else if (this.hour === timeStamp.hour) return this.minute > timeStamp.minute;
        else return false;
    }
    
    isEqualTo(timeStamp: TimeStamp): boolean {
        return ((this.hour === timeStamp.hour) && (this.minute === timeStamp.minute))
    }
}