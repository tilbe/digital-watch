function Gettime(){
    var now=new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();

    var day=now.getDate
    var mount=now.getMonth()+1;
    var year=now.getFullYear

    document.getElementById('hours').innerText=hour;
    document.getElementById('minute').innerText=minute;
    document.getElementById('second').innerText=second;



}
setInterval(function(){Gettime();},1000);
