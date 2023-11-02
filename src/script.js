document.addEventListener("DOMContentLoaded", function () {
    const selectTaxistas = document.getElementById("select-taxistas");
  
    // Hacer una solicitud al backend para obtener los nombres de los taxistas
    fetch('/taxistas')
      .then(response => response.json())
      .then(data => {
        // Llenar el menú desplegable con los nombres de los taxistas
        data.forEach(taxista => {
          const option = document.createElement('option');
          option.value = taxista;
          option.textContent = taxista;
          selectTaxistas.appendChild(option);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  