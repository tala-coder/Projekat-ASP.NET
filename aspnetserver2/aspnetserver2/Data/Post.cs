using System.ComponentModel.DataAnnotations;

namespace aspnetserver2.Data
{
    internal sealed class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Naslov_oglasa { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Naziv_firme { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Lokacija { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Iskustvo { get; set; } = string.Empty;

        [Required]
        [MaxLength(100000)]
        public string Opis { get; set; } = string.Empty;


        [MaxLength(100)]
        public string Apliciraj_link { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Slika_firme { get; set; } = string.Empty;



    }
}
