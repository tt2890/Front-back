const baseUrl = "http://localhost:3333/"

const makeBody = (body) => JSON.stringify(body);

const makeHeaders = (headers = {}) => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});


const api = {
  //Create
  post: async (path, body) => {
    const res = await fetch(baseUrl + path, {
      method: 'post',
      headers: makeHeaders(),
      body: makeBody(body),
    });
    
    return res.json();
  },

  //Read
  get: async (path) => {
    const res = await fetch(baseUrl + path, {
      method: 'get',
      headers: makeHeaders(),
    });
    
    return res.json();
  },
  
  //Update
  put: (path, body) => {
    return fetch(baseUrl + path, {
      method: 'put',
      headers: makeHeaders(),
      body: makeBody(body),
    });
  },
  
  //Delete
  delete: (path) => {
    return fetch(baseUrl + path, {
      method: 'delete',
      headers: makeHeaders(),
    });
  }

};

// e == event

async function handleSubmit(e) {
  e.preventDefault();

  const form = {
    cpf: e.target.elements.cpf.value,
    name: e.target.elements.name.value,
    city: e.target.elements.city.value,
    state: e.target.elements.state.value,
  };

  api.post("person", form)
}

// getPerson()
