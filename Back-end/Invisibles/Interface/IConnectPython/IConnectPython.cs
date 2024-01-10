using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.queries;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;
using Invisibles.DTO.FromPython.Machine.command;

namespace Invisibles.Interface.IConnectPython
{
    public interface IConnectPython
    {
        Task<MachinePython_Create_Dto> AcceptMachine(AcceptMachine_Create_Dto acceptMachine_Create_Dto);

        Task<MachinePython_Create_Dto> MinimizeMachine(MinimizeMachine_Create_Dto minimizeMachine_Create_Dto);

        Task<MachinePython_Create_Dto> SpplementMachine(SpplementMachine_Create_Dto spplementMachine_Create);
    }
}
