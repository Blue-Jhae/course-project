const form = document.getElementById("contactForm");
const apiURL = "https://script.google.com/macros/s/AKfycbwWMJBipiXSVOST1No2gw54RkNphNPxJUInZHIoUYWZInR7_dUKS4GDth2TVTPI-iqAig/exec";
const submitSound = new Audio('../audio/yay.mp3');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("type", "contact");

    try {
        submitSound.currentTime = 0;
        submitSound.play().catch(() => {});

        await fetch(apiURL, {
            method: "POST",
            body: formData
        });

        showThankYou("Your message has been sent!");
        form.reset();
    } catch (err) {
        console.error("Contact form error:", err);
        showThankYou("Failed to send. Please try again.", true);
    }
});

function showThankYou(text = "Thank you! Your message has been sent.", isError = false) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.backgroundColor = isError ? "#d9534f" : "#4CAF50";
    msg.style.color = "white";
    msg.style.padding = "12px 24px";
    msg.style.borderRadius = "8px";
    msg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    msg.style.zIndex = "1000";
    msg.style.opacity = "1";
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.transition = "opacity 0.8s";
        msg.style.opacity = "0";
    }, 2500);

    setTimeout(() => msg.remove(), 3300);
}
