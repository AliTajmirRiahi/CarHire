using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class EditFounder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "rFirstName",
                table: "Founders");

            migrationBuilder.DropColumn(
                name: "rLastName",
                table: "Founders");

            migrationBuilder.AddColumn<string>(
                name: "aFirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "aLastName",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "aFirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "aLastName",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "rFirstName",
                table: "Founders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "rLastName",
                table: "Founders",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
