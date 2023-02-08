import Link from "next/link";

function Register() {
    return (
        <div className="flex justify-center mt-10">
            <div className="flex flex-col max-w-md p-4 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-4 text-center">
                    <h1 className="my-2 text-4xl font-bold">Login</h1>
                    <p className="text-sm dark:text-gray-400">Login to access your account</p>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Your full name here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="phone" className="block mb-2 text-sm">Phone Number</label>
                            <input type="phone" name="phone" id="phone" placeholder="Your mail here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Your mail here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Login</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
                            <Link href="/login" className="hover:underline dark:text-violet-400">Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;