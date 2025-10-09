using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;
public static class ApplicationServiceExtension
{
    public static void AddApplicationServices(this IServiceCollection serviceCollection, IConfiguration configuration)
    {
        serviceCollection.AddDbContext<DataContext>(options => options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));
        serviceCollection.AddCors(options =>
            {
                options.AddPolicy(name: "CORS",
                policy => policy.WithOrigins("https://localhost:4200")
                                    .AllowAnyHeader()
                                    .AllowAnyMethod());
            });
        serviceCollection.AddAutoMapper(Assembly.GetEntryAssembly());
        serviceCollection.AddControllers();
    }
}