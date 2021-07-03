
window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementsByTagName('button')
    var str=''
    //вешаем на него событие
    for (let i = 0; i < a.length; i++) {
     a[i].onclick = async function()  {
        //производим какие-то действия
          if(a[i].value =='='){
            str=await eel.calc(str)()
          }
           else if(a[i].value =='D'){
            str=''
          }
           else if(a[i].value =='<-'){
            str=str.slice(0,-1)
          }
          else{
              str+=a[i].value
          }
        document.getElementsByTagName('textarea').item(0).textContent=str
    }
    }

}
