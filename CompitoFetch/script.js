async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

async function getDetails(id) {
  try {
    // Fetch details data
    const dataInfo = await fetchData(`https://data.police.uk/api/forces/${id}`);
    return dataInfo;
  } catch (error) {
    console.error(error.message);
    return "N/A"; // Data in case of an error
  }
}

async function displayDataForces() {
  const forcesTableBody = document.querySelector("#ForcesTable tbody");
  const searchInput = document.querySelector("#search");

  try {
    // Fetch All data
    const dataFromURL = await fetchData("https://data.police.uk/api/forces");

    // Clear the table
    forcesTableBody.innerHTML = "";

    // Get the search input value
    const searchTerm = searchInput.value.toLowerCase();

    // Populate the table
    for (const data of dataFromURL) {
      // Check if the search term is present in the force name
      if (data.name.toLowerCase().includes(searchTerm)) {
        const row = forcesTableBody.insertRow();

        // Row Name Info
        const rowNameInfo = document.createElement("div");
        rowNameInfo.textContent = data.name;
        rowNameInfo.classList.add("btn");

        rowNameInfo.addEventListener("click", async function () {
          const details = await getDetails(data.id);

          const description = details.description
            ? details.description.replace(/<\/?p[^>]*>/g, "") // Remove <p> and </p> tags
            : "Not Available";
          const tel = details.telephone ? details.telephone : "Not Available";

          alert(`ID: ${data.id}\nTel: ${tel}\nDescription: ${description}`);
        });

        // Button for the site
        const siteButton = document.createElement("button");
        siteButton.textContent = "Vai al sito";
        siteButton.classList.add("btn", "btn-danger");
        siteButton.addEventListener("click", async function () {
          const details = await getDetails(data.id);
          window.open(details.url);
        });

        row.insertCell(0).appendChild(rowNameInfo);
        row.insertCell(1).appendChild(siteButton);
      }
      // Attach an event listener to the search input
      searchInput.addEventListener("input", displayDataForces);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Initial display of data
displayDataForces();
