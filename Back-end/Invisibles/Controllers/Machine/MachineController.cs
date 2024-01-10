using FluentValidation;
using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.command;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromPython.Machine.command;
using Invisibles.Interface.IConnectPython;
using Invisibles.Interface.Istatus;
using Invisibles.Interface.Ivalidation;
using Invisibles.Validate.Front;
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
        private readonly IValidation _validationChar;
        private readonly Istatus _status;
        public MachineController(IValidator<Machine_Create_Dto> validatorMachineF,
            IValidator<AcceptMachine_Create_Dto> validatorAcceptMachineF,
            IValidator<MinimizeMachine_Create_Dto> validatorMinimizeMachineF,
            IValidator<SpplementMachine_Create_Dto> validatorSpplementMachineF,
            IValidator<MachinePython_Create_Dto> validatorMachinePythonP,
            IConnectPython connectPython,
            IValidation validationChar,
            Istatus status)
        {
            _validatorMachineF = validatorMachineF;
            _validatorAcceptMachineF = validatorAcceptMachineF;
            _validatorMinimizeMachineF = validatorMinimizeMachineF;
            _validatorSpplementMachineF = validatorSpplementMachineF;
            _validatorMachinePythonP = validatorMachinePythonP;
            _connectPython = connectPython;
            _validationChar = validationChar;
            _status = status;
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


            string checkState = _validationChar.CheckChracter(machine_Create_Dto.State);


            if (checkState != null)
                return BadRequest(_status.ReturnStatus($"{checkState}" , 400));

            string checkAlphabet = _validationChar.CheckChracter(machine_Create_Dto.alphabet);

            if (checkAlphabet != null)
                return BadRequest(_status.ReturnStatus($"{checkAlphabet}", 400));



            return Ok();

        }


        [HttpPost(" Post_AcceptMachine")]
        public async Task<ActionResult> Post_AcceptMachine(AcceptMachine_Create_Dto acceptMachine_Create_Dto)
        {
            //validation
            var Validate = await _validatorAcceptMachineF.ValidateAsync(acceptMachine_Create_Dto);


            if (!Validate.IsValid)
                return Ok(Validate.Errors);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);


            string checkState = _validationChar.CheckChracter(acceptMachine_Create_Dto.State);

            if (checkState != null)
                return BadRequest(_status.ReturnStatus($"{checkState}", 400));

            string checkAlphabet = _validationChar.CheckChracter(acceptMachine_Create_Dto.alphabet);

            if (checkAlphabet != null)
                return BadRequest(_status.ReturnStatus($"{checkAlphabet}", 400));

            var AcceptMachineResult = await _connectPython.AcceptMachine(acceptMachine_Create_Dto);



            return Ok(AcceptMachineResult);
        }


        [HttpPost("Post_MinimizeMachine")]
        public async Task<ActionResult> Post_MinimizeMachine(MinimizeMachine_Create_Dto minimizeMachine_Create)
        {
            //validation
            var Validate = await _validatorMinimizeMachineF.ValidateAsync(minimizeMachine_Create);


            if (!Validate.IsValid)
                return Ok(Validate.Errors);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);



            string checkState = _validationChar.CheckChracter(minimizeMachine_Create.State);
            
            if (checkState != null)
                return BadRequest(_status.ReturnStatus($"{checkState}", 400));

            string checkAlphabet = _validationChar.CheckChracter(minimizeMachine_Create.alphabet);
            
            if (checkAlphabet != null)
                return BadRequest(_status.ReturnStatus($"{checkAlphabet}", 400));



            var MinimizeMachineResult = await _connectPython.MinimizeMachine(minimizeMachine_Create);

            //validation for Pythone
            Validate = await _validatorMachinePythonP.ValidateAsync(MinimizeMachineResult);


            if (!Validate.IsValid)
                return Ok(_status.ReturnStatus("error in server" , 500));

            if (!ModelState.IsValid)
                return Ok(_status.ReturnStatus("error in server", 500));


            return Ok(MinimizeMachineResult);
        }



        [HttpPost("Post_SpplementMachine")]
        public async Task<ActionResult> Post_SpplementMachine(SpplementMachine_Create_Dto spplementMachine_Create_Dto)
        {
            //validation
            var Validate = await _validatorSpplementMachineF.ValidateAsync(spplementMachine_Create_Dto);


            if (!Validate.IsValid)
                return Ok(Validate.Errors);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);


            string checkState = _validationChar.CheckChracter(spplementMachine_Create_Dto.State);

            if (checkState != null)
                return BadRequest(_status.ReturnStatus($"{checkState}", 400));

            string checkAlphabet = _validationChar.CheckChracter(spplementMachine_Create_Dto.alphabet);

            if (checkAlphabet != null)
                return BadRequest(_status.ReturnStatus($"{checkAlphabet}", 400));


            var SpplementMachineResult = await _connectPython.SpplementMachine(spplementMachine_Create_Dto);



            //validation for Pythone
            Validate = await _validatorMachinePythonP.ValidateAsync(SpplementMachineResult);


            if (!Validate.IsValid)
                return Ok(_status.ReturnStatus("error in server", 500));

            if (!ModelState.IsValid)
                return Ok(_status.ReturnStatus("error in server", 500));


            return Ok(SpplementMachineResult);
        }
    }
}
