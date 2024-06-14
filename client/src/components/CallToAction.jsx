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
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
            100 JavaScript Projects
          </a>
        </Button>
        <div className="p-4">
          <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about AI projects?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 15 AI Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://geekflare.com/artificial-intelligence-project-ideas-for-beginners/" target='_blank' rel='noopener noreferrer'>
            15 interesting AI project ideas
          </a>
        </Button>
        <div className="p-4">
          <img src="https://geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/12/ai-project-ideas-geekflare.jpg" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          JAVA projects for beginners
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 15 Java Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://codegnan.com/blogs/java-projects/" target='_blank' rel='noopener noreferrer'>
            15 JAVA Projects
          </a>
        </Button>
        <div className="p-4">
          <img src="data:image/jpeg;base64,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" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Internet of Things (IoT) projects
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 25 IoT Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://emeritus.org/in/learn/top-iot-project-ideas/" target='_blank' rel='noopener noreferrer'>
            Top 25 IoT project ideas
          </a>
        </Button>
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq2lLRC6lpgYbvrry9wWonez4RroRgtnxRw&s" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about python?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 25 Python Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://emeritus.org/in/learn/python-project-ideas/" target='_blank' rel='noopener noreferrer'>
            25 Python Projects
          </a>
        </Button>
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBfNYSOMkFXjm3p13uD-U3fX7QgjwRhh_4A&s" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to learn more about AI projects?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 15 AI Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://geekflare.com/artificial-intelligence-project-ideas-for-beginners/" target='_blank' rel='noopener noreferrer'>
            15 interesting AI project ideas
          </a>
        </Button>
        <div className="p-4">
          <img src="https://geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/12/ai-project-ideas-geekflare.jpg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
