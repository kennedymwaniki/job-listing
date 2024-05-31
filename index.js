
document.getElementById("searchBox").addEventListener("keyup", filterJobs);

function filterJobs() {
  const filter = document.getElementById("searchBox").value.toLowerCase();
  const jobCards = document.getElementsByClassName("jobs");

  for (let i = 0; i < jobCards.length; i++) {
    const jobCard = jobCards[i];
    const jobTitle = jobCard.querySelector(".job h3").textContent.toLowerCase();
    const companyName = jobCard
      .querySelector(".company")
      .textContent.toLowerCase();
    const qualifications = jobCard
      .querySelector(".qualifications")
      .textContent.toLowerCase();

    if (
      jobTitle.includes(filter) ||
      companyName.includes(filter) ||
      qualifications.includes(filter)
    ) {
      jobCard.style.display = "";
    } else {
      jobCard.style.display = "none";
    }
  }
}
