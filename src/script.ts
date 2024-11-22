document.addEventListener("DOMContentLoaded", () => {
    const tabs: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("nav ul li a");
    const currentPage: string = window.location.pathname.split("/").pop() || "index.html";

    tabs.forEach((tab) => {
        if (tab.getAttribute("href") === currentPage) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
});
