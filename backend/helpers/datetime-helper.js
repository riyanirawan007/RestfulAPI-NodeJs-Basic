exports.getCurrentDateTime=()=>{
    var currTime=new Date();
    var strTime=currTime.getFullYear()
    +'-'+(1+currTime.getMonth())
    +'-'+currTime.getDate()
    +' '+currTime.getHours()
    +':'+currTime.getMinutes()
    +':'+currTime.getSeconds();

    return strTime;
}