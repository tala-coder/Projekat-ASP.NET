/*using System.ComponentModel.DataAnnotations;
namespace aspnetserver.Data

{
    internal sealed class Post // available only in this projekt
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


        public int Broj_apliciranih { get; set; } = 0;
    }
}*/
using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Data
{
    internal sealed class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(100000)]
        public string Content { get; set; } = string.Empty;
    }
}
