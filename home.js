// All Button
document.getElementById("all-btn").addEventListener("click", function () {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayAllIssues(json.data));
});

// Open Button
document.getElementById("open-btn").addEventListener("click", function () {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(json => {
            const openIssues = json.data.filter(issue => issue.status === "open");
            displayAllIssues(openIssues); 
        });
});

// close Button
document.getElementById("close-btn").addEventListener("click", function () {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(json => {
            const closedIssues = json.data.filter(issue => issue.status === "closed");
            displayAllIssues(closedIssues); 
        });
});

const displayAllIssues = (allIssues) => {
    const disAllIssues = document.getElementById("displayIssues-container");
    disAllIssues.innerHTML = "";

    for (let allissue of allIssues) {
        let priorityColor = "";
        const priority = allissue.priority.toLowerCase();

        if (priority === "high") {
            priorityColor = "bg-red-100 text-red-600 border-red-200";
        } else if (priority === "medium") {
            priorityColor = "bg-yellow-100 text-yellow-600 border-yellow-200";
        } else if (priority === "low") {
            priorityColor = "bg-green-100 text-green-600 border-green-200";
        } else {
            priorityColor = "bg-gray-100 text-gray-600";
        }

        const issuesCard = document.createElement("div");
        // popup listener
        issuesCard.addEventListener('click', () => {
            showIssuePopup(allissue);
        });

        issuesCard.innerHTML = `
        <div class="issues-card w-[320px] bg-white border rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition">
                <div class="flex justify-between items-start mb-3">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                            <img src="./assets/Open-Status.png" alt="">
                        </div>
                    </div>
                    <span class="text-xs font-semibold px-3 py-1 rounded-${priorityColor} text-red-500">${allissue.priority}</span>
                </div>
                <h3 class="font-semibold text-gray-800">${allissue.title}</h3>

                <p class="text-sm text-gray-500 mb-4">${allissue.description}</p>

                <div class="flex gap-2 mb-4">
                    <span class="text-xs px-3 py-1 rounded-full bg-red-100 text-red-500">${allissue.labels[0] || 'Bug'}</span>
                    <span class="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">${allissue.labels[1] || 'Help Wanted'}</span>
                </div>

                <div class="border-t pt-3 text-sm text-gray-500">
                    <span>${allissue.author}</span> <br>
                    <span>${allissue.createdAt}</span>
                </div>
        </div>
        `;
        disAllIssues.append(issuesCard);
    }
}

