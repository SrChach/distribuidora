import db  from '../../fire'

const state = {
    valor: null
}

const getters = {

}

const actions = {
    send_mail({commit}, info){
        {
            return new Promise((resolve, reject) => {
                db.collection('mail').add({
                    to: 'link@distribuidoraconchita.com',
                    message: {
                        subject: 'Correo desde la pagina web',
                        html: info.nombre + ' dejo su telefono ' + info.telefono + ' con el mensaje ' + info.mensaje + ' con el correo ' + info.correo
                    }
                })
                .then((res) => {
                    commit('si', 'si')
                    resolve(res)
                })
                .catch((error => {
                    console.log(error)
                    reject(error)
                }))
            })
            // const user = firebase.auth().currentUserreturn
        }
    }
}

const mutations = {
    si(state, valor) {
        state.valor = valor
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}
