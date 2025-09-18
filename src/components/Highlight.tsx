export default function Highlight() {
  return (
    <section className="mb-20 text-center">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6">
        2025 IEEE SouthEastCon Highlights
      </h2>
      <video controls width="800" className="mx-auto rounded-lg shadow-lg">
        <source src="/videos/highlight.mp4" type="video/mp4" />
        <source src="/videos/highlight.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
