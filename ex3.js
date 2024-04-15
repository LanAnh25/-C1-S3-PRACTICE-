function  findAverage(numbers){
    let sum = 0;
    for ( let i = 0; i< numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}
let score = [1,2,3];
let averageScore = findAverage(score);
console.log("Average score", averageScore);