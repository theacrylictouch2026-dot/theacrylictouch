"use server"

export async function askCurator(userMessage) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return "The vault's security key is missing. Add OPENROUTER_API_KEY to .env.local";
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", 
      },
      body: JSON.stringify({
        // Yeh OpenAI ka latest free model hai OpenRouter par
        "model": "openai/gpt-4o-mini-2024-07-18", 
        "messages": [
          {
            "role": "system",
            "content": "You are the 'AI Curator' for 'The Acrylic Touch' gallery. Tone: Sophisticated, brief, and artistic. Context: Art Competition 2026."
          },
          {
            "role": "user",
            "content": userMessage
          }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("AI Error:", data.error);
      return "The Curator is currently attending a private gala. Try again shortly.";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Fetch Error:", error);
    return "Connection to the gallery vault lost.";
  }
}