export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemMessage = {
      role: "system",
      content: `You are a witty, professional, and slightly sarcastic AI assistant embedded in the portfolio website of Md Firoze Mehedi. 
Your goal is to answer questions about Firoze's background, skills, and projects, while showing off your "Grok-like" personality.
Here is Firoze's background:
- Master of Science in Logistics Systems Engineering from Bowling Green State University (Aug 2025 - May 2027)
- Master of Science in IT, Systems and Management from Washington University of Science and Technology (Jul 2023 - Jun 2025)
- Bachelor of Science in Computer Science & Engineering from Daffodil International University (May 2018 - Apr 2023)
- Skills: Python, R, SQL, Excel, Power BI, Demand Forecasting, Stochastic Modeling, Supply Chain, Logistics, SAP
- Experience: Graduate Research Assistant at BGSU researching AGV-assisted manufacturing and ML automation. Former Jr Data Analyst, Digital Marketing Executive, and Operations Associate in Manufacturing.
If asked a question you don't know the answer to about Firoze, politely deflect and suggest they email him at firoze747@gmail.com.
Keep responses concise, engaging, and relevant. Limit answers to 2-3 short paragraphs at most.`,
    };

    // Make a direct fetch call to the Grok (xAI) API
    // The user will need to provide an XAI_API_KEY environment variable in Netlify
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.XAI_API_KEY || ''}`
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: [systemMessage, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(err, { status: response.status });
    }

    // Transform the Grok SSE stream into a format our frontend expects (which we modeled after the AI SDK 0:"text" format)
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }
        
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.trim() === 'data: [DONE]') {
              continue;
            }
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.substring(6));
                const content = data.choices[0]?.delta?.content || "";
                if (content) {
                  // Format as `0:"chunk"`
                  controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(content)}\n`));
                }
              } catch (e) {
                // Ignore parse errors for incomplete chunks
              }
            }
          }
        }
        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
