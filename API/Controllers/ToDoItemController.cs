using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ToDoItemController : BaseController
{
    private readonly ToDoItemRepository _itemRepository;
    public ToDoItemController(IMapper mapper, DataContext context) : base(mapper, context)
    {
        _itemRepository = new ToDoItemRepository(_context);
    }

    [HttpPost]
    public async Task<ActionResult> RegisterItem([FromBody] ToDoItem item)
    {
        await _itemRepository.Register(item);
        await _itemRepository.SaveAsync();
        return Ok();
    }

    [HttpGet("all")]
    public async Task<ActionResult<ToDoItem>> GetAllItems()
    {
        var items = await _itemRepository.GetAllAsync();
        return Ok(items);
    }

    [HttpDelete("delete")]
    public async Task<ActionResult> DeleteItem([FromBody]ToDoItem id)
    {
        try
        {
            ToDoItem item = new ToDoItem { Id = id.Id };
            _itemRepository.Delete(item);
            await _itemRepository.SaveAsync();
            return Ok();

        } catch(Exception ex)
        {
            return BadRequest(ex.Message);
            // return StatusCode(418);
        }
    }
}