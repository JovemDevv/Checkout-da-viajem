document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Exibir a mensagem de sucesso
    var successMessage = document.createElement("div");
    successMessage.textContent = "Checkout finalizado com sucesso!";
    successMessage.classList.add("success-message"); // Adiciona a classe "success-message" ao elemento
  
    // Adicionar a mensagem ao body do documento
    document.body.appendChild(successMessage);
  
    // Recarregar a página após 2 segundos
    setTimeout(function() {
      location.reload();
    }, 2000);
  });
  