import React from 'react'

function Login() {
    return (
        <div class="min-h-screen flex items-center justify-center bg-white">
            <div class=" max-w-xl container mx-auto flex items-center">
                <div class=" w-full">
                    <p class="text-center text-4xl text-indigo-900 font-semibold">LOGIN</p>
                    <div class="mt-16">
                        <div class="mt-2 ">
                            <label class="text-neutral-600 text-base font-normal">Email Id :</label>
                            <div class="flex my-3 py-3 items-center justify-between bg-zinc-100 rounded-lg border border-gray-500 ">
                                <input type="text" name="" placeholder="kanza@gmail.com"
                                    class="w-full text-neutral-800 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                            </div>
                        </div>
                        <div class="mt-6 ">
                            <label for="" class="text-neutral-600 text-base font-normal">Password :</label>
                            <div class="flex my-3 py-3 items-center justify-between bg-zinc-100 rounded-lg border border-gray-500 ">
                                <input type="password" name="" placeholder="kanza123" id=""
                                    class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                            </div>
                        </div>
                        <a href="#"
                            class="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline">Forgot password?</a>
                        <button class="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9
                                    hover:shadow-lg hover:shadow-indigo-600 hover:border hover:border-indigo-900 hover:rounded-lg  hover:text-center  hover:text-indigo-900 hover:bg-white hover:text-base">
                            Login now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login