using Microsoft.EntityFrameworkCore; // Puede que ya esté, si no, agrégala
// Agrega esta línea:
using LexiCoreApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// --- PEGA EL CÓDIGO DE LA BD AQUÍ ---
// 1. Obtenemos la cadena de conexión del archivo appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// 2. Agregamos el servicio de la base de datos (DbContext)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
// --- FIN DEL CÓDIGO DE LA BD ---

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // <-- NUEVO: Habilita el uso de Controladores.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// El código del WeatherForecast que venía de ejemplo lo podemos ignorar o borrar después.
// ...

app.MapControllers(); // <-- NUEVO: Le dice a la app que busque y use los endpoints de los Controladores.

app.Run();

// El 'record WeatherForecast' también lo podemos borrar después.
// ...