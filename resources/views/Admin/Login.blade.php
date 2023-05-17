<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/tailwind.css')
    <title>Document</title>
    
</head>
<body class="flex place-content-center place-items-center h-screen">
    <div class="flex justify-center items-center w-full">
    <form action="{{route('admin.check')}}" method="post" 
    class="flex flex-col gap-y-4 w-full sm:max-w-xl md:max-w-md px-10"> 
        @csrf
        <h1 class="text-center bg-clip-text text-transparent bg-gradient-to-tl from-gray-500 to-gray-700
         text-2xl
        ">Admin Login</h1>

        <input type="email" name="email" value="{{ old('admin_email') }}" 
        class="rounded-md p-3 border border-1 border-transparent shadow-md transition delay-500ms duration-200
        appearance-none outline-none focus:outline-none
        @error('admin_email')
            border-red-500
        @enderror
        " placeholder="Email">
        <input type="password" name="password" value="{{old('admin_password') }}"
        class="rounded-md p-3 border border-1 border-transparent shadow-md transition delay-500ms duration-200  
        appearance-none outline-none focus:outline-none
        " placeholder="Password"
         >

        <button type="submit" class="w-full bg-gradient-to-tl from-blue-500 via-blue-550 to-indigo-600 
        scale-95 hover:scale-100 transition  delay-500ms duration-500ms transition-all shadow-md shadow-blue-300 
        shadow-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:from-indigo-600 hover:via-blue-550 hover:to-blue-500 
        text-white p-3 rounded-md text-xl">
            Login
        </button>
    </form>
</div>

</body>
</html>