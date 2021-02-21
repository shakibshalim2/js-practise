function isLeapYear(year){
    const remainder = year % 400;
    if(remainder == 0){
    
        return true;
    }
    
    else{
    
        return false;
    }

}

const check = isLeapYear(2000)
console.log(check)


