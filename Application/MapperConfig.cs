
using Nelibur.ObjectMapper;

namespace Application
{
    public class MapperConfig
    {
        public static void Config()
        {
            TinyMapper.Bind<Application.Renters.Edit.Command, Domain.Renter>();
        }
    }
}