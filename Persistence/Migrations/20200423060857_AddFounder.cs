using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddFounder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Renters");

            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "FounderId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Founders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    rFirstName = table.Column<string>(nullable: true),
                    rLastName = table.Column<string>(nullable: true),
                    rSub = table.Column<string>(nullable: true),
                    rTitle = table.Column<string>(nullable: true),
                    rContactMail = table.Column<string>(nullable: true),
                    rEnable = table.Column<bool>(nullable: false),
                    rCreate = table.Column<DateTime>(nullable: false),
                    rExpire = table.Column<DateTime>(nullable: false),
                    AppUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Founders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Founders_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Founders_AppUserId",
                table: "Founders",
                column: "AppUserId",
                unique: true,
                filter: "[AppUserId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Founders");

            migrationBuilder.DropColumn(
                name: "FounderId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Renters",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    rContactMail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rCreate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    rEnable = table.Column<bool>(type: "bit", nullable: false),
                    rExpire = table.Column<DateTime>(type: "datetime2", nullable: false),
                    rName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rSub = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rTitle = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Renters", x => x.Id);
                });
        }
    }
}
