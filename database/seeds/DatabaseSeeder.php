<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Model::unguard();

//        $this->call(ProductCategoryTableSeeder::class);
        // $this->call(GardenTableSeeder::class);
        // $this->call(FarmerTableSeeder::class);
//        $this->call(LeafGradeTableSeeder::class);
        //  $this->call(BoughtLeafTableSeeder::class);
        //  $this->call(AgentTableSeeder::class);
//         $this->call(SahakariTableSeeder::class);
//        $this->call(BoughtLeafDailyTableSeeder::class);
//        $this->call(CashPluckingLeafTableSeeder::class);
//        $this->call(SupplierTableSeeder::class);
//        $this->call(WitheringTableSeeder::class);
//        $this->call(DryingTableSeeder::class);
//        $this->call(ProcessTableSeeder::class);
//        $this->call(TeaGradingTableSeeder::class);
//        $this->call(TeaGradingSortingTableSeeder::class);
//        $this->call(TeaGradeTransferTableSeeder::class);
//        $this->call(InvoiceRegisterTableSeeder::class);
//        $this->call(RollingTableSeeder::class);
//        $this->call(DryerTableSeeder::class);
//        $this->call(RolesTableSeeder::class);
//        $this->call(LanguageTableSeeder::class);
//        $this->call(UserTableSeeder::class);
//        $this->call(MenusTableSeeder::class);
//        $this->call(PermissionsTableSeeder::class);
//        $this->call(RouteTableSeeder::class);
        $this->call(PermissionRoleTableSeeder::class);

        /**
         * Run the database seeds for field module.
         *
         */
//        $this->call(SectionTableSeeder::class);
        // $this->call(BushTypeTableSeeder::class);
        // $this->call(BushVarietyTableSeeder::class);
        // $this->call(NurseryMaintenanceTableSeeder::class);
        // $this->call(ShadeTreeVarietyTableSeeder::class);
        // $this->call(NurseryTableSeeder::class);
        // $this->call(PruneStyleTableSeeder::class);
        // $this->call(PrunePlanTableSeeder::class);
        // $this->call(DivisionWeatherTableSeeder::class);
        // $this->call(NurseryPlantingTableSeeder::class);
        // $this->call(PlantDistributionTableSeeder::class);
//         $this->call(DivisionTableSeeder::class);
        // $this->call(IrrigationTableSeeder::class);
        // $this->call(UnitTableSeeder::class);

        /**
         * Kamjari report seeder.
         *
         */
        // $this->call(WorkHeadTableSeeder::class);
        // $this->callGardenKamjariTableSeeder::class);



        Model::reguard();
    }

}
