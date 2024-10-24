// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export function checkHP(data) {
    if (data.health > 50) {
        return "healthy"
    } else if (15 <= data.health && data.health <= 50) {
        return "wounded"
    } else if (data.health < 15) {
        return "critical"
    }
}
