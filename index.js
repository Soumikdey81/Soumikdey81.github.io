var names=new Array();
names[0]="SUBHAYAN";
names[1]="JOY";
names[2]="RIJU";
names[3]="JASON";
names[4]="LARRY";
names[5]="DIPTANIL";
names[6]="FAIZI";
names[7]="ISHAN";
names[8]="HAMIM";
names[9]="SUDEEPTA";

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+names[i])
    }
    else{
        console.log("Hello "+names[i])
    }
}