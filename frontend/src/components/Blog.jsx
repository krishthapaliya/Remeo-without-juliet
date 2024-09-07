import React from 'react';
import Marquee from 'react-fast-marquee';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";

// BlogPost Component
const BlogPost = ({ image, title, description, date, location, onClick }) => {
  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-200 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
      style={{ width: '250px', height: '350px' }} // Adjusted height
    >
      <img src={image} alt={title} className="w-full h-[150px] object-cover" />
      
      {/* Date on top-right corner */}
      <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
        {date}
      </div>
      
      {/* Location on bottom-left corner */}
      <div className="absolute bottom-[200px] left-2 bg-gray-800 text-white text-xs px-2 py-2 rounded">
        {location}
      </div>

      <div className="p-5 h-[250px] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

// BlogList Component with Marquee
const BlogList = ({ posts }) => {
  const handleClick = (post) => {
    alert(`Clicked on: ${post.title}`);
  };

  return (
    <div className="relative">
      <Marquee
        speed={20} // Adjust speed as needed
        pauseOnHover
        className="p-4"
        gradient={false} // Disables gradient fade effect
        style={{ overflow: 'hidden', width: '100%' }}
      >
        <div className="flex">
          {posts.map((post, index) => (
            <div key={index} className="p-2">
              <BlogPost
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
                location={post.location}
                onClick={() => handleClick(post)}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

// Main Blog Component
const Blog = () => {
  const posts = [
    {
      "title": "Community Tree Planting",
      "description": "Our Community Tree Planting Day in Kathmandu Valley was a success. Volunteers helped plant trees to combat deforestation and enhance green spaces in the city.",
      "date": "2024-09-15",
      "location": "Kathmandu Valley",
      "image": img1
    },
    {
      "title": "River Clean-Up in Pokhara",
      "description": "The river clean-up event in Pokhara was completed with great participation. Volunteers removed trash and debris from the riverbanks, contributing to a cleaner and healthier environment.",
      "date": "2024-09-20",
      "location": "Pokhara",
      "image": img2
    },
    {
      "title": "Plastic Waste Reduction Initiative",
      "description": "The Plastic Waste Reduction Initiative effectively promoted alternatives to single-use plastics and organized community clean-up events to combat plastic pollution.",
      "date": "2024-10-10",
      "location": "Bhaktapur",
      "image": img3
    },
    {
      "title": "Green Energy Awareness Seminar",
      "description": "The Green Energy Awareness Seminar provided important information on renewable energy sources. Volunteers helped spread awareness and support the transition to green energy solutions.",
      "date": "2024-10-20",
      "location": "Lalitpur",
      "image": img4
    },
    {
      "title": "Water Conservation Awareness in Hetauda",
      "description": "Residents in Hetauda participated in a water conservation workshop that taught techniques for preserving water resources and improving local water quality.",
      "date": "2024-10-25",
      "location": "Hetauda",
      "image": img5
    },
    {
      "title": "Kathmandu Valley Air Pollution Awareness",
      "description": "A successful awareness campaign in Kathmandu Valley educated residents on the harmful effects of air pollution and ways to reduce their carbon footprint.",
      "date": "2024-10-05",
      "location": "Kathmandu Valley",
      "image": img6
    },
  ];

  return (
    <div className="App">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-500">Blog</h1>
      </header>
      <main>
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

export default Blog;
