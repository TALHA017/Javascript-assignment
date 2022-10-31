Array.prototype.UppercaseForArray = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    return this;
};
var fruits = ["Shahmeer", "Hamza", "Haris", "Arsalan"];
var h = fruits.UppercaseForArray()
console.log(h);