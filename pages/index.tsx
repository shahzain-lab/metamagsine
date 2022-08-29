import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-dark w-full h-screen text-center text-4xl">
       <h1 className="text-primary underline decoration-primary">Meta</h1>
       <h1 className="text-secondary ml-36 underline decoration-secondary">Magsine</h1>
       <h1 className='text-blue block mt-40 underline decoration-blue'>Coming Soon</h1>
    </div>
  )
}

export default Home
