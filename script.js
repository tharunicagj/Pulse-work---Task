// Welcome message when page loads
window.onload = () => {
    alert("Welcome to the System Status Checker!");
};

// Arrow function to update the banner
const updateBanner = (message, status) => {

    const banner = document.getElementById("statusBanner");

    banner.innerText = message;
    banner.className = "banner " + status;

};

// Promise to check system status
const checkSystem = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isOnline = Math.random() > 0.3;

            if (isOnline) {
                resolve("System is Online");
            } else {
                reject("System is Offline");
            }

        }, 2000);

    });

};

// Button click function
function checkSystemStatus() {

    updateBanner("System is Checking...", "checking");

    checkSystem()
        .then((message) => {
            updateBanner(message, "online");
        })
        .catch((message) => {
            updateBanner(message, "offline");
        });

}