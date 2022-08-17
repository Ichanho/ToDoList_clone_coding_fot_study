const clockTitle = document.querySelector(".clock");

function padNum(num, padSize)
  {
    const padStr = String(num).padStart(padSize,"0");
    return padStr;
  }

function getTime()
{
  const time = new Date();
  
  function padNum(num, padSize)
  {
    const padStr = String(num).padStart(padSize,"0");
    return padStr;
  }
  const hour = Math.floor(time.getHours());
  const minute = Math.floor(time.getMinutes());
  const sec = Math.floor(time.getSeconds());

  clockTitle.innerText=(padNum(hour,2)+"h  "+padNum(minute,2)+"m  "+padNum(sec,2)+"s");
}
getTime();

setInterval(getTime, 1000);