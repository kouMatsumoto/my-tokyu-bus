# my-tokyu-bus
API server for Actions on Google


# Deploy

1. Configure ansible var files

copy `./vars/sample.yml` to following files.
and update variables of contents with your private information.

```bash
cp ./vars/sample.yml ./vars/vagrant.yml
cp ./vars/sample.yml ./vars/production.yml
```

2. Add your ssh-agent ssh-key to allow to access git-repository from remote-server.

```bash
$ ssh-add 'your-key'
```

3. Execute ansible-playbook

```bash
$ ansible-playbook vagrant.yml
$ ansible-playbook production.yml
```
