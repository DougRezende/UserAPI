using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UserAuthAPI.Models;

namespace UserAuthAPI.Data
{
    public class MeuDbContext : IdentityDbContext<Usuario>
    {
        public MeuDbContext(DbContextOptions<MeuDbContext> options)
            : base(options) { }
    }
}
