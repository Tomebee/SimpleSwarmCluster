& .\build.ps1
& .\deploy-networks.ps1
docker stack deploy --compose-file .\stack.yml simple_swarm_cluster