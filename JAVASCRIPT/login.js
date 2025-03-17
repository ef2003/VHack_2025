document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const userTypeSelect = document.getElementById("userType");

    loginBtn.addEventListener("click", function () {
        const selectedUserType = userTypeSelect.value;

        if (selectedUserType === "donor") {
            window.location.href = "donorHome.html";
        } else if (selectedUserType === "organizer") {
            window.location.href = "organizerHome.html";
        } else {
            alert("Please select a user type before logging in.");
        }
    });
});
