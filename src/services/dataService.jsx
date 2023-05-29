
export default class DataService {
    _data = {
        projectRepo: "https://github.com/vchauha4/Portfolio_Website",
        react95Repo: "https://github.com/React95/React95",
        items: [
            {
                id: 'about',
                name: 'About.txt',
                image: require('../assets/about.ico'),
                content: {
                    paragraphs: [
                      "Welcome to my portfolio website! I am an aspiring software engineer and a recent graduate from Western University with a Bachelor's degree in Software Engineering.", 
                      "With a strong foundation in computer science and a dedication to innovation, I am excited to create robust and efficient software solutions in the real world.", 
  
                      "Equipped with a diverse technical skill set, I am proficient in programming languages such as Java, Python, and JavaScript. My experience includes developing web and mobile applications, working with databases, and employing software development methodologies.",
                      "I have cultivated valuable soft skills that complement my abilities as a software engineer. With strong communication, problem-solving, adaptability, collaboration, and time management skills, I effectively convey ideas, analyze complex problems, embrace change, collaborate seamlessly, and deliver high-quality results within deadlines.",
                      
                      "Feel free to reach out to discuss potential collaborations or opportunities. Together, let's build innovative solutions that make a difference."
                    ]
                }
            },
            {
                id: 'resume',
                name: 'Resume.txt',
                image: require('../assets/cv.ico'),
                content: {
                    resumeLink:"https://drive.google.com/file/d/1u-BpqD-50FurxauDNYpDwohN-T-tMK_O/view?usp=sharing",
                    workExperience: [
                      {
                          jobTitle: "Freelance Developer",
                          company: "Smart Doculog",
                          location: "Toronto - Canada",
                          period: "May 2023 – Present",
                          accomplishments: [
                              "Led the development efforts for a web invoice management system in React to introduce new software features, including in-browser e-signatures and seamless page editing",
  
                              "Achieved a 20% increase in customer satisfaction by meticulously identifying and addressing UX flow issues, proactively proposing solutions, and successfully implementing the recommended changes.",
                          
                              "Improved data collection methods in Python to increase invoice parsing accuracy from 85% to 93%."
                          ]
                      },
                        {
                            jobTitle: "Software Developer Intern",
                            company: "Project: Human City",
                            location: "Toronto - Canada",
                            period: "Jan 2023 – May 2023",
                            accomplishments: [
                                "Streamlined R&D with a team of five to detail the technical scope of the back-end which decreased project complexity by 30%. Closely collaborated with 3 teams to formulate a product that fulfills business requirements.",
                                "Designed UML diagrams in MS Visio to support development with 5 new in-app functionalities.",
                                "Implemented a financial reporting tool in Python, and assisted in deploying the tool to a Flask REST API."
  
                            ]
  
                        },
                        {
                            jobTitle: "Fiber Technician",
                            company: "Bell Technical Solutions",
                            location: "Toronto - Canada",
                            period: "Jun 2021 – Sep 2021",
                            accomplishments: [
                              "Facilitated internet service installations and repairs for 75+ clients in the Bell Network.",
                              "Utilized Bell’s internal DBMS to query network specifications, modify customer details, and activate accounts.",
                              "Completed Bell’s 3-week networking related training program scoring 95% on the final exam."
  
                            ]
  
                        }
  
                    ],
                    education: [
                        {
                            credit: "Bachelor of Software Engineering",
                            place: "Western Universty",
                            period: "September 2018 – April 2023"
                        }
                    ],
                    Projects: [
                      
                    ]
                }
            },
            {
                id: "projects",
                name: "Projects.txt",
                image: require('../assets/projects.ico'),
                content: {
                    projects:[
                        {
                            title:"FitCheck - Machine Learning Gym Trainer (Capstone Project)",
                            description:["Developed a mobile application that scores users’ exercise form via machine learning in Flutter and Python."," Made use of Python’s TensorFlow, and Scikit-Learn library to construct the machine learning model.","Conducted data collection, preprocessing, and transformation tasks. Evaluated model precision across various non-linear regressors and achieved an accuracy of 85%.","Deployed Flask API to an AWS VM following a client-server architecture, and achieved a response time of 5sec."],
                            techStack:"Python, Flutter, Flask, Tensorflow",
                            repo:"https://github.com/Luiz-SE/se4450-project-group-24"
                        },
  
                        {
                          title:"FindmyGC - Group Chat Sharing Platform",
                          description:["Created a website with that allows Western University students find their respective course group chats. Successfully marketed the website via Reddit, Discord, and word of mouth to achieve over 70 monthly users.","Developed a full-stack web application using ExpressJS serving a REST API with React as the frontend.","Deployed the MongoDB server to an Azure cloud service. Deployed the API and front-end via Firebase."],
                          techStack:"React, ExpressJS, MongoDB, Material-UI, GitHub, and CSS",
                          repo:"https://github.com/vchauha4/findmyGC"
                      },
  
                      {
                          title:"BudgetBasket - Inflation Proofing Groceries (ConUHacks Project)",
                          description:["Ideated with 3 other students to develop an application that helps Canadians reduce their grocery inflation.","Revised Figma designs with team, and provided input. Performed groundwork with team to outline system architecture, database design, and data selection.","Created MongoDB server deployed on AWS based on Statistics Canada inflation data. Developed and launched an expressJS API while also assisting with front-end development."],
                          techStack:"React, ExpressJS, MongoDB, Figma",
                          repo:"https://github.com/vchauha4/conhacks2023"
                      },
                      {
                          title:"Embedded Home Thermostat",
                          description:["Implemented functionalities of a multi-room home thermostat in an ARM Cortex M4 using C","Displayed output values through a VGA port using a custom made display protocol of pixel buffers.","• Took initiative to utilize a 32-bit microchip to reduce project complexity by 30%."],
                          techStack:"React, ExpressJS, MongoDB, Figma",
                          repo:"https://github.com/vchauha4/ECE3375FinalProject"
                      }
                    ]
                }
            },
            {
                id: 'skills',
                name: 'Skills.txt',
                image: require('../assets/skills.ico'),
                content: {
                    hard: [
                        {
                            name: "Java",
                            img:require('../assets/java.png')
                        },
                        {
                          name: "Docker",
                          img:require('../assets/docker')
                        },
                        {
                          name: "Spring boot",
                          img:require('../assets/springboot.webp')
                        },
    
  
                        {
                            name: "JavaScript",
                            img:require('../assets/javascript.png')
                        },
                        {
                            name: "React",
                            img:require('../assets/react.jpg')
                        },
                        {
                            name: "Node.js",
                            img:require('../assets/node.png')
                        },
                        {
                            name: "Git",
                            img:require('../assets/git.png')
                        },
                        {
                            name: "MongoDB",
                            img:require('../assets/mongodb.png')
                        },
  
                        {
                            name: "Next.js",
                            img:require('../assets/nextjs.png')
                        
                    },
                    {
                        name: "C++",
                        img:require('../assets/C++.png')
                    },
                    {
                        name: "C#",
                        img:require('../assets/asdas.png')
                    },
                    {
                        name: "mySQL",
                        img:require('../assets/mySQL.png')
                    }

                    ],
                    soft: "Analytical thinking, Teamwork, Creative Problem solving, Time Mangement"
                }
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                image: require('../assets/contact.ico'),
                content: {
                    emailText: "I'm available for hire, let's have a chat ",
                    email: "vnoahchauhan@gmail.com",
                    socialText: "Or reach me out through social media:",
                    social: [
                        {
                            name: "FaLinkedin",
                            link: "https://www.linkedin.com/in/varun-noah-chauhan/"
                        },
                        {
                            name: "FaGithub",
                            link: "https://github.com/vchauha4"
                        }
                    ]
                }
            }
        ]
    }
  
    getItems() {
        return this._data.items.map(({ id, name, image }) => ({ id, name, image }));
    }
  
    getItem(id) {
        return this._data.items.find(x => x.id === id);
    }
  
    getProjectInfo() {
        return {
            projectRepo: this._data.projectRepo,
            react95Repo: this._data.react95Repo
        };
    }
  }
  