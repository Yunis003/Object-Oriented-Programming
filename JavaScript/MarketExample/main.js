function getData(){
    let data = confirm('Kartiniz var?');
    if (data){
        console.log('ok');
        let userInfo = prompt('Istifadeci adinizi daxil edin: ');
        let userArr = userInfo.split(' ')
        localStorage.setItem('userInfo', userArr);
    }
    else{
        localStorage.clear()
        alert('Yekun: 50AZN')
    }
}
getData()