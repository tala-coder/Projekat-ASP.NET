using Microsoft.EntityFrameworkCore;

namespace aspnetserver2.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] postsToSeed = new Post[6];

            for (int i = 1; i <= 6; i++)
            {
                postsToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Naslov_oglasa = $"Post {i}",
                    Naziv_firme = $"Naziv_firme {i}",
                    Lokacija = $"Lokacija {i}",
                    Iskustvo = $"Iskustvo {i}",
                    Apliciraj_link = $"Apliciraj_link {i}",
                    Slika_firme = $"Slika_firme {i}" 
                 };
            }

            modelBuilder.Entity<Post>().HasData(postsToSeed);
        }*/
    }
}
