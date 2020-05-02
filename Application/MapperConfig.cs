using AutoMapper;

namespace Application
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Application.Founders.Edit.Command, Domain.AppUser>();
            CreateMap<Application.User.Register.Command, Domain.AppUser>();
            CreateMap<Domain.AppUser, Application.User.User>().ForMember(t => t.Username, o => o.MapFrom(s => s.UserName));
            CreateMap<Application.BasiesInfo.Update.Command, Domain.BaseInfo>();
            CreateMap<Application.BasiesInfo.Create.Query, Domain.BaseInfo>();
            CreateMap<Application.BasiesInfo.Create.Query, Domain.Bank>();
            CreateMap<Application.BasiesInfo.Create.Query, Domain.InsuranceType>();
            CreateMap<Application.BasiesInfo.Create.Query, Domain.InsuranceCompany>();


            CreateMap<Domain.Founder, Application.Founders.FounderDto>().ReverseMap();
            CreateMap<Domain.Photo, Application.Photos.PhotoDto>().ReverseMap();
        }
    }
}