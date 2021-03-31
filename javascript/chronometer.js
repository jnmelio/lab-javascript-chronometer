class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(printTime) {
    // ... your code goes here
    this.intervalId = setInterval (() => {
      this.currentTime++
      if (printTime) printTime()
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    return  Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime >= 60) {
      return this.currentTime - 60
    } else {
      return this.currentTime
    }  
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    if (num <= 9) {
      return "0" + num.toString()
    } else {
      return num.toString()
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`
  }
}
