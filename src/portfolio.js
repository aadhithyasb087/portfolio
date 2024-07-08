/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aadhithya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aadhithya Sadagopan Balaji Portfolio",
    type: "website",
    url: "https://portfolio-iota-livid-22.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Aadhithya Sadagopan Balaji",
  logo_name: "Aadhithya SB",
  nickname: "Aadhi",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/1ZRqhTsy1lYm-U0aekPoMu3hDYBpLUvbr",
  portfolio_repository: "https://github.com/aadhithyasb087/portfolio",
  githubProfile: "https://github.com/aadhithyasb087",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aadhithyasb087",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aadhithyasb1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCPhqGZGMvZymh45AnUv8XTw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:aadhithyasb1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/aadhit086",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aadhithya_sb/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website using MERN Stack.",
"⚡ Frontend: HTML, CSS, Bootstrap and Tailwind CSS; Framework/ Library: React.js, Redux- Toolkit, Next.js and
React Native; React Component library: Material UI and Chakra UI.",
"⚡ Backend: Node.js, Express.js and RESTful Api.",
"⚡ Programming Languages: JavaScript, Typescript, Python (Intermediate) , C and Java (Basic).",
"⚡ Clouds and Databases: SQL - MySQL, MongoDB - Mongoose and Firebase.",
"⚡ Developer Tools: Socket.io, Git, Github, Jira, DevOps, VS Code, Postman and MS Ofiice",
"⚡ Testing Tools: Unit- Jest, E2E- Playwright.",
"⚡ Deployment Tools: Git, Vercel, Firebase and Render",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Dev Ops",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Knows basics of setting up CI/CD pipelines using tools like Jenkins",
        "⚡ Proficient in Docker for containerization of applications and services",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for web applications in Canva and Figma",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/aadhithyasb1/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aadhithyasb1",
    },
    // ,
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "R.M.K. Engineering College",
      subtitle: "B.E. in Electrical & Electronics Engineering",
      logo_path: "rmk_college.svg",
      alt_name: "RMK Engineering College",
      duration: "2019-2023",
      descriptions: [],
      website_link: "https://www.rmkec.ac.in/2023/",
      grade: "CGPA : 9.13/10",
    },
    {
      title: "Jagopal Garodia Matriculaton Higher Secondary School",
      subtitle: "Biology-Maths",
      logo_path: "education.jpeg",
      alt_name: "Jagopal Garodia School",
      duration: "2017-2019",
      descriptions: [],
      website_link: "https://www.jaigopalgarodia.org/jgvvsrp/",
      grade: "Grade: 83%",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "The Joy of Computing using Python",
      subtitle: " - Nptel",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1nFeRRHWrrMd62i8r3XU6oHbS-mAQh1Na/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },

    {
      title: "Python Fundamentals",
      subtitle: " - Infosys",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/17lC7yMDrdVxp9T4NPsqPHOd-kiuVOiaw/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },

    {
      title: "Coursera Create Your First Game with Python",
      subtitle: " - Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1cl4pZp5CL2yGkBMcsXqq9yBFwIqHJtQk/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Learn and Master C Programming For Absolute Beginners!",
      subtitle: " - Infosys",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1pGtEE9hvOLcET97U2ts2XMCUha5GNIx_/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },

    {
      title: "Introduction to Javascript The Basics",
      subtitle: " - Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1N_hapR-kPhzEJcccKghHrpRFDjfd1LGA/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Build Your Portfolio Website with HTML and CSS",
      subtitle: " - Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1QRxmfcpdoChTEKVjchBRO7P61MWQUazK/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Developing Soft Skills and Personality",
      subtitle: " - Nptel",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y8wJZ2_V5htQReTTvT6amekU7lmsbEtP/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Design Thinking",
      subtitle: " - Infosys",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1E_Kr7IacUg0HpS5qkw9EjheXlKw53Wyt/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Time Management",
      subtitle: " - Infosys",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1SJFMAMd32yhFPOicSZwdpIOvbkcU_HDY/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Introduction to Project Management",
      subtitle: " - Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1a4BN-jC1ddTrsYOu2sNkCfP3fi1cb_Gf/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Email writing",
      subtitle: " - Infosys",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1mmWBHf_xeuq4bs-mEbrKFGCNSlrFUnlo/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    {
      title: "Introduction to Google Docs",
      subtitle: " - Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1pHz937M4NJZfImbg3pmQ6LivQ9kO-AOb/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2a73cc",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

//Achievements
const achievements = {
  achievement: [
    {
      title: "Project Engineer",
      company: "Soliton Technologies",
      company_url: "https://www.solitontech.com/",
      logo_path: "soliton.jpeg",
      duration: "June 2023 - Nov 2023",
      location: "Coimbatore TamilNadu",
      description:
        "• Collaborated on developing a GUI for Evaluation Module (EVM) for Texas Instruments.
• Successfully built an LED driver GUI using Polymer.js and enabled users to connect and test hardware with various
LED configurations and modes, resulting in positive customer feedback and increased client satisfaction.
• Worked with the Agile Methodology, which involved connecting with the customer to gather project requirements,
refining the backlog, developing, testing, and releasing the product ",
      color: "#0879bf",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  // description:
  // "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Project Engineer",
          company: "Soliton Technologies",
          company_url: "https://www.solitontech.com/",
          logo_path: "soliton.jpeg",
          duration: "June 2023 - Nov 2023",
          location: "Coimbatore TamilNadu",
          description:
            "• Collaborated on developing a GUI for Evaluation Module (EVM) for Texas Instruments.
• Successfully built an LED driver GUI using Polymer.js and enabled users to connect and test hardware with various
LED configurations and modes, resulting in positive customer feedback and increased client satisfaction.
• Worked with the Agile Methodology, which involved connecting with the customer to gather project requirements,
refining the backlog, developing, testing, and releasing the product. ",
          color: "#0879bf",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Soliton Technologies",
          company_url: "https://www.solitontech.com/",
          logo_path: "soliton.jpeg",
          duration: "Jan 2023 - May 2023",
          location: "Coimbatore TamilNadu",
          description:
            "• Developed responsive projects such as Weather Application, Tic-Tac-Toe Game Application, Shopping Cart, Calculator
App and Chat App using Html, CSS, JavaScript, React.js, Node.js and Socket.io.
• Implemented Unit Test cases using Jest framework and E2E Test cases using Playwright. Deployed the projects using
Docker and hosted it using Glitch Website. ",
          color: "#0879bf",
        },
        {
          title: "NCTPS-Thermal Power Station, In-Plant Training",
          company: "North Chennai Thermal Power Station - NCTPS",
          company_url:
            "https://drive.google.com/file/d/1QLzsqGmCx6cXFjkMx84s12xYbW-M6KXY/view?usp=sharing",
          logo_path: "internship.png",
          duration: "28/02/22 - 04/03/22",
          location: "Chennai, TamilNadu",
          description:
            "Completed a one-week n-Plant Training in NCTPS-Thermal Power Station was an invaluable opportunity that provided me with comprehensive insights into the workings of a thermal power station. Throughout the training program, I had the privilege of immersing myself in the intricate processes and operations involved in generating power through thermal means. The experience began with an in-depth orientation, where I gained a solid understanding of the fundamental principles underlying thermal power generation. From there, I delved into various aspects of the power station's functioning, including fuel combustion, steam generation, turbine operation, and electricity generation. One of the highlights of the training was the hands-on experience I gained by shadowing experienced technicians and engineers as they carried out their daily tasks. This practical exposure allowed me to witness firsthand the application of theoretical knowledge in real-world scenarios and familiarized me with the operational challenges and safety protocols inherent in power plant operations.",
          color: "#0879bf",
        },
        {
          title: "TNEWA - Solar Panel Installation Training Programme",
          company: "TNEWA Community College",
          company_url:
            "https://drive.google.com/file/d/1xdpcLfbUOIVANWjsxgDL9yF30N3MaQkT/view?usp=sharing",
          logo_path: "internship.png",
          duration: "2023",
          location: "Chennai, TamilNadu",
          description:
            "Completed Solar Panel Installation Training conducted by TNEWA was an enlightening and practical experience that equipped me with the skills and knowledge necessary to contribute to the renewable energy sector. Throughout the training program, I had the opportunity to delve into various aspects of solar energy technology, with a specific focus on the installation and maintenance of solar panels.The training began with an overview of solar energy and its significance in addressing environmental challenges and energy sustainability. I gained insights into the principles of photovoltaic technology, solar panel components, and the process of converting sunlight into electricity. This foundational knowledge provided me with a solid understanding of the underlying concepts driving solar energy generation.",
          color: "#0879bf",
        },
        //     ,
        //     {
        //       title: "Data Science Research Intern",
        //       company: "Delhivery Pvt. Ltd.",
        //       company_url: "https://www.delhivery.com/",
        //       logo_path: "delhivery_logo.png",
        //       duration: "May 2019 - Sept 2019",
        //       location: "Gurgaon, Haryana",
        //       description:
        //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //       color: "#ee3c26",
        //     },
        //     {
        //       title: "Data Science Intern",
        //       company: "Intel Indexer LLC",
        //       company_url:
        //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //       logo_path: "intel_logo.jpg",
        //       duration: "Nov 2018 - Dec 2018",
        //       location: "Work From Home",
        //       description:
        //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //       color: "#0071C5",
        //     },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Representative",
          company: "RMK Engineering College",
          company_url: "https://www.rmkec.ac.in/2023/",
          logo_path: "rmk_college.svg",
          duration: "2019-2023",
          location: "Tiruvallur, Tamilnadu",
          description:
            "Representative of my Department. Organized & Participated in many Events",
          color: "#0879bf",
        },
        {
          title: "TISSO Tre Plantation",
          company: "TISSO-Tirupur Social Service Organisation",
          company_url: "http://www.tissohome.com/",
          logo_path: "volunteer_logo.png",
          duration: "August-2023",
          location: "Tiruppur, Tamil nadu",
          description:
            "Volunteering for the tree plantation organized by TISSO (Tree Initiative for Sustainable Society) at a TISSO Trust school was an enriching experience that allowed me to make a meaningful impact on both the environment and the local community. Interacting with the children present in the school added an extra layer of significance to the event. As we gathered to plant trees, I had the opportunity to engage with the students, sharing knowledge about the importance of trees in our ecosystem and the benefits they provide to the environment and human health.",
          color: "#0879bf",
        },
        {
          title: "Cycle Rally",
          company: "Soliton Technologies",
          company_url: "https://www.solitontech.com/",
          logo_path: "volunteer_logo.png",
          duration: "May 2023",
          location: "Coimbatore TamilNadu",
          description:
            "Participating in the cycle rally organized by my company in partnership with a private organization to raise funds for cancer patients was a truly impactful experience that highlighted the power of collective action and community support in addressing important societal issues. As I joined fellow colleagues and members of the community in this inspiring event, I felt a sense of unity and purpose knowing that our efforts were directly contributing to the well-being of cancer patients and their families. Cycling alongside others who shared a common goal of making a positive difference created a powerful sense of camaraderie and solidarity.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Aadhithya_img.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React and Full-Stack Development",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "GKM Colony, Kolathur, Chennai-600082, Tamil Nadu, India",
    locality: "Kolathur",
    country: "IN",
    region: "Tamil Nadu",
    postalCode: "600082",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/FQJpuBACKz6U9GBv5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  achievements,
};
