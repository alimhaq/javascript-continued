class Clock {
  constructor() {
    const current = new Date();
    this.hours = current.getHours();
    this.minutes = current.getMinutes();
    this.seconds = current.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // console.log(this);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds ++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes ++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    }

    if (this.hours === 24) {
      this.hours = 0;
      this.seconds = 0;
    }
    // console.log(this);
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
