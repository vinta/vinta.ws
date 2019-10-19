# [vinta.ws](https://vinta.ws/)

The deployment of my WordPress blogs on Kubernetes ([Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/)).

## Deployment

```console
$ cd kubernetes

$ kubectl apply -f ingress.yaml
$ kubectl apply -f storageclass.yaml
$ kubectl apply -f . -R
```
