import {StarIcon} from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="bg-black/90 items-center flex justify-center" >
      <div className="bg-gray-700 rounded my-5 h-50 p-7 text-white">
        <div className='rounded-full bg-white w-[50px] h-[50px]'>
          <StarIcon className='h-8 fill-orange-300 pl-2 my-2 text-center'/>
        </div>
        <div className='text-3xl font-semibold pt-5'>How did we do?</div>
        <div className='pt-2'>
          Please let us know how we did with your support <br/>request.All feedback is appreciated to help us<br/> improve our offering!
        </div>
        <div className='space-x-2 pt-4'>
          <button className='rounded-full w-[50px] h-[50px] bg-white'>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className='w-full my-3'><button className='bg-orange-300 w-full rounded-3xl'>Submit</button></div>
      </div>
    </div>
  );
}

export default App;
