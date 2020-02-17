### assword (LOCAL SERVER)

$ ssh brad@192.168.1.29
Create folder, file, install Apache (Just messing around)

$ mkdir test

$ cd test

$ touch hello.txt

$ sudo apt-get install apache2
Generate Keys (Local Machine)

$ ssh-keygen
Add Key to server in one command

> cat ~/.ssh/id_rsa.pub | ssh brad@192.168.1.29 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys
Create & copy a file to the server using SCP

$ touch test.txt $ scp ~/test.txt brad@192.168.1.29:~
DIGITAL OCEAN

    Create account->create droplet

Create Keys For Droplet (id_rsa_do)

$ ssh-keygen -t rsa

    Add Key When Creating Droplet

Try logging in

$ ssh root@doserver
If it doesn't work

$ ssh-add ~/.ssh/id_rsa_do (or whatever name you used)
Login should now work

$ ssh root@doserver
Update packages

$ sudo apt update

$ sudo apt upgrade
Create new user with sudo

$ adduser brad

$ id brad

$ usermod -aG sudo brad

$ id brad
Login as brad

> ssh brad@doserver
We need to add the key to brads .ssh on the server, log back in as root

$ ssh root@doserver

$ cd /home/brad

$ mkdir .ssh

$ cd .ssh

$ touch authorized_keys

> sudo nano authorized_keys (paste in the id_rsa_do.pub key, exit and log in as brad)
Disable root password login

$ sudo nano /etc/ssh/sshd_config
Set the following

PermitRootLogin no

PasswordAuthentication no
Reload sshd service

$ sudo systemctl reload sshd
Change owner of /home/brad/* to brad

$ sudo chown -R brad:brad /home/brad
May need to set permission

$ chmod 700 /home/brad/.ssh
Install Apache and visit ip

$ sudo apt install apache2 -y
Github
Generate Github Key(On Server)

$ ssh-keygen -t rsa (id_rsa_github or whatever you want)
Add new key

$ ssh-add /home/brad/.ssh/id_rsa_github
If you get a message about auth agent, run this and try again

```$ eval `ssh-agent -s````
Clone repo

$ git clone git@github.com:bradtraversy/react_otka_auth.git
Install Node

$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

$ sudo apt-get install -y nodejs
Install Dependencies

$ npm install
Start Dev Server and visit ip:3000

$ npm start
Build Out React App

$ npm run build
Move static build to web server root

$ sudo mv -v /home/brad/react_otka_auth/build/* /var/www/html
@akrishnakumar-splunk
akrishnakumar-splunk commented over 1 year ago • edited over 1 year ago

How about using Ansible for automating the stuff? It's a DevOps tool for automating the tasks (deployments in this case) or just making changes repetitively (like you wanna repeat a single task every time). It uses SSH and easy to learn (as it's YAML)

Resource: https://www.ansible.com/
@sumitmanchanda01
sumitmanchanda01
commented over 1 year ago

A ton of thanks Brad !!y You really bring change in My life !!
@bradtraversy
bradtraversy
commented over 1 year ago

Akrish, the answer is because this is part of a tutorial. Services like that are good for people that already know how to do these things
@briancalma
briancalma
commented over 1 year ago

Sir how i wish that you will also create a video for deploying LARAVEL using SSH , DIGITAL OCEAN and LEMP Stack.
@gopibabus
gopibabus
commented over 1 year ago

Thanks Brad, you educating me a lot. Thanks for all your tutorials.
@Berenddeperend
Berenddeperend
commented about 1 year ago

You forgot a closing quote in the 'Add Key to server in one command' part. Other than that, very helpful!
@DV2017
DV2017
commented 12 months ago

Really cool stuff! Awesome, Brad. Thanks a ton. This is a BIG help to beginners like me (sometimes I feel I am always a beginner! :( ... )
@ggallovalle
ggallovalle
commented 5 months ago

Really good, thanks for sharing
@walidabou
walidabou
commented 4 months ago

Just awesome! Simple & Useful
@Kibza
Kibza
commented 4 months ago

Awesome content!
@Noso4eg
Noso4eg commented 3 months ago • edited 3 months ago

Thank's a lot!
This string needs a quote at the end, and the character ">" at the beginning of the string needs to be removed:
https://gist.github.com/bradtraversy/f03df587f2323b50beb4250520089a9e#add-key-to-server-in-one-command
@mouadTaoussi
mouadTaoussi commented about 2 months ago • edited about 2 months ago

Thank You Brad You're Brilliant!
Comment on gist
Sign in to comment
or sign up to join this conversation on GitHub

        