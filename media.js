function calcular(){

    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let media;

    nota1 = parseFloat(document.querySelector('#TXTnota1').value);
    nota2 = parseFloat(document.querySelector('#TXTnota2').value);
    nota3 = parseFloat(document.querySelector('#TXTnota3').value);
    nota4 = parseFloat(document.querySelector('#TXTnota4').value);

    media = (nota1 + nota2 + nota3 + nota4) / 4

    document.querySelector('#lblmedia').innerHTML = media;

    if (media >= 7) 
        document.querySelector('#lblmsituacao').innerHTML = 'Aprovado';
        else{
            document.querySelector('#lblmsituacao').innerHTML = 'Reprovado';
        }
    
}