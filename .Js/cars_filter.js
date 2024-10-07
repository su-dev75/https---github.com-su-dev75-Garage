// Fonction pour filtrer les voitures en fonction des critères sélectionnés
function filterCars() {
  const selectedBrands = Array.from(
    document.querySelectorAll('input[name="brand"]:checked')
  ).map((checkbox) => checkbox.value);
  const maxPrice =
    parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const maxMileage =
    parseFloat(document.getElementById("maxMileage").value) || Infinity;
  const minYear = parseInt(document.getElementById("minYear").value) || 0;
  const cars = document.querySelectorAll(".car");

  cars.forEach((car) => {
    const brand = car.getAttribute("data-brand");
    const price = parseFloat(car.getAttribute("data-price"));
    const mileage = parseFloat(car.getAttribute("data-mileage"));
    const year = parseInt(car.getAttribute("data-year"));

    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(brand);
    const priceMatch = price <= maxPrice;
    const mileageMatch = mileage <= maxMileage;
    const yearMatch = year >= minYear;

    if (brandMatch && priceMatch && mileageMatch && yearMatch) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }
  });
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
  // Réinitialiser les cases cochées
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  // Réinitialiser les valeurs des champs de formulaire
  document.getElementById("maxPrice").value = "";
  document.getElementById("maxMileage").value = "";
  document.getElementById("minYear").value = "";

  // Appliquer à nouveau les filtres après réinitialisation
  filterCars();
}

// Écoute les changements dans le formulaire et filtre les voitures en conséquence
document
  .querySelectorAll('input[name="brand"], #maxPrice, #maxMileage, #minYear')
  .forEach((input) => {
    input.addEventListener("change", filterCars);
  });

// Filtre initiale lors du chargement de la page
filterCars();
