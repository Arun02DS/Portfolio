import { NextResponse } from 'next/server';
import Groq from "groq-sdk";

const apikey = process.env.GROQ_API_KEY;
const MODEL = process.env.MODEL;



// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

// export const getGroqChatCompletion = async () => {
//   return groq.chat.completions.create({
//     //
//     // Required parameters
//     //
//     messages: [
//       // Set an optional system message. This sets the behavior of the
//       // assistant and can be used to provide specific instructions for
//       // how it should behave throughout the conversation.
//       {
//         role: "system",
//         content: "you are a helpful assistant.",
//       },
//       // Set a user message for the assistant to respond to.
//       {
//         role: "user",
//         content: "Explain the importance of fast language models",
//       },
//     ],

//     // The language model which will generate the completion.
//     model: "llama3-8b-8192",

//     //
//     // Optional parameters
//     //

//     // Controls randomness: lowering results in less random completions.
//     // As the temperature approaches zero, the model will become deterministic
//     // and repetitive.
//     temperature: 0.5,

//     // The maximum number of tokens to generate. Requests can use up to
//     // 2048 tokens shared between prompt and completion.
//     max_tokens: 1024,

//     // Controls diversity via nucleus sampling: 0.5 means half of all
//     // likelihood-weighted options are considered.
//     top_p: 1,

//     // A stop sequence is a predefined or user-specified text string that
//     // signals an AI to stop generating content, ensuring its responses
//     // remain focused and concise. Examples include punctuation marks and
//     // markers like "[end]".
//     stop: null,

//     // If set, partial message deltas will be sent.
//     stream: false,
//   });
// };

// main();

export async function POST(req){
  const groq = new Groq();
  const { messages } = await req.json();

  messages.unshift({
		role: 'system',
		content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Arun Singh Negi from his resume and give responces in paragraph or a line.
Content should be in next line after using phrases like arun's profile.`
	})

  const Response = await groq.chat.completions.create({
    messages:messages,
    model:MODEL,
    max_tokens: 128,
  })

  return NextResponse.json(Response.choices[0]?.message?.content || "")
}


const DATA_RESUME = `Arun Singh Negi
Address: Evergreen apartments, chatarpur, delhi
Phone: +91 8077840135
Email:  arunpycodecmaster@gmail.com

Education :
{(Bachelors Of Technology [2007-2011]
Title of Academy : Uttrakhand technical university),
(Masters Of Technology [2013-2015]
Title of Academy : Govind Ballabh pant university of agriculture and technology)}

Certifications:
{Oracle certified AI professional  [2023] - valid till 2025,
Full stack machine learning certification}

Skills:
Full Stack Machine Learning 
Algorithms:  {Supervised Learning - Regression,Classification,
  Unsupervised Learning - Clustering,Dimensionality Reduction, Artificail neural Networks, LLM
  CNN, RNN, LSTM, GRU, encoders-decoders, transformers, BERT}
Gen AI : {ChatGPT, Llama, Groq, Mistral, Gemma, (Vector Databases: {FAISS, Pinecone, Chroma})} 
Programming Languages: {Python, mySQL, HTML, CSS, JS} 
MLOPs: {Langchain, Dockers, Github Actions, AWS-( S3,ECR,EC2), Flask, Streamlit}

Employement History:
{(Ineuron: 2023-2024,As a intern Developed many ML algorithms and deployed them to clod platforms like AWS using docker and Github actions's CI-CD Pipelines. )
(Teleperformance: 2020-2023, Started as Data scientist then promoted as Sr. Data scientist.Done data ingestion. data cleaning, feature enginnering on data. Transformation of data for ML/LLM model. Finding optimal model and deploy it on cloud like AWS. )}

Projects:
{
 1. Chatbot
  Gen AI Project
 Tech Stack - Python,Pinecone vector db,Langchain, Meta lamma2, Flask-
 Utilized pre-trained LAMA2 model to deploy Flask-based application.-Trained model on medical encyclopedia data, enabling it to answer related queries proficiently.-Employed text embedding with overlap processing, stored in Pinecone for efficient retrieval.

 2. Text Summarization
  Summary of Text ( NLP project )
 
  Tech Stack- Python, Transformers, Pegasus-cnn_dailymail,Github, FastAPI, Docker, AWS
  
  I implemented a text summarization solution by incorporating a pre-trained model within an end-to-end pipeline.
  
  The pipeline encompasses data collection, transformation, training, and evaluation stages.
 
 An application has been created to facilitate real-time implementation checks, whether offline or on the cloud.
  After the process of dockerization, the image has been successfully deployed to the AWS cloud.

 3. Thyroid Detection Problem
  Classification Problem
  Tech Stack - Python, MongoDB, GitHub Actions, Docker, S3 bucket, AWS EC2, AWS ECR, Apache Airflow.
  I designed an ML pipeline with six key components such as data ingestion,data validation, data transformation, etc. 
 emphasizing robustness through integrated logging and thorough exception handling in the codebase.
  Initiated data ingestion by extracting data from MongoDB and incorporating it into the pipeline
  Created an image using Docker and deployed it to the AWS cloud through GitHub Actions.
  AWS components come into play as the artifacts are stored in an S3 bucket, images are housed in the ECR repository, and 
 the execution of code takes place within an EC2 instance integrated with Apache Airflow.

 4. Sign Language Detection
  Object Detection

  Tech Stack- Python, GitHub actions, Pytorch, Docker, Yolo v5, Flask, AWS.
  I implemented a comprehensive end-to-end modular Deep Learning project featuring pipeline components such as Data 
 Ingestion, Data Validation, Model Trainer, and Model Pusher.
  The project is facilitated using a pre-trained YOLOv5 model.
  This entire workflow is facilitated through the dockerization of the code, enabling its deployment on AWS. The resulting 
 artifacts are systematically stored in an S3 bucket.
  To operationalize the model, an EC2 instance is employed to launch the application designed for sign language detection

  Note: There are other projects related to Machine learning and Gen AI on my Github.

}

Additional Skills and Interests
Language: Fluent in English and Hindi
Hobbies: Fitness, Reading books on various topics, Gardening.`