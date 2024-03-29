<?php

namespace App\Console\Commands;

use App\Models\User;
use Common\Auth\Events\UserCreated;
use Common\Auth\Permissions\Permission;
use Illuminate\Console\Command;

class CreateDemoAccounts extends Command
{
    private int $numOfAccounts = 100;

    protected $signature = 'demo:create_accounts';

    public function handle()
    {
        $bar = $this->output->createProgressBar($this->numOfAccounts);

        $adminPermission = app(Permission::class)
            ->where('name', 'admin')
            ->first();

        \DB::table('users')
            ->where('email', 'like', 'admin@demo%.com')
            ->delete();

        for ($i = 0; $i <= $this->numOfAccounts; $i++) {
            $number = str_pad($i, 3, '0', STR_PAD_LEFT);
            $user = new User([
                'username' => 'admin',
                'email' => "admin@demo{$number}.com",
                'first_name' => 'Demo',
                'last_name' => 'Admin',
                'password' => 'admin',
            ]);

            $user->save();
            $user->permissions()->attach($adminPermission->id);

            event(new UserCreated($user));
            $bar->advance();
        }

        $bar->finish();
    }
}
