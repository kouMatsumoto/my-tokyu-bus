# my-tokyu-bus
API server for Actions on Google


# Server

This project uses `Ansible` to setup server and deploy application.


### Setup server

1. Enable `ansible`

First of all, install `andible` to your server.
See official installation [http://docs.ansible.com/ansible/intro_installation.html](http://docs.ansible.com/ansible/intro_installation.html).

2. Create variable file of ansible

Because the variable file has private information, so it should not be managed by VCS.
To use ansible, you need to create your original variable file.
Create `./vars/production.yml` based on `./vars/sample.yml`.

```bash
cp ./vars/sample.yml ./vars/production.yml
```

3. Create nginx.conf.j2

Same as previous, nginx.conf file contain private information.
So this file is ignored for VCS.
Create your own nginx.conf file based on `./roles/nginx/templates/sample.conf.j2` 

```bash
cp ./roles/nginx/templates/sample.conf.j2 ./roles/nginx/templates/nginx.conf.j2
```

4. Execute `ansible-playbook` to setup middlewares

```bash
$ ansible-playbook production-setup.yml
```


### Deploy application

1. Add your ssh-agent ssh-key to access git-repository.

```bash
$ ssh-add 'your-key'
```

2. Execute ansible-playbook

```bash
$ ansible-playbook production.yml
```
