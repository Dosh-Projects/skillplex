const courses = {
    "introduction-to-programming": {
        title: "Introduction to Programming",
        overview: "The Introduction to Programming series is designed to provide a comprehensive foundation for beginners...",
        curriculum: [
            {
                module: "Python for Beginners",
                topics: [
                    "Basics: Variables, data types, and operators. Control Structures: Conditional statements, loops.",
                    "Functions and Modules: Defining functions, using libraries.",
                    "Data Structures: Lists, dictionaries, sets, and tuples.",
                    "File Handling: Reading and writing files.",
                    "Project: Simple data analysis or a text-based game."
                ],
                duration: "4-6 weeks",
                certification: "Options for certification in Python basics upon completion."
            },
            {
                module: "Java Fundamentals",
                topics: [
                    "Java Basics: Syntax, data types, variables.",
                    "Object-Oriented Programming (OOP): Classes, objects, inheritance, and polymorphism.",
                    "Exception Handling: Understanding and managing errors.",
                    "Data Structures: Arrays, lists, stacks, and queues.",
                    "Project: Building a simple calculator or a basic console-based application."
                ],
                duration: "6-8 weeks",
                certification: "Optional completion certificate."
            }
        ]
    },
    "full-stack-development": {
        title: "Full-Stack Development",
        overview: "Learn how to build full-stack web applications with hands-on experience in both frontend and backend technologies...",
        curriculum: [
            {
                module: "Frontend Development (HTML, CSS, JavaScript)",
                topics: [
                    "HTML Basics: Elements, structure, forms.",
                    "CSS: Styling elements, layout design, animations.",
                    "JavaScript: Basics, DOM manipulation, events, asynchronous programming.",
                    "Frameworks: Introduction to libraries like React or Vue.",
                    "Project: Building a responsive, interactive website."
                ],
                duration: "8-10 weeks",
                certification: "Frontend Development Certification"
            },
            {
                module: "Backend Development (Node.js, Express, Databases)",
                topics: [
                    "Node.js Basics: Setting up a server, handling requests.",
                    "Express Framework: Routing, middleware.",
                    "Databases: SQL (MySQL or PostgreSQL) or NoSQL (MongoDB).",
                    "RESTful APIs: Creating and managing API endpoints.",
                    "Project: Building a complete CRUD application."
                ],
                duration: "10-12 weeks",
                certification: "Backend Development Certification"
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course") || "introduction-to-programming"; // Default course

    const course = courses[courseId];
    if (!course) {
        document.body.innerHTML = "<h1>Course not found</h1>";
        return;
    }

    // Populate title and overview
    document.getElementById("course-title").innerText = `${course.title} - Skillplex Consulting Ltd`;
    document.getElementById("course-name").innerText = course.title;
    document.getElementById("course-overview").innerText = course.overview;

    // Populate curriculum
    const curriculumContent = document.getElementById("curriculum-content");
    course.curriculum.forEach((module) => {
        const moduleDiv = document.createElement("div");
        moduleDiv.classList.add("module");

        const moduleTitle = document.createElement("h3");
        moduleTitle.innerText = module.module;
        moduleDiv.appendChild(moduleTitle);

        const topicsList = document.createElement("ul");
        module.topics.forEach((topic) => {
            const topicItem = document.createElement("li");
            topicItem.innerText = topic;
            topicsList.appendChild(topicItem);
        });
        moduleDiv.appendChild(topicsList);

        const duration = document.createElement("p");
        duration.innerHTML = `<strong>Duration:</strong> ${module.duration}`;
        moduleDiv.appendChild(duration);

        const certification = document.createElement("p");
        certification.innerHTML = `<strong>Certification:</strong> ${module.certification}`;
        moduleDiv.appendChild(certification);

        curriculumContent.appendChild(moduleDiv);
    });
});
