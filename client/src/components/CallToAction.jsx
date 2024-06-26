import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-9 p-4 border border-teal-300 rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about JavaScript?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 100 JavaScript Projects
        </p>
        <div className="p-4">
          <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
            100 JavaScript Projects
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about AI projects?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 15 AI Projects
        </p>
        <div className="p-4">
          <img src="https://geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/12/ai-project-ideas-geekflare.jpg" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://geekflare.com/artificial-intelligence-project-ideas-for-beginners/" target='_blank' rel='noopener noreferrer'>
            15 interesting AI projects
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          JAVA projects for beginners
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 15 Java Projects
        </p>
        <div className="p-4">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220612184300/Top-50-Java-Project-Ideas-For-Beginners-Advanced.png" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://codegnan.com/blogs/java-projects/" target='_blank' rel='noopener noreferrer'>
            15 JAVA Projects
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Internet of Things (IoT) projects
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 25 IoT Projects
        </p>
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq2lLRC6lpgYbvrry9wWonez4RroRgtnxRw&s" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://emeritus.org/in/learn/top-iot-project-ideas/" target='_blank' rel='noopener noreferrer'>
            Top 25 IoT project ideas
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about python?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 25 Python Projects
        </p>
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBfNYSOMkFXjm3p13uD-U3fX7QgjwRhh_4A&s" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://emeritus.org/in/learn/python-project-ideas/" target='_blank' rel='noopener noreferrer'>
            25 Python Projects
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          MERN Stack projects        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 35+ MERN Stack Projects
        </p>
        <div className="p-4">
          <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/320888729/original/e0c92edfdc90873140e6ad00f9d4efa8b7a577d5/be-your-full-stack-developer-mern.jpg" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://www.geeksforgeeks.org/mern-stack-projects/" target='_blank' rel='noopener noreferrer'>
            35+ MERN Stack Projects
          </a>
        </Button>
      </div>
    </div>
  );
}
