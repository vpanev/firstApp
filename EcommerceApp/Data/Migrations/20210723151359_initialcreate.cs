using Microsoft.EntityFrameworkCore.Migrations;

namespace EcommerceApp.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clothes",
                columns: table => new
                {
                    ClothId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClothName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ClothBrand = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ClothSize = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    ClothType = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    PhotoFileName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ClothPrice = table.Column<double>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clothes", x => x.ClothId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clothes");
        }
    }
}
