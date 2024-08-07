"use client";
import React,{ use, useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "How can i assist you with Arun's profile. Ask Questions?",
    },
  ]);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');

    const apiMessage = await fetch(
        '/api',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: newMessages })
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });
  setMessages([...newMessages, { role: 'assistant', content: apiMessage }]);
//   console.log('API Message:', apiMessage)
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="" className="logo-holder">
            <div className="logo">A</div>
            <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:arunpycodecmaster@gmail.com" target="_blank" className="button">Contact me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggele" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>

            </a>
        </nav>
    </header>
    <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi I&apos;m</small>
                        Arun Singh Negi
                    </h1>
                    <p> an early-career data scientist experienced in tackling real-time issues with machine learning and deep learning methods.
                        Proficient in developing scalable cloud-based code and staying updated on industry
                        trends.<span>Skilled in Python, HTML,CSS,JS,SQL,NLP, and MLOps. Successfully completed projects in thyroid detection, text summarization, sign language detection, and more..</span></p>
                    <div className="call-to-actions">
                        <a href="./resources/Arun_Negi_resume.pdf" target="_blank" className="button black">
                            View Resume
                        </a>
                        <a href="mailto:arunpycodecmaster@gmail.com" target="_blank" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Arun02DS" target="_blank" >
                            <img src="./Images/github.png" alt="GitHub" width="48" />
                        </a>
                        <a href="https://linkedin.com/in/arunnegiai" target="_blank" >
                            <img src="./Images/linkedin.png" alt="LinkedIn" width="48" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./Images/Arun_pic_HD.png" alt="Arun Singh Negi" />
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./Images/python.png" alt="Python" width="100" />
                    <img src="./Images/pytorch.png" alt="Pytorch" width="100" />
                    <img src="./Images/tensorflow.png" alt="Tensorflow" width="100" />
                    <img src="./Images/pandas.png" alt="pandas" width="100" />
                    <img src="./Images/html.png" alt="HTML" width="100" />
                    <img src="./Images/css.png" alt="CSS" width="100" />
                    <img src="./Images/javascript.png" alt="JS" width="100" />
                    <img src="./Images/AWS.png" alt="AWS" width="100" />
                    <img src="./Images/EC2.png" alt="EC2" width="100" />
                    <img src="./Images/ECR.png" alt="ECR" width="100" />
                    <img src="./Images/mongo.png" alt="Mongodb" width="100" />
                    <img src="./Images/mysql.png" alt="Mysql" width="100" />
                    <img src="./Images/github-actions.png" alt="github-actions" width="100" />
                    <img src="./Images/Vector.png" alt="Vector" width="100" />
                    <img src="./Images/python.png" alt="Python" width="100" />
                    <img src="./Images/pytorch.png" alt="Pytorch" width="100" />
                    <img src="./Images/tensorflow.png" alt="Tensorflow" width="100" />
                    <img src="./Images/pandas.png" alt="pandas" width="100" />
                    <img src="./Images/html.png" alt="HTML" width="100" />
                    <img src="./Images/css.png" alt="CSS" width="100" />
                    <img src="./Images/javascript.png" alt="JS" width="100" />
                    <img src="./Images/AWS.png" alt="AWS" width="100" />
                    <img src="./Images/EC2.png" alt="EC2" width="100" />
                    <img src="./Images/ECR.png" alt="ECR" width="100" />
                    <img src="./Images/mongo.png" alt="Mongodb" width="100" />
                    <img src="./Images/mysql.png" alt="Mysql" width="100" />
                    <img src="./Images/github-actions.png" alt="github-actions" width="100" />
                    <img src="./Images/Vector.png" alt="Vector" width="100" />
                </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
                <small>
                    About Me
                </small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Machine learning</h3>
                    <ul>
                        <li>Supervised learning</li>
                        <li>Unsupervised learning</li>
                        <li>Artificial Neural Network</li>
                        <li>Convolutional Neural Network</li>
                        <li>Recurrent Neural Network</li>
                        <li>Long Short Term Memory</li>
                        <li>Gated Recurrent Unit Networks</li>
                        <li>Attention mechanism</li>
                        <li>Transformers - Self Attention </li>
                        <li>Transformers - Attention with mask </li>
                    </ul>
                    <h3>Generative AI</h3>
                    <ul>
                        <li>Chat GPT4, Ollama, Groq, Hugging face ...</li>
                        <li>Langchain framework</li>
                        <li>Vector Stores</li>
                    </ul>
                    <h3>ML Ops</h3>
                    <ul>
                        <li>Containerisation</li>
                        <li>Github/Github Actions</li>
                        <li>AWS - s3 Buket, ECR, EC2 machines</li>
                        <li>Monitoring Tools - Apache Airflow</li>
                    </ul>

                </div>
                <div className="right-column">
                    <h3>
                        A bit about me...
                    </h3>
                    <p>Hi, I&apos;m Arun Singh Negi, a coder and developer who is consistent in learning new methods and
                        technology in the field of machine learning and generative AI.</p>
                    <p>I have implemented numerous machine learning projects by writing modular code, ensuring
                        scalability. I have worked with both supervised and unsupervised learning models, Huggingface
                        models, and Generative AI models. Each end-to-end project includes steps from data ingestion to
                        model evaluation, followed by containerization using Docker and deployment in the cloud with a
                        CI/CD pipeline.</p>
                    <p>Currently, I am working on a project that generates SQL queries from simple text inputs,
                        retrieves results from databases, and performs needed operations such as summarization or
                        implementing ML models.</p>

                </div>
            </div>
        </section>
        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className="jobs">
            <article>
                    <figure>
                        <div>
                            <img src="./Images/Ineuron_1.jfif" alt="ineuron" />
                            <figcaption>Ineuron</figcaption>
                        </div>
                    </figure>
                    <h3>Ineuron</h3>
                    <div>2023-2024</div>
                    <p>I have completed end-to-end projects during my internship, from understanding problem statements to designing optimal architectures. I performed exploratory data analysis using Pandas, Matplotlib and Seaborn. </p><p>I applied various algorithms and pre-trained models to improve performance metrics.Documentation included high-level and low-level design with detailed workflows.</p>
                </article>
                
                <article>
                    <figure>
                        <div>
                            <img src="./Images/Teleperformance.jfif" alt="Teleperformance" />
                            <figcaption>Teleperformance</figcaption>
                        </div>
                    </figure>
                    <h3>Teleperformance</h3>
                    <div>2022-2023</div>
                    <p>As a Team Lead at Teleperformance, I managed a team, delivering resolution on clients queries. I resolved real-time client issues, handled high-level escalations in English and APAC regions.</p><p>My responsibilities included managing software installations through Jenkins, AD Manager, TP Console, and Azure AD. Additionally, I ensured adherence to company policies and maintained a positive, professional work environment.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./Images/Teleperformance.jfif" alt="Teleperformance" />
                            <figcaption>Teleperformance</figcaption>
                        </div>
                    </figure>
                    <h3>Teleperformance</h3>
                    <div>2020-2022</div>
                    <p>As a Technical Support Specialist at Teleperformance, I resolved IT issues for customers, including real-time support for Genesys dialer with SQL queries and Active Directory problems like user creation and authentication.</p><p> I used CMD to address remote software issues and conducted diagnostics. I also documented and maintained records of customer interactions and resolutions in the service desk ticketing tool.</p>
                </article>
                
            </div>
        </section>
        <section id="projects" className="bento container">
            <h2>
                <small>
                    Previous
                </small>
                Completed Projects
            </h2>
            <div className="bentogrid">

                <a href="https://github.com/Arun02DS/chatbot_medical.git" target="_blank" className="bentoitem">
                    <img src="Images/chatbot.jfif" alt="Chatbot" width="100%" />
                    <div className="caption">Explore the Medical Chatbot on GitHub</div>
                </a>
                <a href="https://github.com/Arun02DS/Text-summarization.git" target="_blank" className="bentoitem">
                    <img src="Images/text_summ.png" alt="Text-summ" width="100%" />
                    <div className="caption">Explore the Text Summarization Project on GitHub</div>
                </a>
                <a href="https://github.com/Arun02DS/Langchain_generator.git" target="_blank" className="bentoitem">
                    <img src="Images/QandA.jfif" alt="Ouestion-Answer" width="100%" />
                    <div className="caption">Explore the Question answer Chatbot on GitHub</div>
                </a>
                <a href="https://github.com/Arun02DS/Thyroid_detection.git" target="_blank" className="bentoitem">
                    <img src="Images/Thyroid_detect.jfif" alt="Thyroid" width="100%" />
                    <div className="caption">Explore the Thyroid detection Project on GitHub</div>
                </a>
                <a href="https://github.com/Arun02DS/Sign_lang_AWS.git" target="_blank" className="bentoitem">
                    <img src="Images/sign_lang.jfif" alt="Sign-language" width="100%" />
                    <div className="caption">Explore the Sign Language Detection project on GitHub</div>
                </a>
                <a href="https://github.com/Arun02DS/html_extractor.git" target="_blank" className="bentoitem">
                    <img src="Images/Html_ex.jfif" alt="" width="100%" />
                    <div className="caption">Explore the Html Extractor Project on GitHub</div>
                </a>


            </div>
        </section>
        <section className="chatbot container">
            <h2>
                <small>Talk to me</small>
                chatbot
            </h2>
            <div className="chatbot-blue">
                <div className="chatinfo">
                    <h3></h3>
                    <p>Welcome to my interactive chatbot, trained on my resume to answer your questions about my work
                        experience and skills..</p>
                    <p>For a comprehensive overview, you can download my full resume as a PDF document using the link
                        below.</p>
                    <a href="./resources/Arun_Negi_resume.pdf" target="_blank" className="button black">Download Resume</a>
                </div>
                <div className="chat-box">
                    <div className="scroll-area">
                        <ul id="chat-log">
                        {messages.map((message, index) => (
                        <li key={index} className={`${message.role}`}>
                            <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                            <div className="message">{message.content}</div>
                        </li>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={submitForm} className="chat-message">
                        <input type="text" placeholder="Hey Arun, What are your top skills?" 
                        value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                        <button className="button black">Send</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
