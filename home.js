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

