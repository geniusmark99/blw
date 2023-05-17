@extends('Layouts.Admin')
@section('admin-styles')
@vite('resources/css/tailwind.css')
@endsection
@section('admin-content')
    <article class="p-4">
        <section class="bg-red-600 flex flex-col w-full gap-y-4 space-y-4">
        <div class="w-full">one</div>
        <div class="w-full">two</div>
        <div class="w-full">three</div>
        <div class="w-full">four</div>
    </section>

    </article>
@endsection