using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromPython.Machine.command;
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
        private readonly IValidator<AcceptMachine_Create_Dto> _validatorAcceptMachineF;
        private readonly IValidator<MinimizeMachine_Create_Dto> _validatorMinimizeMachineF;
        private readonly IValidator<SpplementMachine_Create_Dto> _validatorSpplementMachineF;
        private readonly IValidator<MachinePython_Create_Dto> _validatorMachinePythonP;
        private readonly IConnectPython _connectPython;

        public MachineController(IValidator<Machine_Create_Dto> validatorMachineF,
            IValidator<AcceptMachine_Create_Dto> validatorAcceptMachineF,
            IValidator<MinimizeMachine_Create_Dto> validatorMinimizeMachineF,
            IValidator<SpplementMachine_Create_Dto> validatorSpplementMachineF,
            IValidator<MachinePython_Create_Dto> validatorMachinePythonP,
            IConnectPython connectPython)
        {
            _validatorMachineF = validatorMachineF;
            _validatorAcceptMachineF = validatorAcceptMachineF;
            _validatorMinimizeMachineF = validatorMinimizeMachineF;
            _validatorSpplementMachineF = validatorSpplementMachineF;
            _validatorMachinePythonP = validatorMachinePythonP;
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



        [HttpPost("Post_SpplementMachine")]
        public async Task<ActionResult> Post_SpplementMachine(SpplementMachine_Create_Dto spplementMachine_Create_Dto)
        {
            //validation



            var AcceptMachineResult = await _connectPython.SpplementMachine(spplementMachine_Create_Dto);


            return Ok(AcceptMachineResult);
        }
    }
}
