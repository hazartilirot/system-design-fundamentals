Two hosts with latencies are passed into mapReduce function. It splits data 
in two (those whose latency is more than 10000 ms and the other whose 
latency is less than 10 seconds). The execution result is stored in a 
separate file for each host. Then, other function, goes over each file
aggregating the previous results, summing up values, storing into a main 
file in the root directory.

###executing the run.sh if you're a Windows 10 user:

For those who don't know how to pass environment variables or run linux 
scripts there is actually a real simple way to do so. First of all check out if 
WSL is enabled. If it isn't [RTFM](https://docs.microsoft.com/en-us/windows/wsl/install)

Once it's up and running you should, in your Webstorm or VSCode, type the 
following command: `bash` and hit enter. You don't have to install a linux 
distro;

Afterwards open the [repo](https://github.com/nodesource/distributions/blob/master/README.md):
and execute two commands one after another:

`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

That's it!

Now, just type: `bash ./run.sh`

Note I pass some environment variables in the script. No pain with PowerShell!

Type `exit` return to PowerShell.