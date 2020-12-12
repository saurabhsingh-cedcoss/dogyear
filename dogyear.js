function cacualate() {
    var hYear = document.getElementById('hYear').value;
    console.log(hYear);
if(hYear!='' && hYear>0 ){

    if (hYear >= 10.5 && hYear < 21) {
        above10(hYear);
    } else if (hYear >= 21) {
        above21(hYear);
    }
    else if (hYear < 10.5) {
        less10(hYear);
    }
}
}
function less10(hYear) {
    years = (hYear / 10.5);
    newMonth = (years - (Math.floor(years))) * 12;
    newMonth = Math.round(newMonth);
    newYear = Math.floor(years);
    document.getElementById('dogYear').innerHTML = "If you were a dog your age <br> would be " + newYear + " years";
    document.getElementById('dogMonth').innerHTML = newMonth + " months";

}
function above10(hYear) {
    hYear -= 10.5;
    years = (hYear / 10.5);
    newMonth = (years - (Math.floor(years))) * 12;
    newMonth = Math.round(newMonth);
    newYear = Math.floor(years) + 1;
    document.getElementById('dogYear').innerHTML = "If you were a dog your age  <br>would be " + newYear + " years";
    document.getElementById('dogMonth').innerHTML = newMonth + " months";

}
function above21(hYear) {
    hYear -= 21;
    years = (hYear / 4);
    newMonth = (years - (Math.floor(years))) * 12;
    newYear = Math.floor(years) + 2;
    document.getElementById('dogYear').innerHTML = "If you were a dog your age <br> would be " + newYear + " years";
    document.getElementById('dogMonth').innerHTML = newMonth + " months";

}
