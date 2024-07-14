
function calc(e){
    var getInp =  document.getElementById('inp').value += e
}

function eq(){
    var getEq = document.getElementById('inp')
    getEq.value = eval(getEq.value)
}

function clrAll(){
    var getValue =  document.getElementById('inp')
    getValue.value = ''
}

function clr(){
    var getValue = document.getElementById('inp')
    getValue.value = getValue.value.slice(0,-1)
}