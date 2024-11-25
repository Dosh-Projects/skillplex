const overview = {
  title: "Machine Learning and AI",
  category: "Artificial Intelligence",
  breadcrumb: ["Home", "Courses", "Machine Learning and AI"],
  description:
    `The Machine Learning and AI course is designed to provide learners with a comprehensive understanding of machine learning algorithms, deep learning frameworks, and advanced AI techniques. This course offers hands-on experience with real-world datasets and projects, enabling participants to build, train, and deploy predictive models and AI solutions. Whether you're new to machine learning or looking to advance your skills, this course provides the tools and knowledge to excel in the growing field of AI.`,
  targetAudience: [
    "Aspiring data scientists and AI engineers",
    "Professionals looking to transition into machine learning and AI roles",
    "Students and researchers eager to explore cutting-edge AI technologies",
    "Anyone interested in building practical machine learning and deep learning models",
  ],
  tags: ["Machine Learning", "Deep Learning", "Artificial Intelligence"],
};

const courses = [
  {
    title: "Introduction to Machine Learning",
    outline: [
      "Machine Learning Basics: Supervised vs. unsupervised learning.",
      "Data Preprocessing: Handling missing values, scaling, and feature engineering.",
      "Supervised Learning Models: Linear regression, decision trees, and k-nearest neighbors.",
      "Unsupervised Learning Models: Clustering (k-means, hierarchical) and dimensionality reduction (PCA).",
      "Evaluation Metrics: Accuracy, precision, recall, and ROC curves.",
      "Project: Building a predictive model, such as for house price prediction or customer segmentation.",
    ],
    duration: "8-12 weeks",
    certification: "Certificate of Completion in Machine Learning Basics",
  },
  {
    title: "Deep Learning with TensorFlow and Keras",
    outline: [
      "Neural Networks Basics: Understanding neurons, layers, and activation functions.",
      "Deep Learning Models: Feedforward neural networks, CNNs for image data, RNNs for sequential data.",
      "Model Training: Optimizers, loss functions, and tuning hyperparameters.",
      "Real-World Applications: Image classification, sentiment analysis, and text generation.",
      "Project: Developing a deep learning model, such as for object detection or text classification.",
    ],
    duration: "12-14 weeks",
    certification: "Certificate of Completion in Deep Learning with TensorFlow and Keras",
  },
  {
    title: "Advanced Machine Learning and AI",
    outline: [
      "Advanced Models: Ensemble methods (Random Forest, Gradient Boosting), SVMs.",
      "Natural Language Processing (NLP): Text preprocessing, tokenization, embeddings.",
      "Time Series Analysis: ARIMA models, forecasting, and anomaly detection.",
      "Reinforcement Learning: Basics of reward-based learning and implementing simple agents.",
      "Capstone Project: Solving a complex problem, such as customer churn prediction or a recommendation system.",
    ],
    duration: "12-16 weeks",
    certification: "Certificate of Completion in Advanced Machine Learning and AI",
  },
];



function getCoursesCount(courses) {
  return courses.reduce((total, course) => total + course.outline.length, 0);
}

function generateTitleContent(course) {
  const breadcrumbItems = course.breadcrumb
    .map((item, index) => {
      const isLast = index === course.breadcrumb.length - 1;
      return isLast
        ? `<li class="breadcrumb-item active" aria-current="page">${item}</li>`
        : `<li class="breadcrumb-item"><a href="#">${item}</a></li>`;
    })
    .join("");

  return `
      <div class="page__title-breadcrumb">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  ${breadcrumbItems}
              </ol>
          </nav>
      </div>
      <span class="page__title-pre">${course.category}</span>
      <h5 class="page__title-3">${course.title}</h5>
  `;
}

function generateDescription(overview) {
  return `
      <h3>Course Overview</h3>
      <p>${overview.description}</p>
      <div class="course__tag-2 mb-35 mt-35">
          <i class="fal fa-tag"></i>
          ${overview.tags.map((tag) => `<a href="#">${tag}</a>`).join(", ")}
      </div>
      <div class="course__description-list mb-45">
          <h4>What is the Target Audience?</h4>
          <ul>
              ${overview.targetAudience
                .map(
                  (audience) =>
                    `<li><i class="icon_check"></i> ${audience}</li>`
                )
                .join("")}
          </ul>
      </div>
  `;
}

function generateAccordion(courses) {
  return courses
    .map((course, index) => {
      const content = course.outline
        .map(
          (item) => `
            <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
              <div class="course__curriculum-info">
                <h3><span>${item}</span></h3>
              </div>
            </div>
          `
        )
        .join("");

      return `
        <div class="accordion-item mb-50">
          <h2 class="accordion-header" id="course-${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#course-${index}-content" aria-expanded="true" aria-controls="course-${index}-content">
              ${course.title}
            </button>
          </h2>
          <div id="course-${index}-content" class="accordion-collapse collapse show" aria-labelledby="course-${index}" data-bs-parent="#course__accordion">
            <div class="accordion-body">
              ${content}
              <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div class="course__curriculum-info">
                  <h3><span class="time"><i class="icon_clock_alt"></i></span> <span>Duration:</span> ${course.duration}</h3>
                </div>
              </div>
              <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div class="course__curriculum-info">
                  <svg class="document" viewBox="0 0 24 24">
                    <path class="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                    <polyline class="st0" points="14,2 14,8 20,8 "/>
                    <line class="st0" x1="16" y1="13" x2="8" y2="13"/>
                    <line class="st0" x1="16" y1="17" x2="8" y2="17"/>
                    <polyline class="st0" points="10,9 9,9 8,9 "/>
                  </svg>
                  <h3><span>Certifications:</span> ${course.certification}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    })
    .join("");
}

document.getElementById("course__accordion").innerHTML =
  generateAccordion(courses);
document.getElementById("title__content").innerHTML =
  generateTitleContent(overview);
document.getElementById("description").innerHTML =
  generateDescription(overview);
document.getElementById(
  "courses__count"
).innerHTML = `<span>Lectures :</span>${getCoursesCount(courses)}`;
