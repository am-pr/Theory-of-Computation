using Invisibles.Interface.Istatus;

namespace Invisibles.Status
{
    public class StatusFunction : Istatus
    {

        public Status ReturnStatus(string Massage, int statuscode)
        {
            var status = new Status()
            {
                Massage = Massage,
                status = statuscode
            };

            return status;
        }
    }
}
