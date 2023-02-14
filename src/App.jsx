import { useState } from 'react'
import ArrayFilter from './components/ArrayFilter';
import ArrayMap from './components/ArrayMap';
import ArrayReduce from './components/ArrayReduce';
import ArraySort from './components/ArraySort';
import './App.css'

function App() {

  const [componentToShow, setComponentToShow] = useState();

  const arrayReduceHandler = () => {
    setComponentToShow('reduce');
  }

  const arrayFilterHandler = () => {
    setComponentToShow('filter');
  }

  const arrayMapHandler = () => {
    setComponentToShow('map');
  }

  const arraySortHandler = () => {
    setComponentToShow('sort');
  }

  return (
    <div className="App w-[50%] mx-auto py-5">
      <nav class="flex justify-center gap-5">
        <button onClick={arrayReduceHandler} className="relative inline-block text-lg group">
          <span className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-100 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-teal-100">Total Cost</span>
          </span>
        </button>

        <button onClick={arrayMapHandler} className="relative inline-block text-lg group">
          <span className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-100 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-teal-100">Product List</span>
          </span>
        </button>

        <button onClick={arraySortHandler} className="relative inline-block text-lg group">
          <span className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-100 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-teal-100">Prices Sorted</span>
          </span>
        </button>

        <button onClick={arrayFilterHandler} className="relative inline-block text-lg group">
          <span className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-100 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-teal-100">Products on Sale</span>
          </span>
        </button>
      </nav>

      <section className='py-5'>
        {componentToShow === 'filter' && <ArrayFilter />}
        {componentToShow === 'map' && <ArrayMap />}
        {componentToShow === 'reduce' && <ArrayReduce />}
        {componentToShow === 'sort' && <ArraySort />}
      </section>
    </div>
  )

}

export default App