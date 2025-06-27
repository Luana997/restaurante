document.getElementById('mostrar-formulario').addEventListener('click', () => {
    const secao = document.getElementById('secao-contato');
    secao.classList.remove('d-none');
    secao.scrollIntoView({ behavior: 'smooth' });
  
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.add('is-valid');
      });
    });
    
    const alerta = document.getElementById('alerta');
    alerta.innerHTML = ''; // Limpa alertas anteriores
  
    if (!nome || !email || !mensagem) {
      alerta.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Por favor, preencha todos os campos obrigatórios.
          <button type="button" class="close" data-dismiss="alert" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
      return;
    }
  
    alerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Mensagem enviada com sucesso! Entraremos em contato em breve.
        <button type="button" class="close" data-dismiss="alert" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
  
    this.reset();
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const form = this;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(texto => {
        const alerta = document.getElementById('alerta');
        alerta.innerHTML = '';
  
        if (texto.includes('OK')) {
          alerta.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              Sua mensagem foi enviada com sucesso!
              <button type="button" class="close" data-dismiss="alert">&times;</button>
            </div>`;
          form.reset();
        } else {
          alerta.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              Ocorreu um erro. Tente novamente.
              <button type="button" class="close" data-dismiss="alert">&times;</button>
            </div>`;
        }
      });
  });
  