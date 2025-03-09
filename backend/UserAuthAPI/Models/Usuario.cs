using Microsoft.AspNetCore.Identity;

namespace UserAuthAPI.Models
{
    public class Usuario : IdentityUser
    {
        public string Nome { get; set; }
    }
}
