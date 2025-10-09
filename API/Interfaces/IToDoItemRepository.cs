using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Repositories;

namespace API.Interfaces;

public interface IToDoItemRepository : IBaseRepository<ToDoItem>
{
}