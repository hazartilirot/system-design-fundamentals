### Reverse-Proxy

Before executing commands [Docker Desktop](https://www.docker.com/products/docker-desktop) should be installed

Once installed, enter the following command:

`docker-compose up`

Open a new terminal window, type

`curl localhost:80/hello`

The running nginx server would receive the request, add a new header to it and 
redirect the request to a different inner host and port.

Stop running docker:

`docker-compose down`

after than delete all images:

`docker image rm $(docker image ls -q)`

In case you interrupted the docker's processes apart from deleting images 
all containers must be pruned:

`docker container prune`

