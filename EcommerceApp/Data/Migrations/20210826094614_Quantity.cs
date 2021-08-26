using Microsoft.EntityFrameworkCore.Migrations;

namespace EcommerceApp.Migrations
{
    public partial class Quantity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhotoFileName",
                table: "Clothes",
                newName: "ClothPicture");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Clothes",
                type: "int",
                nullable: false,
                defaultValue: 1);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Clothes");

            migrationBuilder.RenameColumn(
                name: "ClothPicture",
                table: "Clothes",
                newName: "PhotoFileName");
        }
    }
}
