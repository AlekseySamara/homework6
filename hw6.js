function drarwTriangle (a,b){
    var line="";
    for (i=0;i<b;i++){
        if (b<=3){
            b=3;
        } else {
           b===b;
        }
    line +=a;
    console.log (line);
    } 
}
drarwTriangle ("$",6);   


function toCapitalCase (l){
    var string = "";
    string = l;
    var splits = string.split (" ");
    var stringItog = "";
       for (i = 0; i<splits.length;i++) {
       var Name = splits[i];
       var First = Name.substring(0,1).toUpperCase();
       var Leftovers = Name.substring(1,Name.length);
       stringItog += First + Leftovers + " ";  
       }
       console.log(stringItog);
}
toCapitalCase ("Lorem ipsum stan");
