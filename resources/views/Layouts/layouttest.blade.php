<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>testing @yield('title',"Default Title")</title>
    @vite('resources/css/tailwind.css')
</head>
<body>
    @section('sidebar')
    <div class="bg-gray-200 p-4">
        <h1 class="text-2xl font-bold mb-4">Hello, world!</h1>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    @show
    <h1>
  @yield('content')
    </h1>
</body>
</html>