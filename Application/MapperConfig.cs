
using Nelibur.ObjectMapper;

namespace Application
{
    public class MapperConfig
    {
        public static void Config()
        {
            TinyMapper.Bind<Application.Renters.Edit.Command, Domain.Renter>();
            TinyMapper.Bind<Application.User.Register.Command, Domain.AppUser>();
            TinyMapper.Bind<Domain.AppUser, Application.User.User>(config =>
            {
                config.Bind(source => source.UserName, target => target.Username);
            });
            TinyMapper.Bind<Application.BasiesInfo.Update.Command, Domain.BaseInfo>();
            TinyMapper.Bind<Application.BasiesInfo.Create.Query, Domain.BaseInfo>();
            TinyMapper.Bind<Application.BasiesInfo.Create.Query, Domain.Bank>();
        }
    }
}