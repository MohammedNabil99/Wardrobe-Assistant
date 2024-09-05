// import { NextRequest, NextResponse } from "next/server";
// import { OpenAI } from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set
//   dangerouslyAllowBrowser: true, // This can be used if necessary
// });

// export async function POST(request: NextRequest) {
//   try {
//     const { tops, bottoms, shoes } = await request.json();

//     const prompt = `You are an outfit designer. Based on these items, suggest an outfit. Tops: ${tops.join(
//       ", "
//     )}. Bottoms: ${bottoms.join(", ")}. Shoes: ${
//       shoes.length ? shoes.join(", ") : "No shoes available"
//     }.`;

//     const response = await openai.completions.create({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 150,
//     });

//     return NextResponse.json({ outfit: response.choices[0].text.trim() });
//   } catch (error) {
//     console.error("Error generating outfit:", error);
//     return NextResponse.json(
//       { error: "Failed to generate outfit" },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { OpenAI } from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(request: NextRequest) {
//   try {
//     const { tops, bottoms, shoes } = await request.json();

//     if (
//       !Array.isArray(tops) ||
//       !Array.isArray(bottoms) ||
//       !Array.isArray(shoes)
//     ) {
//       return NextResponse.json(
//         { error: "Invalid input format" },
//         { status: 400 }
//       );
//     }

//     const messages = [
//       {
//         role: "system" as const,
//         content: "You are an outfit designer.",
//       },
//       {
//         role: "user" as const,
//         content: `Based on these items, suggest an outfit with details and image URLs.
//         Tops: ${tops.join(", ")}. Bottoms: ${bottoms.join(", ")}. Shoes: ${
//           shoes.length ? shoes.join(", ") : "No shoes available"
//         }. Format the response as a JSON array with objects containing 'name', 'category', and 'image_url' properties.`,
//       },
//     ];

//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages,
//       max_tokens: 300,
//     });

//     // Ensure response is not null and has choices
//     const message = response?.choices[0]?.message?.content;
//     if (!message) {
//       return NextResponse.json(
//         { error: "Invalid response from OpenAI" },
//         { status: 500 }
//       );
//     }

//     // Remove unwanted characters or markdown from the response
//     const cleanMessage = message.replace(/```json|```/g, "").trim();

//     let outfit;
//     try {
//       outfit = JSON.parse(cleanMessage);
//     } catch (parseError) {
//       console.error("Error parsing OpenAI response:", parseError);
//       return NextResponse.json(
//         { error: "Failed to parse outfit data" },
//         { status: 500 }
//       );
//     }

//     if (
//       !Array.isArray(outfit) ||
//       !outfit.every((item) => item.name && item.category && item.image_url)
//     ) {
//       return NextResponse.json(
//         { error: "Invalid outfit data format" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ outfit });
//   } catch (error) {
//     console.error("Error generating outfit:", error);
//     return NextResponse.json(
//       { error: "Failed to generate outfit" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { tops, bottoms, shoes } = await request.json();

    if (
      !Array.isArray(tops) ||
      !Array.isArray(bottoms) ||
      !Array.isArray(shoes)
    ) {
      return NextResponse.json(
        { error: "Invalid input format" },
        { status: 400 }
      );
    }

    const messages = [
      {
        role: "system" as const,
        content:
          "You are an outfit designer who provides detailed outfit suggestions including image URLs for each item.",
      },
      {
        role: "user" as const,
        content: `Based on these items, suggest an outfit with details and image URLs. 
        Tops: ${tops.join(", ")}. Bottoms: ${bottoms.join(", ")}. Shoes: ${
          shoes.length ? shoes.join(", ") : "No shoes available"
        }. Format the response as a JSON array with objects containing 'name', 'category', and 'image_url' properties, and ensure URLs are valid.`,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 300,
    });

    const message = response?.choices[0]?.message?.content;
    if (!message) {
      return NextResponse.json(
        { error: "Invalid response from OpenAI" },
        { status: 500 }
      );
    }

    const cleanMessage = message.replace(/```json|```/g, "").trim();

    let outfit;
    try {
      outfit = JSON.parse(cleanMessage);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      return NextResponse.json(
        { error: "Failed to parse outfit data" },
        { status: 500 }
      );
    }

    if (
      !Array.isArray(outfit) ||
      !outfit.every((item) => item.name && item.category && item.image_url)
    ) {
      return NextResponse.json(
        { error: "Invalid outfit data format" },
        { status: 500 }
      );
    }

    return NextResponse.json({ outfit });
  } catch (error) {
    console.error("Error generating outfit:", error);
    return NextResponse.json(
      { error: "Failed to generate outfit" },
      { status: 500 }
    );
  }
}
