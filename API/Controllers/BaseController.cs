using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.Serialization.DataContracts;
using System.Threading.Tasks;
using API.Data;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers;

[Route("API/[controller]")]
public class BaseController : ControllerBase
{
    protected readonly IMapper _mapper;
    protected readonly DataContext _context;

    public BaseController(IMapper mapper, DataContext context)
    {
        _mapper = mapper;
        _context = context;
    }   
}