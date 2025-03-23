### Clonar
```bash
git clone https://github.com/jackmmd/kubernetes
```
## Docker compose
```bash
docker-compose up
```
## Ejecución manual 
### Crear las images
```bash
cd kubernetes
```
```bash
cd api-1; docker build -t api-1-image .; cd .. ; 
cd api-2; docker build -t api-2-image .; cd ..;
cd api-3; docker build -t api-3-image .; cd ..; 
cd api-4; docker build -t api-4-image .; cd ..;
cd client; docker build -t client-image .; cd ..;

```

### Crear contenedores
```bash
docker run -d --name api-1-container -p 1000:3000 api-1-image;
docker run -d --name api-2-container -p 2000:3000 api-2-image;
docker run -d --name api-3-container -p 3000:3000 api-3-image;
docker run -d --name api-4-container -p 4000:3000 api-4-image;
```

### ELiminar los contenedores
```bash
docker rm -f api-1-container api-2-container api-3-container 
api-4-container

docker rm -f kubernetes-api-1-1 kubernetes-api-2-1 kubernetes-api-3-1 kubernetes-api-4-1 kubernetes-client-1
```

### Eliminar las imagenes
```bash
docker rmi api-1-image api-2-image api-3-image api-4-image client-image
```

### Consultar APIS
```bash
http://[direccion_ip]:1000
http://[direccion_ip]:2000
http://[direccion_ip]:3000
http://[direccion_ip]:4000
```