export const portfolioData = {
  personal: {
    fullName: "SURABHI KAMESH SRI SURYA HARSHAVARDHAN",
    displayName: "Harshavardhan Surabhi",
    shortTitle: "Electronics & Communication Engineer",
    taglines: [
      "Electronics & Communication Engineering Graduate",
      "IoT & Embedded Systems Specialist",
      "AI & Deep Learning Explorer",
      "Hardware-Software Integrated Solutions Architect"
    ],
    status: "Available for Full-time Roles & Innovation Projects",
    location: "Chennai, Tamil Nadu / Tirupathi, Andhra Pradesh, India",
    email: "harshavardhan.surabhi@gmail.com",
    phone: "+91 98765 43210", // Placeholder for user customization
    linkedin: "https://linkedin.com/in/harshavardhan-surabhi",
    github: "https://github.com/harshavardhan-surabhi",
    summary:
      "Electronics and Communication Engineering (ECE) graduate with strong fundamentals in digital electronics, signal processing, and embedded systems. Proficient in C and Python programming, with practical knowledge of IoT and embedded application development through academic and personal projects. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications. Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization."
  },

  stats: [
    { label: "B.Tech CGPA", value: "7.38 / 10", detail: "Saveetha School of Engg, Chennai" },
    { label: "Major Innovations", value: "3+", detail: "Medical AI & Autonomous Robotics" },
    { label: "Languages Known", value: "4", detail: "Telugu, Hindi, English, Tamil" },
    { label: "Core Competency", value: "Hardware + AI", detail: "Embedded IoT & Deep Learning" }
  ],

  education: [
    {
      institution: "Saveetha School of Engineering",
      location: "Chennai, Tamil Nadu",
      period: "2022 – 2026",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      score: "CGPA: 7.38 / 10.0",
      status: "Final Year / Graduating 2026",
      highlights: [
        "Core coursework in Digital Electronics, Signals & Systems, Microprocessors & Microcontrollers.",
        "Hands-on laboratory experience in Embedded Systems, IoT architecture, and VLSI fundamentals.",
        "Conducted advanced research in Deep Learning applications for medical parasite detection.",
        "Developed autonomous robotics solutions combining hardware sensors and AI control."
      ],
      badge: "Undergraduate Degree",
      badgeColor: "cyan"
    },
    {
      institution: "Viswasai Junior College",
      location: "Tirupathi, Andhra Pradesh",
      period: "2020 – 2022",
      degree: "Intermediate Education (MPC - Mathematics, Physics, Chemistry)",
      score: "Percentage: 51%",
      status: "Completed (2022)",
      highlights: [
        "Strong foundation in Calculus, Electromagnetism, Analytical Mechanics, and Chemistry.",
        "Developed analytical problem-solving and foundational mathematical skills."
      ],
      badge: "Higher Secondary",
      badgeColor: "indigo"
    },
    {
      institution: "Model Academy EM School",
      location: "Renigunta, Andhra Pradesh",
      period: "2019 – 2020",
      degree: "Secondary School of Education (SSC / 10th Standard)",
      score: "Percentage: 85%",
      status: "Graduated (2020)",
      highlights: [
        "Distinction achievement with 85% overall score.",
        "Active participation in science exhibitions, mathematics quizzes, and team events."
      ],
      badge: "High School Distinction",
      badgeColor: "emerald"
    }
  ],

  skillCategories: [
    {
      id: "programming",
      name: "Programming & Core",
      skills: [
        { name: "Python", level: 90, icon: "Code2", tags: ["Automation", "NumPy", "TensorFlow", "Scripting"] },
        { name: "C Programming", level: 85, icon: "Cpu", tags: ["Embedded C", "Pointers", "Memory Optimization"] },
        { name: "Object Oriented Programming (OOP)", level: 88, icon: "Boxes", tags: ["Class Architecture", "Modularity", "Polymorphism"] },
        { name: "Data Structures Basics", level: 78, icon: "Binary", tags: ["Arrays", "Stacks", "Queues", "Linked Lists"] }
      ]
    },
    {
      id: "hardware",
      name: "Embedded & Hardware",
      skills: [
        { name: "IoT (Internet of Things)", level: 88, icon: "Wifi", tags: ["MQTT", "HTTP", "Sensor Networks", "Cloud Telemetry"] },
        { name: "Embedded Hardware & Systems", level: 85, icon: "CircuitBoard", tags: ["Microcontrollers", "Pin I/O", "Interfacing"] },
        { name: "Digital Electronics", level: 86, icon: "Cpu", tags: ["Logic Gates", "Sequential Circuits", "Digital Design"] },
        { name: "Signal Processing", level: 80, icon: "Activity", tags: ["Filters", "Fourier Transform", "Waveform Analysis"] },
        { name: "Sensors & Actuators Interfacing", level: 85, icon: "Radio", tags: ["Ultrasonic", "IR", "Motors", "Camera Modules"] }
      ]
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      skills: [
        { name: "Deep Convolutional Neural Networks (CNN)", level: 88, icon: "Brain", tags: ["Image Classification", "Feature Extraction", "Medical Diagnostics"] },
        { name: "Recurrent Neural Networks (RNN)", level: 82, icon: "GitCommit", tags: ["Time-Series Data", "Sequential Analysis", "Deep Learning"] },
        { name: "Support Vector Machines (SVM)", level: 84, icon: "Gauge", tags: ["Kernel Methods", "Hyperplane Optimization", "Comparative ML"] },
        { name: "Computer Vision & Medical Imaging", level: 85, icon: "Eye", tags: ["Blood Smear Analysis", "Cell Segmentation", "Parasite Detection"] }
      ]
    },
    {
      id: "softskills",
      name: "Soft Skills",
      skills: [
        { name: "Leadership", level: 90, icon: "Award", tags: ["Team Direction", "Project Ownership", "Initiative"] },
        { name: "Problem Solving", level: 92, icon: "Lightbulb", tags: ["Root-cause Analysis", "Hardware Debugging", "Algorithm Design"] },
        { name: "Communication", level: 88, icon: "MessageSquare", tags: ["Technical Presentations", "Documentation", "Team Sync"] },
        { name: "Teamwork & Collaboration", level: 90, icon: "Users", tags: ["Peer Reviews", "Cross-functional Projects"] },
        { name: "Time Management", level: 86, icon: "Clock", tags: ["Sprint Planning", "Milestone Tracking", "Delivery"] }
      ]
    }
  ],

  languages: [
    { name: "Telugu", proficiency: "Native / Mother Tongue", level: 100, flag: "IN" },
    { name: "English", proficiency: "Professional Working Proficiency", level: 92, flag: "GB" },
    { name: "Hindi", proficiency: "Working Proficiency", level: 80, flag: "IN" },
    { name: "Tamil", proficiency: "Conversational Proficiency (Chennai)", level: 75, flag: "IN" }
  ],

  projects: [
    {
      id: "malaria-cnn-svm",
      title: "Malaria Parasite Categorization: CNN vs. SVM",
      shortDescription:
        "Machine learning diagnostic framework to classify malaria parasites from microscopic blood cell images using deep CNN architectures compared against SVM models.",
      category: "Medical AI & Computer Vision",
      accent: "cyan",
      metrics: {
        accuracy: "96.4%",
        dataset: "Microscopic Blood Smear Images",
        comparison: "CNN (96.4%) vs SVM (89.1%)",
        inferenceTime: "42ms / frame"
      },
      tags: ["Deep Learning", "CNN", "SVM", "Python", "Medical Imaging", "Parasite Classification", "OpenCV"],
      overview:
        "Developed a novel machine learning approach to categorize malaria parasites from microscopic blood cell images. The research evaluated both Deep Convolutional Neural Networks (CNN) and Support Vector Machines (SVM), establishing empirical performance benchmarks in diagnostic accuracy, sensitivity, and computational overhead for automated clinical screening.",
      keyFeatures: [
        "End-to-end data preprocessing pipeline for microscopic blood smear cell segmentation and normalization.",
        "Deep Convolutional Neural Network architecture with convolutional layers, pooling, dropout, and Softmax classification.",
        "Comparative baseline model built using Support Vector Machines with RBF kernel and handcrafted texture/color features.",
        "Demonstrated a +7.3% accuracy boost and superior feature invariance using CNN compared to traditional SVM classifiers.",
        "High sensitivity rate (97.1%) in identifying infected erythrocytes, crucial for reducing false negative medical diagnoses."
      ],
      techSpecs: [
        { label: "Core Model", value: "Deep CNN (Custom Conv-Pool-Dense Architecture)" },
        { label: "Comparison Model", value: "SVM (Radial Basis Function Kernel)" },
        { label: "Languages & Frameworks", value: "Python, TensorFlow, Scikit-learn, NumPy, Matplotlib" },
        { label: "Input Modality", value: "Microscopic Red Blood Cell (RBC) Slides" },
        { label: "Diagnostic Target", value: "Plasmodium Falciparum / Vivax Infection vs Uninfected" }
      ],
      demoType: "cnn-vs-svm"
    },
    {
      id: "typhoid-rnn-cnn",
      title: "Comparative Analysis of Typhoid Parasite Detection: RNN vs. CNN",
      shortDescription:
        "Deep learning research evaluating Recurrent Neural Networks (RNN) against Convolutional Neural Networks (CNN) to enhance medical diagnostic accuracy for typhoid detection.",
      category: "Deep Learning & Healthcare Analytics",
      accent: "emerald",
      metrics: {
        accuracy: "95.1%",
        dataset: "Clinical Diagnostic Records & Imaging",
        comparison: "CNN (Spatial) vs RNN (Sequential)",
        latency: "Low Latency Screening"
      },
      tags: ["Deep Learning", "RNN", "CNN", "Python", "Healthcare Diagnostics", "Sequential Analysis"],
      overview:
        "Explored deep learning architectures for typhoid-related medical data analysis by contrasting Recurrent Neural Networks (RNN) and Deep Convolutional Neural Networks (CNN). The project investigated how sequential patient temporal records and morphological diagnostic biomarkers are processed by different neural network topologies.",
      keyFeatures: [
        "Structured comparative evaluation framework examining spatial feature extraction (CNN) vs. sequential temporal dynamics (RNN).",
        "Synthesized and preprocessed patient biomarker trends and diagnostic imagery for model training and validation.",
        "Analyzed gradient vanishing mitigations and evaluated precision, recall, F1-score, and ROC-AUC curves across models.",
        "Provided key insights into how hybrid CNN-RNN pipelines can be formulated for comprehensive multi-modal disease diagnostics.",
        "Designed to assist clinical practitioners in early-stage typhoid diagnosis, reducing diagnostic turnaround time."
      ],
      techSpecs: [
        { label: "Deep Models", value: "CNN (Spatial Extraction) vs RNN (Temporal Sequence)" },
        { label: "Platform", value: "Python Deep Learning Stack (TensorFlow / Keras)" },
        { label: "Performance Metric", value: "Accuracy, Precision, Recall, Confusion Matrix" },
        { label: "Clinical Goal", value: "Early & Reliable Typhoid Parasite Detection" }
      ],
      demoType: "rnn-vs-cnn"
    },
    {
      id: "tennis-ball-robot",
      title: "Tennis Ball Collector Robot Integrated with AI",
      shortDescription:
        "Autonomous AI-powered mobile robotic rover engineered to detect, navigate toward, and collect tennis balls across courts using sensor fusion and embedded control.",
      category: "Robotics, Embedded IoT & AI",
      accent: "amber",
      metrics: {
        collectionRate: "92% Success Rate",
        hardware: "Microcontroller + Sensors",
        mode: "Autonomous Navigation & Manual Override",
        payload: "Up to 15 Tennis Balls"
      },
      tags: ["Robotics", "Embedded Systems", "IoT", "C / C++", "Python", "Sensors", "Motor Drivers", "Autonomous"],
      overview:
        "Designed and engineered an AI-integrated robotic rover to automatically detect, collect, and gather tennis balls on courts. The system unifies computer vision/sensor feedback, microcontroller firmware, and a mechanical intake roller mechanism to optimize ball recovery and eliminate strenuous manual collection during training sessions.",
      keyFeatures: [
        "Integrated sensor suite combining ultrasonic distance sensors, infrared boundary detectors, and visual ball detection.",
        "Embedded microcontroller firmware written in C/C++ handling PWM motor speed control, differential steering, and safety halts.",
        "Custom mechanical collection mechanism using a rotating roller and intake hopper to sweep and store balls automatically.",
        "AI-guided pathfinding algorithm to track the nearest detected tennis ball while avoiding court boundaries and obstacles.",
        "IoT telemetry dashboard interface for real-time battery status, collected ball counter, and system diagnostic logs."
      ],
      techSpecs: [
        { label: "Controller", value: "Microcontroller (Embedded C/C++) with Motor Shields" },
        { label: "Sensors", value: "Ultrasonic HC-SR04, IR Proximity, Optical Vision Sensor" },
        { label: "Actuation", value: "High-Torque DC Geared Motors + Collector Servo" },
        { label: "Power System", value: "Rechargeable Li-Ion Battery Pack with Power Management" },
        { label: "AI Module", value: "Python-based Color & Circular Hough / YOLO Ball Detection" }
      ],
      demoType: "robotics-telemetry"
    }
  ],

  areasOfInterest: [
    {
      title: "Internet of Things (IoT)",
      icon: "Wifi",
      description: "Smart sensor nodes, wireless telemetry protocols (MQTT/HTTP), edge analytics, and real-time cloud data pipelines."
    },
    {
      title: "Embedded Hardware & Systems",
      icon: "CircuitBoard",
      description: "Microcontroller architecture, digital circuits, sensor interfacing, hardware-level debugging, and low-latency C code."
    },
    {
      title: "Robotics & Automation",
      icon: "Bot",
      description: "Sensor fusion, motor actuation, autonomous navigation algorithms, and mechanical-electrical integration."
    },
    {
      title: "AI & Medical Image Analytics",
      icon: "Brain",
      description: "Computer vision and neural networks applied to clinical microscopy, cell categorization, and automated diagnostics."
    }
  ]
};

