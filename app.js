// app.js - Chelsea Guardian Website Interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chelsea Guardian Modern Website Loaded');
    
    // Update Date
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Article Data
    const articles = {
        council: {
            title: "Chelsea City Council Approves New Downtown Development Plan",
            category: "Local Government",
            author: "Sarah Miller",
            content: `
                <p>CHELSEA, MI — In a unanimous vote Monday night, the Chelsea City Council moved forward with a comprehensive revitalization plan for the historic downtown area that includes new green spaces and pedestrian-friendly corridors.</p>
                <p>The plan, which has been in development for over 18 months, aims to balance the preservation of Chelsea's historic character with the need for modern infrastructure and improved accessibility.</p>
                <p>"This is a landmark day for our community," said Mayor Jane Smith. "We are investing in the heart of our city to ensure it remains a vibrant destination for generations to come."</p>
                <p>Key features of the development include the expansion of the Main Street parklets, improved lighting, and a new community plaza located behind the historic mill building. Construction is slated to begin in late August.</p>
            `,
            img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
        },
        sports: {
            title: "Chelsea Bulldogs Clinch District Title in Thriller",
            category: "Sports",
            author: "Mike Thompson",
            content: `
                <p>CHELSEA, MI — The Chelsea Bulldogs athletic program added another trophy to the case this weekend as the varsity football team secured a thrilling 28-24 victory to claim the district title.</p>
                <p>Trailing by 10 points entering the fourth quarter, the Bulldogs rallied behind a stout defense and two touchdown passes from senior quarterback Chris Johnson.</p>
                <p>"These kids never quit," said Head Coach Josh Brown. "They've worked hard all season, and tonight it showed on every single play. We're proud of them, and we're ready for regionals."</p>
                <p>The Bulldogs will face off against Dexter next Friday at home. Kickoff is scheduled for 7:00 PM.</p>
            `,
            img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80"
        },
        fair: {
            title: "Annual Chelsea Community Fair to Feature New Attractions",
            category: "Community",
            author: "Linda Green",
            content: `
                <p>CHELSEA, MI — The Chelsea Community Fair Board has announced several new attractions for this year's highly anticipated event, including an expanded artisan market and interactive livestock exhibits.</p>
                <p>Now in its 87th year, the fair remains a cornerstone of the summer season in Washtenaw County. This year, organizers are focusing on "Local Roots," highlighting the agricultural heritage of the region.</p>
                <p>"We wanted to bring back some of the traditional feel while giving visitors something new to experience," said Fair Director Tom Baker.</p>
                <p>The fair runs from August 18th through the 22nd at the Chelsea Fairgrounds. Tickets are available at the gate or online starting next week.</p>
            `,
            img: "https://images.unsplash.com/photo-1472584069410-35e46830b642?auto=format&fit=crop&w=800&q=80"
        },
        stem: {
            title: "Chelsea Schools Announce New STEM Initiative",
            category: "Education",
            author: "David Ross",
            content: `
                <p>CHELSEA, MI — Chelsea School District is taking a giant leap forward in technology education with the launch of a new K-12 STEM initiative funded by a local grant and community partnerships.</p>
                <p>The program will introduce coding, robotics, and environmental science modules into the standard curriculum, providing students with hands-on learning opportunities from an early age.</p>
                <p>"Our goal is to prepare our students for the future," said Superintendent Dr. Emily White. "By integrating STEM concepts early, we foster critical thinking and problem-solving skills."</p>
            `,
            img: "https://images.unsplash.com/photo-1581092921461-7d655073f123?auto=format&fit=crop&w=800&q=80"
        },
        arts: {
            title: "Sculpture Walk Chelsea Returns with Ten New Installations",
            category: "Arts",
            author: "Rachel Hall",
            content: `
                <p>CHELSEA, MI — The downtown area is transforming into an open-air gallery once again as the Sculpture Walk Chelsea returns for its annual season.</p>
                <p>This year features ten new sculptures from artists across the Midwest, ranging from abstract metalwork to figurative bronze pieces. The walk is a self-guided tour that encourages residents and visitors to explore the city's artistic side.</p>
            `,
            img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
        },
        business: {
            title: "Historic Chelsea Mill Building to Undergo Major Restoration",
            category: "Business",
            author: "Jim Peterson",
            content: `
                <p>CHELSEA, MI — One of Chelsea's most iconic landmarks is set for a major makeover. The historic mill building, which has stood for over a century, will undergo a multi-million dollar restoration project.</p>
                <p>Developers plan to convert the space into a vibrant mixed-use hub, featuring modern office spaces on the upper floors and a public marketplace on the ground level.</p>
            `,
            img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
        },
        nature: {
            title: "Waterloo Recreation Area Expands Trail System",
            category: "Environment",
            author: "Chris Woods",
            content: `
                <p>CHELSEA, MI — Nature lovers have more to explore this summer at the Waterloo Recreation Area. The DNR has officially opened five new miles of hiking and mountain biking trails.</p>
                <p>The expansion connects several existing trail loops, offering a more seamless experience through the diverse terrain of the state's largest recreation area in the lower peninsula.</p>
            `,
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
        }
    };

    // Modal Logic
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.clickable').forEach(item => {
        item.addEventListener('click', () => {
            const articleKey = item.getAttribute('data-article');
            const data = articles[articleKey];
            
            if (data) {
                modalBody.innerHTML = `
                    <span class="category" style="background:var(--primary-color);color:#fff;padding:0.25rem 0.75rem;font-size:0.7rem;font-weight:700;text-transform:uppercase;">${data.category}</span>
                    <h2>${data.title}</h2>
                    <div class="meta">By ${data.author} | ${dateEl.textContent}</div>
                    <img src="${data.img}" alt="${data.title}">
                    <div class="article-text">${data.content}</div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scroll
            }
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Smooth scroll for nav
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
