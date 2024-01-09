using Invisibles.DTO.FromFront.Machine.queries;

namespace Invisibles.Interface.IConnectPython
{
    public interface IConnectPython
    {
        Task<Machine_Python_Dto> AcceptMachine();


    }
}
