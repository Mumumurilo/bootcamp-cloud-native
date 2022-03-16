# Solution for the Postgresql Lab

## Administrative Setup - Ran by the administrators
```
ibmcloud resource service-instance-create bootcamp-psql databases-for-postgresql standard us-south
ibmcloud ks cluster service bind --cluster <clustername> --namespace default --service bootcamp-psql
```
Manually change the secret and store it in a file
get the secret, copy it to a yaml file, and change it up

## Steps

1. Get the postgress-secret.yaml file from the instructor and apply it
```
kubectl apply -f postgress-secret.yaml -n student<id>
```
2. Look over the clouddb deployment.yaml, then apply it
```
kubectl apply -f clouddb-deployment.yaml -n student<id>
```
3. See that the pod created successfully
```
kubectl get pod -l run=clouddb-demo
```
4. Forward the service to 8080
```
kubectl port-forward service/cloudpostgres-service 8080:8080 -n student<id>
```
5. Open a browser and navigate to 
```
http://localhost:8080
```