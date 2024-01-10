using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromPython.Machine.command;
using Invisibles.Interface.IConnectPython;
using Invisibles.Repository;
using Invisibles.Validate.Front;
using Invisibles.Validate.Python;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



#region Add Dep ...

#region Dep for tbl

builder.Services.AddScoped<IConnectPython, ConnectPython_Rep>();


#endregion


#region Dep for Validation

builder.Services.AddScoped<IValidator<Machine_Create_Dto>, Machine_V_Create_Dto>();

builder.Services.AddScoped<IValidator<AcceptMachine_Create_Dto>, AcceptMachine_V_Create_Dto>();

builder.Services.AddScoped<IValidator<MinimizeMachine_Create_Dto>, MinimizeMachine_V_Create_Dto>();

builder.Services.AddScoped<IValidator<SpplementMachine_Create_Dto>, SpplementMachine_V_Create_Dto>();

builder.Services.AddScoped<IValidator<MachinePython_Create_Dto>, MachinePython_V_Create_Dto>();

#endregion

#region Oders



#endregion

#endregion







var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
