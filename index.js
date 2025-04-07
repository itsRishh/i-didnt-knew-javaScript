import OpenAI from "openai";

const OPENAI_API_KEY = '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'

const client = new OpenAI({
    apikey: OPENAI_API_KEY,
})

//Tools
function getWeatherDetails(city = ''){
    if (city.toLowerCase==="patiala") return '10C';
    if (city.toLowerCase==="noida") return '14C';
    if (city.toLowerCase==="bangalore") return '20C';
    if (city.toLowerCase==="delhi") return '12C';
    if (city.toLowerCase==="chandigarh") return '8C';
}

const SYSTEM_PROMPT=
`
You are an AI Assistant with START, PLAN, ACTION, Observation and Output State.
Wait for the user prompt and first PLAN using available tools.
After Planning, Take the action with appropriate tools and wait for Observation based on Action.
Once you get the Observations, Return the AI response based on START prompt and observations
Available Tools:
-function getWeatherDetails(city:string):string
getWeatherDetails is a function that accepts city name as string and returns the weather Details.

Example:
START
{"type":"user","user":"What is the sum of weather of Patiala and Mohali?"}
{"type":"plan","plan":"I will call the getWeatherDetails for Patiala"}
{"type":"action","function":"getWeatherDetails","input":"Patiala"}
{"type":"observation","observation" : "10C"}
{"type":"action","function":"getWeatherDetails","input":"Mohali"}
{"type":"observation","observation" : "14C"}
{"type":"output","output":"The sum of weather of Patiala and Mohali is 24C"}
`;

const user ='Hey, What is weather of Patiala';

async function chat(){

        const result = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [
        {"role": "system", content: SYSTEM_PROMPT},
        { role: 'user', content: user }],
        });
        console.log(result.choices[0].message.content);
        }
        
chat();
