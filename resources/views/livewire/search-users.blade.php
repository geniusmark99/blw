<div>
    <input type="search" wire:model="searchTerm" placeholder="Search users...">
    <ul>
        @foreach ($users as $user)
            <li>{{ $user->name }}</li>
        @endforeach
    </ul>
</div>