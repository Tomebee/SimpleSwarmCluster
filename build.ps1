docker build -t simple_swarm_cluster_api_gateway -f Services/ApiGateway/Dockerfile Services/.
docker build -t simple_swarm_cluster_nginx -f Services/Nginx/Dockerfile Services/.