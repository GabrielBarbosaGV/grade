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

    insert(...timeLocations: TimeLocation[]) {
        if (this.noIntersect
                && (this.haveIntersection(this.timeLocations, timeLocations)
                || this.hasInternalIntersection(timeLocations))) {
            let errMessage = "Attempted to insert intersecting TimeLocation(s), but noIntersect is set to true.";
            throw new Error(errMessage);
        } else {
            this.timeLocations = [...this.timeLocations, ...timeLocations];
        }
    }

    insertArray(timeLocations: TimeLocation[]) {
        this.insert(...timeLocations);
    }

    insertSchedule(schedule: Schedule) {
        this.insertArray(schedule.timeLocations);
    }

    intersectsWith(schedule: Schedule) {
        return this.haveIntersection(this.timeLocations, schedule.timeLocations);
    }

    hasIntersection(timeLocation: TimeLocation, timeLocations: TimeLocation[]) {
        for (let tl of timeLocations) {
            if (tl.intersectsWith(timeLocation)) return true;
        }

        return false;
    }

    haveIntersection(timeLocations0: TimeLocation[], timeLocations1: TimeLocation[]) {
        for (let tl0 of timeLocations0) {
            if (this.hasIntersection(tl0, timeLocations1)) return true;
        }

        return false;
    }

    hasInternalIntersection(timeLocations: TimeLocation[]) {
        for (let tl0 in timeLocations) {
            for (let tl1 in timeLocations) {
                if ((tl0 !== tl1) && timeLocations[tl0].intersectsWith(timeLocations[tl1]))
                    return true;
            }
        }
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

    static parseTimeLocation(tlstr: string) {
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

    static parseTimeLocations(...tlstrs: string[]) {
        return tlstrs.map(tlstr => TimeLocation.parseTimeLocation(tlstr));
    }

    static parseTimeLocationArray(tlstrs: string[]) {
        return TimeLocation.parseTimeLocations(...tlstrs);
    }

    intersectsWith(timeLocation: TimeLocation) {
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

    isEarlierThan(timeStamp: TimeStamp) {
        if (this.hour < timeStamp.hour) return true;
        else if (this.hour === timeStamp.hour) return this.minute < timeStamp.minute;
        else return false;
    }

    isAfter(timeStamp: TimeStamp) {
        if (this.hour > timeStamp.hour) return true;
        else if (this.hour === timeStamp.hour) return this.minute > timeStamp.minute;
        else return false;
    }
    
    isEqualTo(timeStamp: TimeStamp) {
        return ((this.hour === timeStamp.hour) && (this.minute === timeStamp.minute))
    }
}