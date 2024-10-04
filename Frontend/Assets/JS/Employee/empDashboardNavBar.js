function navBarAndHeader() {
    fetch('../../Components/Employee/empDashboardNavBar.html')
        .then(navBar => navBar.text())
        .then(text => {
            document.getElementById('leftNavbar').innerHTML = text;
            });

    /*fetch('../../Components/Employee/empDashboardHeader.html')
        .then(header => header.text())
        .then(text => {
            document.getElementById('topNavbar').innerHTML = text;
            });*/
}

document.addEventListener("DOMContentLoaded", function () {
    navBarAndHeader();
  });