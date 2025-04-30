
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const closeBtn = document.getElementById("closeBtn");

    document.querySelectorAll("object").forEach(obj => {
        obj.addEventListener("load", () => {
            const svgDoc = obj.contentDocument;
            if (!svgDoc) return;

            svgDoc.querySelectorAll('[id^="site-"]').forEach(site => {
                site.addEventListener("click", () => {
                    const siteId = site.id.replace("site-", "");
                    modalText.innerHTML = `Site ${siteId} includes 20/30/50 amp electrical hookups, water, and sewer. <br><br>To book or ask about this site, please call the Lincoln Civic Center or email lincolnciviccenter@co.lincoln.ms.us.`;
                    modal.style.display = "block";
                });
            });

            const bath = svgDoc.getElementById("bathhouse");
            if (bath) {
                bath.addEventListener("click", () => {
                    modalText.textContent = "Bathhouse is for RV Park guests only.";
                    modal.style.display = "block";
                });
            }

            const court = svgDoc.getElementById("basketball");
            if (court) {
                court.addEventListener("click", () => {
                    modalText.textContent = "Basketball court is open from 8:00 AM to 10:00 PM daily.";
                    modal.style.display = "block";
                });
            }
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };

    document.getElementById("toggleMode").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
