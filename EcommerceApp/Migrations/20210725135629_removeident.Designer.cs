﻿// <auto-generated />
using EcommerceApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EcommerceApp.Migrations
{
    [DbContext(typeof(ClothAppDbContext))]
    [Migration("20210725135629_removeident")]
    partial class removeident
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EcommerceApp.Models.Cloth", b =>
                {
                    b.Property<int>("ClothId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClothBrand")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ClothName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<decimal>("ClothPrice")
                        .HasColumnType("decimal(5,1)");

                    b.Property<string>("ClothSize")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("ClothType")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("PhotoFileName")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ClothId");

                    b.ToTable("Clothes");
                });
#pragma warning restore 612, 618
        }
    }
}