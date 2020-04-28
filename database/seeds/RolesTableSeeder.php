<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->delete();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('roles')->insert(array(
            [
                'id' => '1',
                'name' => 'root-admin',
                'display_name' => 'Super Admin',
                'description'=>'Controls whole application'
            ],
            [
                'id' => '2',
                'name' => 'admin',
                'display_name' => 'Admin',
                'description'=>'Manges the application'
            ],
            [
                'id' => '3',
                'name' => 'estate',
                'display_name' => 'Estate User',
                'description'=>'For Estate User'
            ],
            [
                'id' => '4',
                'name' => 'headoffice',
                'display_name' => 'Head Office User',
                'description'=>'For Head Office Module'
            ]
        ));
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
