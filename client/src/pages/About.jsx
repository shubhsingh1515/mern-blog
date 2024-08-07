import imagePath from "./img/ai_img.png";

export default function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      ></div>
      <div className="max-w-4xl mx-auto p-3 text-center relative z-10">
        <h1 className="text-3xl font-semibold my-5">
          About TechVoyage
        </h1>
        <div className="text-2xl flex flex-col gap-5">
          <p>
            Welcome to TechVoyage! This blog was developed as a collaborative
            project by Shubham Singh, Anubhav Tiwari, and Vishakha Chaudhary.
            The team, comprising passionate developers, aims to share insights
            and ideas with the tech community. Our content focuses on various
            aspects of technology, software development, and related fields.
          </p>

          <p>
            This blog features weekly articles and tutorials covering a range
            of topics including web development, software engineering, and
            programming languages. Our team is dedicated to continuous learning
            and exploration of emerging technologies. Stay tuned for regular
            updates and in-depth content designed to enhance your technical
            knowledge and skills.
          </p>

          <p>
            We invite you to engage with our content by leaving comments on
            our posts and interacting with other readers. You can like and
            reply to comments to foster discussions. We believe that a
            collaborative learning community can facilitate mutual growth and
            continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
