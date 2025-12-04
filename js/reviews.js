const form = document.getElementById("reviewForm");
const tableBody = document.getElementById("reviewsTableBody");
const apiURL = "https://script.google.com/macros/s/AKfycbwMEgXrk2cBlEdBPaAh_K4yzu0jIErdAMG5oyzYWE1saLBA61WZ3XYnVL5jgYZwXGcVdQ/exec";

const submitSound = new Audio('../audio/yay.mp3');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        project: form.project.value,
        rating: form.rating.value,
        comment: form.comment.value,
        type: "review"
        };

    submitSound.currentTime = 0;
    submitSound.play();

    await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(formData)
    });

    addReviewToTable(formData);

    showThankYou();

    form.reset();
});

async function loadReviews() {
    const res = await fetch(apiURL);
    const reviews = await res.json();

    reviews.forEach(addReviewToTable);
}

function addReviewToTable(review) {
    const row = document.createElement("tr");
    const filledStars = "★".repeat(review.rating);
    const emptyStars = "☆".repeat(5 - review.rating);

    row.innerHTML = `
        <td data-label="Name">${review.name}</td>
        <td data-label="Project">${review.project}</td>
        <td data-label="Rating"><span class="star">${filledStars}</span>${emptyStars}</td>
        <td data-label="Comment">${review.comment}</td>
        <td data-label="Date">${review.date ? new Date(review.date).toLocaleDateString() : ''}</td>
    `;
    tableBody.appendChild(row);
}

function showThankYou() {
    let msg = document.createElement("div");
    msg.textContent = "Your review has been submitted!";
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.backgroundColor = "#4CAF50";
    msg.style.color = "white";
    msg.style.padding = "12px 24px";
    msg.style.borderRadius = "8px";
    msg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    msg.style.zIndex = "1000";
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.transition = "opacity 0.8s";
        msg.style.opacity = "0";
    }, 2500);

    setTimeout(() => {
        msg.remove();
    }, 3300);
}

loadReviews();
