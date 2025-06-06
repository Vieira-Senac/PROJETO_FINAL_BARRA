function mascara_tel (objeto){
    if(objeto.value.length == 0){
        objeto.value = objeto.value + '(';
    }
    if(objeto.value.length == 3){
        objeto.value = objeto.value + ')';
    }
    if(objeto.value.length == 9){
        objeto.value = objeto.value + '-';
    }
}

function msg(){
    if (document.form1.inputPasseios.value == "0"){
        alert("Selecione o Passeio")
    }
    else{
        if (document.form1.inputAdultos.value == "0"){
            alert("Selecione a Quantidade de Adultos")
        }
        else{
            if (document.form1.inputCriancas.value == "0"){
                alert("Selecione a Quantidade de Crianças")
            }
            else{
                alert("Sr(a) "+document.form1.inputNome.value+", seus dados foram enviados com sucesso. Em breve entraremos em contato");
            }
        }
    }
}