function innerProject(projects, message) {
  // const container = document.getElementsByClassName("projects-container");
  const container = document.getElementById("projects-container");
  if (projects.length) {
    const html = projects.map(
      (el) =>
        `
      <div class="project-container">
      <p><strong>Nome:</strong> ${el.name}</p>
      <p><strong>CPF:</strong> ${el.cpf}</p>
      <p><strong>Cidade:</strong> ${el.city}</p>
      <p><strong>Estado:</strong> ${el.state}</p>
      </div>
      `
    );
    container.innerHTML = html.join("");
  } else {
    container.innerHTML = `<h1>${message}</h1>`;
  }
}

async function handleConsultProjectSubmit(e) {
  e.preventDefault();

  const cpf = e.target.elements.cpf.value;

  if (cpf.length === 11) {
    const project = await api.get(`person?cpf=${cpf}`);

    innerProject(project, "Nenhum cadastro com esse CPF");

    handleModalClose("consult-project");
  } else {
    alert("Confira CPF");
  }
}

// e == event

async function handleSubmit(e) {
  e.preventDefault();

  const form = {
    cpf: e.target.elements.cpf.value,
    name: e.target.elements.name.value,
    city: e.target.elements.city.value,
    state: e.target.elements.state.value,
  };

  api.post("person", form);
}
