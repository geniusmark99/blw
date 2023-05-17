<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class SearchUsers extends Component
{
    public $searchTerm;

    public function render()
    {
        $users = User::where('name', 'LIKE', '%' . $this->searchTerm . '%')->get();
        return view('livewire.search-users', [
            'users' => $users
        ]);
    }
}
