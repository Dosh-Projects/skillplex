const courses = [
    {
      title: "Introduction to Programming",
      category: "Programming",
      lessons: 15,
      rating: 4.5,
      reviews: 44,
      image: "../assets/img/course/course-1.jpg",
      link: "../courses/introduction-to-programming/",
      tagClass: "default",
    },
    {
      title: "Full-Stack Development",
      category: "Web Dev",
      lessons: 16,
      rating: 4.5,
      reviews: 44,
      image: "../assets/img/course/course-2.jpg",
      link: "../courses/fullstack-development/",
      tagClass: "sky-blue",
    },
    {
      title: "Mobile App Development",
      category: "Mobile Dev",
      lessons: 14,
      rating: 4.5,
      reviews: 55,
      image: "../assets/img/course/course-3.jpg",
      link: "../courses/mobile-app-development/",
      tagClass: "green",
    },
    {
      title: "AWS Certified Solutions Architect",
      category: "AWS",
      lessons: 14,
      rating: 4.5,
      reviews: 55,
      image: "../assets/img/course/course-4.jpg",
      link: "../courses/aws-certified-solutions-architect/",
      tagClass: "orange",
    },
    {
      title: "Microsoft Azure Fundamentals",
      category: "Azure",
      lessons: 14,
      rating: 4.5,
      reviews: 55,
      image: "../assets/img/course/course-5.jpg",
      link: "../courses/microsoft-azure-fundamentals/",
      tagClass: "pink",
    },
    {
      title: "Google Cloud Platform (GCP) Certifications",
      category: "GCP",
      lessons: 14,
      rating: 4.5,
      reviews: 55,
      image: "../assets/img/course/course-6.jpg",
      link: "../courses/gcp-certification/",
      tagClass: "blue-2",
    },
    // ...
    {
        title: "Certified Ethical Hacker (CEH)",
        category: "Cyber Security",
        lessons: 15,
        rating: 4.5,
        reviews: 44,
        image: "../assets/img/course/course-1.jpg",
        link: "../courses/certified-ethical-hacker",
        tagClass: "default",
      },
      {
        title: "Cisco Certified Network Associate",
        category: "CCNA",
        lessons: 16,
        rating: 4.5,
        reviews: 44,
        image: "../assets/img/course/course-2.jpg",
        link: "../courses/cisco-certified-network-associate",
        tagClass: "sky-blue",
      },
      {
        title: "CompTIA Network+",
        category: "CompTIA",
        lessons: 14,
        rating: 4.5,
        reviews: 55,
        image: "../assets/img/course/course-3.jpg",
        link: "../courses/comptia-network+",
        tagClass: "green",
      },
      {
        title: "CompTIA Security+",
        category: "AWS",
        lessons: 14,
        rating: 4.5,
        reviews: 55,
        image: "../assets/img/course/course-4.jpg",
        link: "../courses/comptia-security+",
        tagClass: "orange",
      },
      {
        title: "Data Analysis with Python or R",
        category: "Data Analysis",
        lessons: 14,
        rating: 4.5,
        reviews: 55,
        image: "../assets/img/course/course-5.jpg",
        link: "../courses/data-analysis-with-python-or-r",
        tagClass: "pink",
      },
      {
        title: "Machine Learning and AI",
        category: "ML/AI",
        lessons: 14,
        rating: 4.5,
        reviews: 55,
        image: "../assets/img/course/course-6.jpg",
        link: "../courses/machine-learning-and-ai",
        tagClass: "blue-2",
      },
      {
        title: "SQL and Database Management",
        category: "Database",
        lessons: 14,
        rating: 4.5,
        reviews: 55,
        image: "../assets/img/course/course-6.jpg",
        link: "../courses/sql-and-database-management",
        tagClass: "yellow",
      },
  ];

  function generateCourseGrid(courses) {
    return courses
      .map(
        (course) => `
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="course__item white-bg mb-30 fix">
              <div class="course__thumb w-img p-relative fix">
                  <a href="${course.link}">
                      <img src="${course.image}" alt="${course.title}">
                  </a>
                  <div class="course__tag">
                      <a href="#" class="${course.tagClass}">${course.category}</a>
                  </div>
              </div>
              <div class="course__content">
                  <div class="course__meta d-flex align-items-center justify-content-between">
                      <div class="course__lesson">
                          <span><i class="far fa-book-alt"></i>${course.lessons} Lesson${
          course.lessons > 1 ? "s" : ""
        }</span>
                      </div>
                      <div class="course__rating">
                          <span><i class="icon_star"></i>${course.rating} (${course.reviews})</span>
                      </div>
                  </div>
                  <h3 class="course__title"><a href="${course.link}">${course.title}</a></h3>
              </div>
              <div class="course__more d-flex justify-content-end align-items-center">
                  <div class="course__btn">
                      <a href="${course.link}" class="link-btn">
                          Know Details
                          <i class="far fa-arrow-right"></i>
                          <i class="far fa-arrow-right"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      `
      )
      .join("");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector("#grid .row");
    gridContainer.innerHTML = generateCourseGrid(courses);
  });
    