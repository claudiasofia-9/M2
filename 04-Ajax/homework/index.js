var borrar = (id) => {
   // var id = $('#inputDelete').val();
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`amigo numero ${id} borrado con exito`)
            getAmigos()
        }
    })
}

 var getAmigos = () => {
    var list = $('#lista')
    list.empty();
     $.get('http://localhost:5000/amigos', res => {
        for (let i = 0; i < res.length; i++) {
            let btn = `<button onclick="borrar(${res[i].id})">X</button>`
            list.append(`<li>${res[i].name} ${btn}</li>`)
        }
    })
}

$('#search').click(() => {
    var id = $('#input').val()
    $.get(`http://localhost:5000/amigos/${id}`, res =>{
        $('#amigo').text(res.name);
    })
})

$('#delete').click(() => {
    var id = $('#inputDelete').val();
    borrar(id)
})