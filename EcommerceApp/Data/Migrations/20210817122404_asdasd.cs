using Microsoft.EntityFrameworkCore.Migrations;

namespace EcommerceApp.Migrations
{
    public partial class asdasd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1f00a9a1-8ccd-4634-a1a5-ee9acda010ee");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "21a1b734-ce38-4c6b-b300-c88f8f868514");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "686557db-5129-423a-b372-980898229a59", "fd137085-ef9b-432b-872b-93abaff948ca", "Client", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a4d54740-e22e-4822-a527-c8548b1da36c", "5ce461c3-f8ac-4be4-8e87-abfcab2cff96", "Administrator", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "686557db-5129-423a-b372-980898229a59");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a4d54740-e22e-4822-a527-c8548b1da36c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1f00a9a1-8ccd-4634-a1a5-ee9acda010ee", "8f64d4fc-8b3b-42b1-9f2e-d6dad6f7a4f3", "Client", "CLIENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "21a1b734-ce38-4c6b-b300-c88f8f868514", "25907121-6da6-4886-add4-5dce783bdfd9", "Administrator", "ADMINISTRATOR" });
        }
    }
}
