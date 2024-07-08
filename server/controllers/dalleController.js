import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const generateImg = async (req, res) => {
  console.log("generating ..");
  try {
    const { prompt } = req.body;
    console.log("prompt : ", prompt);

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data[0].b64_json;
    return res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export { generateImg };
