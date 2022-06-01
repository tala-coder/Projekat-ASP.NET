using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspnetserver2.Data.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naslov_oglasa = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Naziv_firme = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Lokacija = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Iskustvo = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Opis = table.Column<string>(type: "TEXT", maxLength: 100000, nullable: false),
                    Apliciraj_link = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Slika_firme = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 1, "Apliciraj_link 1", "Iskustvo 1", "Lokacija 1", "Post 1", "Naziv_firme 1", "", "Slika_firme 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 2, "Apliciraj_link 2", "Iskustvo 2", "Lokacija 2", "Post 2", "Naziv_firme 2", "", "Slika_firme 2" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 3, "Apliciraj_link 3", "Iskustvo 3", "Lokacija 3", "Post 3", "Naziv_firme 3", "", "Slika_firme 3" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 4, "Apliciraj_link 4", "Iskustvo 4", "Lokacija 4", "Post 4", "Naziv_firme 4", "", "Slika_firme 4" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 5, "Apliciraj_link 5", "Iskustvo 5", "Lokacija 5", "Post 5", "Naziv_firme 5", "", "Slika_firme 5" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Apliciraj_link", "Iskustvo", "Lokacija", "Naslov_oglasa", "Naziv_firme", "Opis", "Slika_firme" },
                values: new object[] { 6, "Apliciraj_link 6", "Iskustvo 6", "Lokacija 6", "Post 6", "Naziv_firme 6", "", "Slika_firme 6" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
