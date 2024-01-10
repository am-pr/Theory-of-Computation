using System.Net.NetworkInformation;

namespace Invisibles.Interface.Istatus
{
    public interface Istatus
    {
        Status.Status ReturnStatus(string Massage, int statuscode);
    }
}
