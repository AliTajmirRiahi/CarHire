using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddRenter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Renters",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    rName = table.Column<string>(nullable: true),
                    rSub = table.Column<string>(nullable: true),
                    rTitle = table.Column<string>(nullable: true),
                    rContactMail = table.Column<string>(nullable: true),
                    rEnable = table.Column<bool>(nullable: false),
                    rCreate = table.Column<DateTime>(nullable: false),
                    rExpire = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Renters", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Renters");
        }
    }
}
