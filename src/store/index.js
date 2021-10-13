import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {

    tasks: [],
    task: {
      id: '',
      name: '',
      categories: [],
      status: '',
      number: 0,
    },
    user: null,
    error: {type: null, message:null}
  },
  mutations: {
    setError(state,payload){
      if(payload === null){
        return state.error = {type: null, message:null}
      }
      if (payload === "EMAIL_NOT_FOUND"){
        return state.error = {type: 'email', message:'Email not registered'}
      }
      if (payload === "INVALID_PASSWORD"){
        return state.error = {type: 'password', message:'Incorrect password'}
      }
      if (payload === "EMAIL_EXISTS"){
        return state.error = {type: 'email', message:'Email already registered'}
      }
      if (payload === "INVALID_EMAIL"){
        return state.error = {type: 'email', message:'Incorrect email format'}
      }
    },
    setUser(state, payload) {
      state.user = payload
    },
    load(state, payload) {
      state.tasks = payload
    },

    set(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delete(state, payload) {
      // voy a filtrar todos los elementos distintos al id=payload que le envio
      state.tasks = state.tasks.filter(item => item.id !== payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    task(state, payload) {
      if (!state.tasks.find(item => item.id === payload)) {
        router.push('/form')
        return
      } state.task = state.tasks.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
      router.push('/form')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))

    }
  },
  actions: {
    singOff({ commit }) {
        commit('setUser', null)
        router.push('/Login')
        localStorage.removeItem('user')
    },
    async userLogin({ commit }, user) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEBD50g0n8wNqAiZQLINKGdQ7OIEvNT28', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
   
        if (userDB.error) {
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        router.push('/form')
       
        localStorage.setItem('user',JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },

    async registerUser({ commit }, user) {
      console.log(user)
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEBD50g0n8wNqAiZQLINKGdQ7OIEvNT28', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        // console.log(userDB)
        if (userDB.error) {
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        router.push('/form')
        localStorage.setItem('user',JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async loadLocalStorage({ commit, state }) {
      if(localStorage.getItem('user')){ //si exist el usuario se llena abajo el state con la info del localstorage
        commit('setUser', JSON.parse(localStorage.getItem('user'))) //parse lo pasa a un objeto xq lo tenia arriba como un json
      }else{
        return commit('setUser', null) //si no existe el localstorage lo anulamos
      }
      try {
        const res = await fetch(`https://blog-firbase-default-rtdb.firebaseio.com/tasks/${state.user.localId}.json?auth=${state.user.idToken}`)
        //capturar las tareas que vienen de la base de datos
        const dataDB = await res.json()

        const arrayTask = []

        for (let id in dataDB) {
          arrayTask.push(dataDB[id])
          commit('load', arrayTask)
        }
        console.log(arrayTask)
      } catch (error) {
        console.log(error)
      }
    },
    async setTask({ commit, state }, task) {
      try {
        const rest = await fetch(`https://blog-firbase-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT', //Agrega un nuevo elemento si yo pongo POST me da un id para c/u pero como yo ya lo genere me conviene el put
          headers: {
            'Contente-type': 'application/json' //le digo que es una app en formato json(siempre es =)
          },
          body: JSON.stringify(task) //transforma los datos a json
        })
        const dataDB = await rest.json()
        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      commit('set', task)
    },
    async deleteTask({ commit, state }, id) {
      try {
        const res = await fetch(`https://blog-firbase-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE', //toma el id de la url y elmina de la base de datos
        })
        commit('delete', id)
      } catch (error) {
        console.log(error)
      }


    },
    setingTask({ commit }, id) {
      commit('task', id)

    },
    async updateTask({ commit, state }, task) {
      try {
        const res = await fetch(`https://blog-firbase-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',
          body: JSON.stringify(task)
        })
        const dataDB = await res.json()
        commit('update', dataDB)

      } catch (error) {
        console.log(error)
      }

    }


  },
  getters: {
    authenticatedUser(state) {
      return !!state.user  //devuelve true or false 
    }
  },
  modules: {
  }

})
