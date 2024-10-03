function navBarAndHeader() {
    fetch('../../Components/EmpDashboard/empDashboardNavBar.html')
        .then(navBar => navBar.text())
        .then(text => {
            document.getElementById('leftNavbar').innerHTML = text;
            });

    fetch('../../Components/EmpDashboard/empDashboardHeader.html')
        .then(header => header.text())
        .then(text => {
            document.getElementById('topNavbar').innerHTML = text;
            });
}

document.addEventListener("DOMContentLoaded", function () {
    navBarAndHeader();
  });