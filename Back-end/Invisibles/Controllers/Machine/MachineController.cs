using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.Interface.IConnectPython;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.NetworkInformation;

namespace Invisibles.Controllers.Machine
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly IValidator<Machine_Create_Dto> _validatorMachineF;
        private readonly IConnectPython _connectPython;
        public MachineController(IValidator<Machine_Create_Dto> validatorMachineF, IConnectPython connectPython)
        {
            _validatorMachineF = validatorMachineF;
            _connectPython = connectPython;
        }

        [HttpPost("post/Machine")]
        public async Task<ActionResult> Post_Machine
            (Machine_Create_Dto machine_Create_Dto)
        {
            //validation
            var Validate = await _validatorMachineF.ValidateAsync(machine_Create_Dto);


            if (!Validate.IsValid)
                return Ok(Validate.Errors);

            if(!ModelState.IsValid)
                return BadRequest(ModelState);








            return Ok();

        }


        [HttpPost(" Post_AcceptMachine")]
        public async Task<ActionResult> Post_AcceptMachine(AcceptMachine_Create_Dto acceptMachine_Create_Dto)
        {
            //validation



            var AcceptMachineResult = await _connectPython.AcceptMachine(acceptMachine_Create_Dto);


            return Ok(AcceptMachineResult);
        }


        [HttpPost("Post_MinimizeMachine")]
        public async Task<ActionResult> Post_MinimizeMachine(MinimizeMachine_Create_Dto minimizeMachine_Create)
        {
            //validation



            var AcceptMachineResult = await _connectPython.MinimizeMachine(minimizeMachine_Create);


            return Ok(AcceptMachineResult);
        }

    }
}
