export default class CourseClass {
    name: String;
    code: String;
    schedule: TimeLocation[];
    flags: Object[];
}

export class TimeLocation {
    day: number;
    startingTime: TimeStamp;
    endingTime: TimeStamp;

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