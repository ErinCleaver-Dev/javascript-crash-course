// while for loops 
start = (string) => {
    console.log(string)
}
end = () => {
    console.log("________end_______")
}
var num = 0;


start("While loops")
while(num < 100) {
    num++;
    console.log(num);
}

end();

start("For loops")
for(let num = 0; num <= 100; num++) {
    num++;
    console.log(num);
}

end();