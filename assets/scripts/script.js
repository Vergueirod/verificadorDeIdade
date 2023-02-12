function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var inputAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if( inputAno.value.length == 0 || inputAno.value > ano){
        window.alert(`[ERRO] Ano invalido, tente novamente!`);
    }

    else{
        var idade = ano - inputAno.value;
        var fsex = document.getElementsByName('radsex');
        var genero = '';
        // Como criar um elemento via JS:
        var img = document.createElement('img');
        // Para colocar um ID ou Class. No meu novo elemento:
        img.setAttribute('id', 'foto');

        if( fsex[0].checked ){
            genero = 'Homem';

            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'assets/img/bebeH.png');
                //bebe
            }
            else if (idade >= 5 && idade < 10){
                img.setAttribute('src', 'assets/img/criancaH.png');
                //crianca
            }
            else if (idade >= 11 && idade < 17){
                img.setAttribute('src', 'assets/img/jovemH.png');
                //jovem
            }
            else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'assets/img/adultoH.png');
                //adulto
            }
            else {
                img.setAttribute('src', 'assets/img/idoso.png');
                //idoso
            }
        }

        else{
            genero = 'Mulher';

            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'assets/img/bebeM.png');
                //bebe
            }
            else if (idade >= 5 && idade < 10){
                img.setAttribute('src', 'assets/img/criancaM.png');
                //crianca
            }
            else if (idade >= 11 && idade < 17){
                img.setAttribute('src', 'assets/img/jovemM.png');
                //jovem
            }
            else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'assets/img/adultoM.png');
                //adulto
            }
            else {
                img.setAttribute('src', 'assets/img/idosa.png');
                //idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}