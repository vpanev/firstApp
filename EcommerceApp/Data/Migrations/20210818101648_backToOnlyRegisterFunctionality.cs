using Microsoft.EntityFrameworkCore.Migrations;

namespace EcommerceApp.Migrations
{
    public partial class backToOnlyRegisterFunctionality : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "686557db-5129-423a-b372-980898229a59");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a4d54740-e22e-4822-a527-c8548b1da36c");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "686557db-5129-423a-b372-980898229a59", "fd137085-ef9b-432b-872b-93abaff948ca", "Client", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a4d54740-e22e-4822-a527-c8548b1da36c", "5ce461c3-f8ac-4be4-8e87-abfcab2cff96", "Administrator", null });
        }
    }
}
