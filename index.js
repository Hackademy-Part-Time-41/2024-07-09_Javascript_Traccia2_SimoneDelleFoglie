console.log('Inizio');
var i=1;
var sum=0;
var count=0;
while (i<=20) {
    var remainder= i%2;
    if (remainder ==0) {
        console.log('Il numero '+ i+ ' è pari');
        i++;
    } else {
        sum=sum+i;
        count++;
        i++;
    }
}
var media= sum/count;
console.log('La media dei numeri dispari è '+ media);
console.log('Fine');