using Invisibles.DTO.FromFront.AcceptMachine.command;
using Invisibles.DTO.FromFront.Machine.queries;
using Invisibles.DTO.FromFront.MinimizeMachine.command;
using Invisibles.DTO.FromFront.SpplementMachine.command;

namespace Invisibles.Interface.IConnectPython
{
    public interface IConnectPython
    {
        Task<Machine_Python_Dto> AcceptMachine(AcceptMachine_Create_Dto acceptMachine_Create_Dto);

        Task<Machine_Python_Dto> MinimizeMachine(MinimizeMachine_Create_Dto minimizeMachine_Create_Dto);

        Task<Machine_Python_Dto> SpplementMachine(SpplementMachine_Create_Dto spplementMachine_Create);
    }
}
