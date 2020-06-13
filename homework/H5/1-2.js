var data = [1,2,3,4,5];
var total = 0;
for(var i=0;i<data.length;i++){
    total+=data[i];
}
var mean=total/data.length; 
total=0;
for(var i=0;i<data.length;i++){  
    var deviation=data[i]-mean;
    total+=deviation*deviation;
}
var seddev=Math.sqrt(total/data.length); 
console.log("%s的標準差: %d", data, seddev);