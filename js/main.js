$(document).ready(function(){
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(85) 98987-4532'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '065.561.303.03'
    });
    $('#cep').mask('00000-000', {
        placeholder: '20128-321'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            },
            
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
})