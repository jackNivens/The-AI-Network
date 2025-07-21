import { useEffect, useState } from "react";

export default function Home() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchTools() {
      try {
        const res = await fetch("https://api.apis.guru/ai-tools-list.json");
        const data = await res.json();
        setTools(data.tools || []);
      } catch (err) {
        console.error("Failed to fetch tools", err);
      }
    }
    fetchTools();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">The AI Network</h1>
      <div className="my-4 text-center bg-gray-200 p-4 rounded">
        <p>Ad Space - Paste your Google AdSense code here</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="shadow-lg hover:shadow-xl transition rounded-2xl p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
            </div>
            <a
              href={tool.affiliate_link || tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Visit Tool
            </a>
          </div>
        ))}
      </div>
      <div className="my-6 text-center bg-gray-200 p-4 rounded">
        <p>Ad Space - Paste your Google AdSense code here</p>
      </div>
    </div>
  );
}
