export default class CourseClass {
    name: String;
    code: String;
    schedule: Schedule;
    flags: Object[];
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
        for (let tl0 of timeLocations) {
            for (let tl1 of timeLocations) {
                if ((tl0 !== tl1) && tl0.intersectsWith(tl1))
                    return true;
            }
        }
    }
}

export class TimeLocation {
    day: number;
    startingTime: TimeStamp;
    endingTime: TimeStamp;

    constructor(day: number, startingTime: TimeStamp, endingTime: TimeStamp) {
        this.day = day;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
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

    constructor(hour: number, minute: number) {
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