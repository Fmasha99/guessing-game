class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min_value = min;
        this.max_value = max;
    }

    guess() {
        this.candidate = Math.round((this.min_value+this.max_value)/2);
        return this.candidate;
    }

    lower() {
        this.max_value = this.candidate;
    }

    greater() {
        this.min_value = this.candidate;
    }
}

module.exports = GuessingGame;
