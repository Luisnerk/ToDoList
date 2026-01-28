using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;
using AutoMapper;

namespace API.Helpers;
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<ToDoItem, ToDoItemDto>().ReverseMap();
        CreateMap<ToDoItem, ToDoItem>();
    }
    
}