gsap.registerPlugin(ScrollTrigger);

const hero_text_desc = document.querySelector(".hero-text p");
const hero_descriptions = [
    {id: 1, desc: "Full-stack development using React, Node, and PostgreSQL."},
    {id: 2, desc: "Clean code. Scalable architecture. Measurable results."},
    {id: 3, desc: "Built with performance, SEO, and conversion in mind."}
]

let index = 0;

setInterval(() => {

    gsap.to(hero_text_desc, {
        opacity: 0,
        y: -15,
        duration:0.4,
        ease: "power2.out",
        onComplete: () => {
            hero_text_desc.textContent = hero_descriptions[index].desc;
            index = (index + 1) % hero_descriptions.length;

            gsap.fromTo(hero_text_desc,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    })
}, 3000);

gsap.from("#stack .card", {
    scrollTrigger: {
        trigger: "#stack",
        start: "top 80%",
    },
    y: 50,
    opacity:0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".stat-item", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
    },
    y:50,
    opacity:0,
    duration:0.8,
    stagger: 0.2,
    ease: "power2.out"
})

document.querySelectorAll('nav ul li').forEach((li) => {
    li.addEventListener('click', () => {
        const targetId = li.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId);

        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            })
        }
    })
})

// Copy Email Functionality
const emailCard = document.getElementById('email-card');
const toast = document.getElementById('copy-toast');

emailCard.addEventListener('click', () => {
    const email = "connect.anuragpal@outlook.com";
    const modal = document.querySelector(".modal"); // Ensure you select the parent modal
    const modal_content = document.querySelector(".modal-content");
    
    // CHANGE 'write' TO 'writeText'
    navigator.clipboard.writeText(email).then(() => {
        // Corrected class logic (no dots)
        modal.classList.add("visible");
        modal.classList.remove("hidden");

        setTimeout(() => {
            modal.classList.remove("visible");
            modal.classList.add("hidden");
        }, 2000);
    }).catch(err => {
        // This is what caught your error!
        console.error("Failed to copy!", err);
    });
});