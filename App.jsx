import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const videos = [
    {
      id: 1,
      title: "Best of Mr. Bean",
      embedUrl: "https://www.youtube.com/embed/MYxAiK6VnXw",
    },
    {
      id: 2,
      title: "Top Stand-up Comedy - Kevin Hart",
      embedUrl: "https://www.youtube.com/embed/5TjmH0P94_g",
    },
    {
      id: 3,
      title: "Funny Kids Fails Compilation",
      embedUrl: "https://www.youtube.com/embed/1ytFB8TrkTo",
    },
    {
      id: 4,
      title: "Indian Stand-up Comedy by Zakir Khan",
      embedUrl: "https://www.youtube.com/embed/tvTRZJ-4EyI",
    },
    {
      id: 5,
      title: "Whose Line Is It Anyway? Funniest Moments",
      embedUrl: "https://www.youtube.com/embed/YrI5RSDNHwg",
    },
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Comedy videos from YouTube
      </h1>

      <div className="mb-6 flex justify-center gap-2">
        <input
          type="text"
          className="border border-gray-400 px-4 py-2 w-1/2 rounded"
          placeholder="Search comedy videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <li
            key={video.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <iframe
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded"
              ></iframe>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {video.title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
