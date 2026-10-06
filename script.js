```javascript
document.addEventListener("DOMContentLoaded", function () {

    const latestContainer = document.getElementById("latest-posts");
    const categoryContainer = document.getElementById("category-sections");

    if (!latestContainer || !categoryContainer || typeof posts === "undefined") {
        return;
    }


    /* =========================
       CREATE POST CARD
    ========================== */

    function createPostCard(post) {

        return `
            <article class="post-card">

                <a href="${post.url}" class="post-image">
                    <img
                        src="${post.image}"
                        alt="${post.title}"
                        loading="lazy"
                    >
                </a>

                <div class="post-content">

                    <span class="post-category">
                        ${post.category}
                    </span>

                    <h3 class="post-title">
                        ${post.title}
                    </h3>

                    <p class="post-excerpt">
                        ${post.description}
                    </p>

                    <a href="${post.url}" class="read-more">
                        Read Article →
                    </a>

                </div>

            </article>
        `;
    }


    /* =========================
       LATEST POSTS
    ========================== */

    const latestPosts = posts.slice(0, 6);

    latestPosts.forEach(function (post) {
        latestContainer.innerHTML += createPostCard(post);
    });


    /* =========================
       FIND CATEGORIES
    ========================== */

    const categories = [];

    posts.forEach(function (post) {

        if (!categories.includes(post.category)) {
            categories.push(post.category);
        }

    });


    /* =========================
       CATEGORY SECTIONS
    ========================== */

    categories.forEach(function (category) {

        const categoryPosts = posts.filter(function (post) {
            return post.category === category;
        });

        const section = document.createElement("section");

        section.className = "category-section";

        const description = getCategoryDescription(category);

        section.innerHTML = `

            <div class="container">

                <div class="category-header">

                    <div class="category-title-wrapper">

                        <span class="section-label">
                            CATEGORY
                        </span>

                        <h2>
                            ${category}
                        </h2>

                        <p class="category-description">
                            ${description}
                        </p>

                    </div>

                    <a href="#" class="view-all">
                        View All →
                    </a>

                </div>


                <div class="post-grid">

                    ${categoryPosts
                        .slice(0, 3)
                        .map(createPostCard)
                        .join("")}

                </div>

            </div>

        `;

        categoryContainer.appendChild(section);

    });


    /* =========================
       CATEGORY DESCRIPTIONS
    ========================== */

    function getCategoryDescription(category) {

        const descriptions = {

            "AI & LLM Security":
                "AI security, LLM threats, AI applications, agentic systems, and emerging AI security challenges.",

            "WAAP":
                "Web Application and API Protection strategies for modern digital applications.",

            "API Security":
                "API discovery, API threats, API protection, and security strategies for connected applications.",

            "WAF":
                "Web Application Firewall technologies, application protection, and evolving web threats.",

            "DDoS Protection":
                "Insights into distributed denial-of-service attacks, mitigation strategies, and resilience.",

            "Threat Intelligence":
                "Emerging cyber threats, attack trends, vulnerabilities, and security intelligence.",

            "Cloud Security":
                "Security strategies for cloud infrastructure, workloads, applications, and modern environments."

        };

        return descriptions[category] ||
            "Latest cybersecurity insights, research, and practical security analysis.";

    }

});
```
