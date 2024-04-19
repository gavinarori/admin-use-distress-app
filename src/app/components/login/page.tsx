import React from 'react'
import Image from 'next/image'

 const Login = () => {
  return (
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
    <img
        alt=""
        src="https://img.freepik.com/free-vector/hand-drawn-asian-family-illustration_23-2149425676.jpg?t=st=1710262304~exp=1710265904~hmac=b491de63b42647a2ae2c532efc3132fe0d33fa26bbf52feaabc07e7759f423aa&w=740"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20" href="#">
          <span className="sr-only">Home</span>
          <Image
            src="/next.svg"
            className='h-8 sm:h-10'
            width={500}
            height={500}
            alt="Picture of the author"
            />
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to <span className=''>Distress</span>
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        Swift and reliable emergency responses: your safety is our priority. Trust us for quick assistance when you need it most.
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            
          >
            <span className="sr-only">Home</span>
            <Image
      src="/next.svg"
      className='h-8 sm:h-10 '
      width={500}
      height={500}
      alt="Picture of the author"
    />
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to <span className='text-red-600'>Distress</span>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          Swift and reliable emergency responses: your safety is our priority. Trust us for quick assistance when you need it most.
          </p>
        </div>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md px-3 py-3 border-[2px] border-[#FF8080]  bg-white text-sm text-gray-700 shadow-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md px-3 py-3 border-[2px] border-[#FF8080]  bg-white text-sm text-gray-700 shadow-md"
            />
          </div>


          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md  border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-[#FF8080] bg-[#FF8080]   px-12 py-3 text-sm font-medium text-white transition hover:bg-[#d88282]   focus:outline-none focus:ring "
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  )
}

export default Login;
