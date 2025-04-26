import { Button } from 'flowbite-react';
import imagePath from "../pages/img/portfolio.png";

export default function CallToAction() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-9 p-4 border border-teal-300 rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Weather App
        </h2>
        <div className="p-4">
        <a href="https://shubhsingh1515.github.io/Weather-App/" target='_blank' rel='noopener noreferrer'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5zCoukLJNu9n47SQ-ZFZobVRST_MpBX-lPySZpt28Yu4DZIer0u-dn56mTlFih9Cdf0&usqp=CAU" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://github.com/shubhsingh1515/Weather-App" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Movie Search App
        </h2>
        <div className="p-4">
        <a href="https://github.com/shubhsingh1515/Movie-Search-App" target='_blank' rel='noopener noreferrer'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1WepDqWN32MrmSYOT_NdzHTsMMrv0uhAXEVWyJro4v8c0pM8Q3M9QwkGCArmK5nIHr8&usqp=CAU" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://movie-search-app-qccb.onrender.com/" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Real Time Chat App
        </h2>
        <div className="p-4">
        <a href="https://real-time-chat-0jn1.onrender.com/" target='_blank' rel='noopener noreferrer'>
      <img src="https://miro.medium.com/v2/resize:fit:700/1*mLE5ZxhtATxrwh20SL2Tlg.png" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://github.com/shubhsingh1515/Real-Time-Chat" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Blog Website
        </h2>
        <div className="p-4">
        <a href="https://mern-blog-o6qn.onrender.com/" target='_blank' rel='noopener noreferrer'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRnQsH80rU5vFcmzc4YLhdIbncqbEkK_FrKMQHseuW8PD6lJo73-ASKVzTXas_zVoZRI&usqp=CAU" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://github.com/shubhsingh1515/mern-blog" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Stopwatch
        </h2>
        <div className="p-4">
        <a href="https://shubhsingh1515.github.io/StopWatch/" target='_blank' rel='noopener noreferrer'>
      <img src="https://c8.alamy.com/comp/2NYFETK/conceptual-stopwatch-describing-the-time-to-create-develop-and-launch-a-new-project-ttm-time-to-market-and-project-management-concept-3d-illustrat-2NYFETK.jpg" className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://github.com/shubhsingh1515/StopWatch" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Portfolio
        </h2>
        <div className="p-4">
        <a href="https://github.com/shubhsingh1515/Portfolio" target='_blank' rel='noopener noreferrer'>
      <img src={imagePath} className="w-full h-auto" style={{ width: '300px', height: '200px' }} />
    </a>
        </div>
        <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://p-6nib.onrender.com/" target='_blank' rel='noopener noreferrer'>
            View
          </a>
        </Button>
      </div>
    </div>
  );
}
