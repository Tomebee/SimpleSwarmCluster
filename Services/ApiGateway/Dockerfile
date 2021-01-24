FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 81

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["ApiGateway/ApiGateway.csproj", ""]
RUN dotnet restore "ApiGateway.csproj"
COPY ApiGateway/. .
WORKDIR /src/
RUN dotnet build "ApiGateway.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ApiGateway.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ApiGateway.dll"]