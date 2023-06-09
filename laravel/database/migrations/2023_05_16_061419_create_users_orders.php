<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('seller_id');
            $table->string('buyer_email_address');
            $table->string('buyer_contact_number');
            $table->string('title');
            $table->integer('price');
            $table->string('category');
            $table->string('payment_method');
            $table->string('image');
            $table->string('imagepath');
            $table->string('address');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
